
import {Symbols as EntitySymbols} from './decorators/EntityDescriptions'

function now() {
    let _nowDate = new Date()
    return _nowDate.getTime()
}

export class GameCore {
    constructor(context, camera) {
        this.context = context;

        this._entities = [];
        this._updatables = [];
        this._renderables = [];

        this._boundingGroups = {
            player: [],
            blocks: [],
            unknown: []
        }

        this.camera = camera;

        this._transformPointToRender = (position, size) => {
            return {
                y: this.worldInfo.height - size.height - position.y,
                x: position.x
            }
        }
    }

    addEntity(entity) {
        this._entities.push(entity);
        if (entity.constructor[EntitySymbols.updatable]) {
            this._updatables.push(entity)
        }
        if (entity.constructor[EntitySymbols.renderable]) {
            this._renderables.push(entity)
        }
        if (entity.constructor[EntitySymbols.boundable]) {
            if (entity.getBoundingBox.boundingGroup != null) {
                if (this._boundingGroups[entity.getBoundingBox.boundingGroup] != null){
                    this._boundingGroups[entity.getBoundingBox.boundingGroup].push(entity);
                } else {
                    console.warn(`Bounding group '${entity.getBoundingBox.boundingGroup}' is not defined for this game`);
                }
            } else {
                console.warn(`No bounding group defined for entity '${entity}'. It will be added to the unknown group instead.`);
                this._boundingGroups.unknown.push(entity);
            }
        }
        return this;
    }

    getTransformer() {
        return (position, size) => {
            return {
                y: this.worldInfo.height - size.height - position.y,
                x: position.x
            }
        }
    }

    getScreenTransform() {
        return (position, size) => {
            let renderCoordinates = this.getTransformer()(position, size);
            this.context.translate(renderCoordinates.x,renderCoordinates.y)
        }
    }

    get worldInfo() {
        return {
            height: this.context.canvas.height,
            width: this.context.canvas.width
        }
    }
}

export class GameLoop {
    constructor(gameCore) {
        this.gameCore = gameCore;
        this._lastUpdateTime = 0;

        this.running = false;
        this._interval = null;
    }

    update() {
        if (this._lastUpdateTime == 0) {
            this._lastUpdateTime = now();
        }
        let _now = now()
        let delta = _now - this._lastUpdateTime
        this._lastUpdateTime = _now

        this.gameCore._updatables.forEach((updatable) => {
            updatable.update(delta);
        });

        this.gameCore.camera.update(delta);

    }

    render() {
        this.gameCore.context.save()

        this.gameCore.context.fillStyle = 'hsl(0, 0%, 99%)'
        this.gameCore.context.fillRect(0, 0, this.gameCore.context.canvas.width, this.gameCore.context.canvas.height)

        this.gameCore.context.translate(this.gameCore.camera.position.x, this.gameCore.camera.position.y);

        this.gameCore._renderables.forEach((renderable) => {
            this.gameCore.context.save()
            renderable.render(this.gameCore.context, this._lastUpdateTime, this.gameCore.getScreenTransform())
            this.gameCore.context.restore()
        })

        this.gameCore.context.restore()
    }

    startLoop() {
        this.running = true;
        this._interval = setInterval(() => {
            this.update();
            this.render();
        }, 1);
    }

    pauseLoop() {
        this.running = false;
        clearInterval(this._interval);
    }

}

