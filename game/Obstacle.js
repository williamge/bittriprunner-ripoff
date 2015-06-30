import Entity from './EntityInterface'

import {Vector2d as vec2, Size2d as size2} from '../lib/Vector2d'

import {BoundingGroupNames} from './core'

import BoundingBox from '../lib/BoundingBox'

import {Updatable, Boundable, Renderable} from './decorators/EntityDescriptions'

/**
 * Represents an obstacle in the game world which the player has to avoid or the game ends.
 */
@Boundable(BoundingGroupNames.Blocks)
@Renderable
@Updatable
export class Obstacle extends Entity {
    /**
     * Obstacle constructor
     * @param  {WorldInfo} worldInfo Info for the game world this instance will be added to
     * @param  {Size2d} size      Initial size for the obstacle
     * @param  {Vector2d} position  Initial position for the obstacle
     */
    constructor(worldInfo, size, position) {
        super();
        this.size = new size2({
            width: size.width,
            height: size.height
        });
        this.position = new vec2({
            x: position.x,
            y: position.y
        });

        this._colour = `hsl(${Math.random() * 360}, 30%, 50%)`;
    }

    getBoundingBox() {
        return new BoundingBox(
            new vec2({
                x: this.position.x,
                y: this.position.y + this.size.height
            }),
            new vec2({
                x: this.position.x + this.size.width,
                y: this.position.y
            })
        )
    }

    render(context, globalTime, applyScreenTransform) {
        let ctxWidth = context.canvas.width
        let ctxHeight = context.canvas.height

        applyScreenTransform(this.position, this.size);

        context.fillStyle = this._colour;
        context.fillRect(0, 0, this.size.width, this.size.height)
    }
}

/**
 * Generator which loads a series of blocks from a JSON list and places it relative in
 * the game world based on the given x-offset
 * @param {WorldInfo} worldInfo     WorldInfo for the game world that the obstacles will be added to
 * @param {Obstacle[]} JsonList      List of obstacle definitions that will be loaded
 * @param {number} offsetX       x-offset for the camera position in the world
 * @yield {Obstacle} initialized Obstacle instance
 */
export function *loadObstaclesFromJson(worldInfo, JsonList, offsetX) {
    for (let obstacleDef of JsonList) {
        yield new Obstacle(worldInfo, obstacleDef.size, new vec2({
            x: obstacleDef.position.x + offsetX,
            y: obstacleDef.position.y
        }));
    }
}