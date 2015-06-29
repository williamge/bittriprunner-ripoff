import Entity from './EntityInterface'

import {Vector2d as vec2, Size2d as size2} from '../lib/Vector2d'

import {BoundingGroupNames} from './core'

import BoundingBox from '../lib/BoundingBox'

import {Updatable, Boundable, Renderable} from './decorators/EntityDescriptions'

@Boundable(BoundingGroupNames.Blocks)
@Renderable
@Updatable
export class Obstacle extends Entity {
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

export function *loadObstaclesFromJson(worldInfo, JsonList, offsetX) {
    for (let obstacleDef of JsonList) {
        yield new Obstacle(worldInfo, obstacleDef.size, new vec2({
            x: obstacleDef.position.x + offsetX,
            y: obstacleDef.position.y
        }));
    }
}