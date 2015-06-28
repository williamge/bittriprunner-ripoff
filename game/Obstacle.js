import Entity from './EntityInterface'

import {Vector2d as vec2, Size2d as size2} from '../lib/Vector2d'

import BoundingBox from '../lib/BoundingBox'

import BoundingGroup from './decorators/BoundingGroup'
import {Updatable, Boundable, Renderable} from './decorators/EntityDescriptions'

@Boundable
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

    @BoundingGroup('block')
    getBoundingBox() {
        return new BoundingBox(
            this.position.copy(),
            this.position.add(this.size)
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

export function *loadObstaclesFromJson(worldInfo, JsonList) {
    for (let obstacleDef of JsonList) {
        yield new Obstacle(worldInfo, obstacleDef.size, obstacleDef.position);
    }
}