
import {Symbols as EntitySymbols} from './decorators/EntityDescriptions'

import Channel from '../lib/Channel'

/**
 * Returns the current time in milliseconds. Not a high performance timer.
 * @return {number} The current time in milliseconds
 */
function now() {
    let _nowDate = new Date()
    return _nowDate.getTime()
}

export const BoundingGroupNames = {
    Player: Symbol('Player'),
    Blocks: Symbol('Blocks'),
    UNKNOWN: Symbol('UNKNOWN')
}

/**
 * Very stateful class for holding game logic. Put all your state in here please.
 */
export class GameLogic {
    constructor() {
        this.events = {
            playerHitBlock: new Channel(),
            shouldLoadNextZone: new Channel()
        }

        this.constants = {
            //TODO(wg): Just gonna use 2 for now for testing, should be random at some point
            seed: 2
        }

        this.state = {
            gameRunning: false
        }
    }
}

/**
 * Core engine-ish class for the game. Handles the holding of entities, calling update and render
 * on those entities, and describing/coralling the current game.
 */
export class GameCore {
    /**
     * Constructor method for GameCore
     * @param  {CanvasRenderingContext2D} context   The rendering context for the game
     * @param  {Camera} camera    A camera instance for the game
     * @param  {GameLogic} gameLogic Game logic instance for the game
     */
    constructor(context, camera, gameLogic) {
        this.context = context;
        this.camera = camera;
        this.gameLogic = gameLogic;

        this._entities = new Set();
        this._updatables = new Set();
        this._renderables = new Set();

        this._boundingGroups = new Map();

        //Sets up Set objects for each bounding group defined in the BoundingGroupNames enum
        for (let name of Object.keys(BoundingGroupNames)) {
            this._boundingGroups.set(BoundingGroupNames[name], new Set());
        }

        /**
         * Sets the function to transform points for rendering. This is passed to the game's
         * render loop
         * @param  {Vector2d} position 
         * @param  {Size2d} size     
         */
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
        if (entity[EntitySymbols.updatable]) {
            this._updatables.add(entity)
        }
        if (entity[EntitySymbols.renderable]) {
            this._renderables.add(entity)
        }
        if (entity[EntitySymbols.boundable]) {
            if ( this._boundingGroups.has(entity[EntitySymbols.boundable]) ){
                this._boundingGroups.get(entity[EntitySymbols.boundable]).add(entity);
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
        ].concat(
            [for (group of this._boundingGroups.values()) group]
        )
        .forEach((set) => {
            set.delete(entity);
        })
    }

    /**
     * Updates the game and calls the update loop on added entities
     * @param  {number} delta Time in milliseconds since the last call of update
     */
    update(delta) {
        this._updatables.forEach((updatable) => {
            if (this.gameLogic.state.gameRunning) {
                updatable.update(delta, this._boundingGroups, this.gameLogic);
            }
        });

        this.camera.update(delta);
    }

    /**
     * Renders the game and calls the render loop on added entities
     * @param  {number} globalTime Elapsed time since the start of the game
     */
    render(globalTime) {
        this.context.save()

        //Clearing the screen
        this.context.fillStyle = 'hsl(0, 0%, 99%)'
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height)

        //Camera transform
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

/**
 * Class for handling the continuous loop of a game.
 */
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

    /**
     * Starts or resumes the game loop and continuously calls #update and #render on the attached
     * GameCore until paused.
     */
    startLoop() {
        this.running = true;
        this._interval = setInterval(() => {
            this.update();
            this.render();
        }, 1);
    }

    /**
     * Pauses the game loop, can be resumed with #startLoop
     */
    pauseLoop() {
        this.running = false;
        clearInterval(this._interval);
    }

}

