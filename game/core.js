
import {Symbols as EntitySymbols} from './decorators/EntityDescriptions'

import Channel from '../lib/Channel'

function now() {
    let _nowDate = new Date()
    return _nowDate.getTime()
}

export const BoundingGroupNames = {
    Player: Symbol('Player'),
    Blocks: Symbol('Blocks'),
    UNKNOWN: Symbol('UNKNOWN')
}

export class GameLogic {
    constructor() {
        this.events = {
            playerHitBlock: new Channel()
        }

        this.state = {
            gameRunning: false
        }
    }
}

export class GameCore {
    constructor(context, camera, gameLogic) {
        this.context = context;

        this._entities = new Set();
        this._updatables = new Set();
        this._renderables = new Set();

        this._boundingGroups = new Map();

        for (let name of Object.keys(BoundingGroupNames)) {
            this._boundingGroups.set(BoundingGroupNames[name], new Set());
        }

        this.camera = camera;
        this.gameLogic = gameLogic;

        this._transformPointToRender = (position, size) => {
            let renderCoordinates = {
                y: this.worldInfo.height - size.height - position.y,
                x: position.x
            };
            this.context.translate(renderCoordinates.x,renderCoordinates.y);
        }
    }

    addEntity(entity) {
        this._entities.add(entity);
        if (entity.constructor[EntitySymbols.updatable]) {
            this._updatables.add(entity)
        }
        if (entity.constructor[EntitySymbols.renderable]) {
            this._renderables.add(entity)
        }
        if (entity.constructor[EntitySymbols.boundable]) {
            if ( this._boundingGroups.has(entity.constructor[EntitySymbols.boundable]) ){
                this._boundingGroups.get(entity.constructor[EntitySymbols.boundable]).add(entity);
            } else {
                console.warn(`Bounding group '${entity.getBoundingBox.boundingGroup}' is not defined for this game`);
            }
        }
        return this;
    }

    removeEntity(entity) {
        [
            this._entities,
            this._updatables,
            this._renderables
        ].concat(this._boundingGroups.values)
        .forEach((set) => {
            set.delete(entity);
        })
    }

    update(delta) {
        this._updatables.forEach((updatable) => {
            if (this.gameLogic.state.gameRunning) {
                updatable.update(delta, this._boundingGroups, this.gameLogic);
            }
        });

        this.camera.update(delta);
    }

    render(globalTime) {
        this.context.save()

        this.context.fillStyle = 'hsl(0, 0%, 99%)'
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height)

        this.context.translate(this.camera.position.x, this.camera.position.y);

        this._renderables.forEach((renderable) => {
            this.context.save()
            renderable.render(this.context, globalTime, this._transformPointToRender)
            this.context.restore()
        })

        this.context.restore()
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
        this._lastUpdateTime = _now;

        this.gameCore.update(delta);
    }

    render() {
        this.gameCore.render(this._lastUpdateTime);
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

