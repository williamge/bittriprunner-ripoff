import Entity from './EntityInterface'

import {Vector2d as vec2, Size2d as size2} from '../lib/Vector2d'

import BoundingBox from '../lib/BoundingBox'

import BoundingGroup from './decorators/BoundingGroup'
import {Updatable, Boundable, Renderable} from './decorators/EntityDescriptions'

@Boundable
@Renderable
@Updatable
export default class Player extends Entity {
    constructor(worldInfo, keyState) {
        super();
        this.size = new size2({
            width: 10,
            height: 20
        })

        this.position = new vec2({
            x: 20,
            y: 0
        })

        this.velocity = new vec2({
            x: 200,
            y: 0
        })

        this.acceleration = new vec2({
            x: 0,
            y: -550
        })

        this.keyState = keyState;
    }

    @BoundingGroup('player')
    getBoundingBox() {
        return new BoundingBox(
            this.position.copy(),
            this.position.add(this.size)
        )
    }

    update(delta) {

        if (this.position.y <= 0) {
            this.velocity.y = 0;

            if (this.keyState.get('up_arrow')) {
                this.velocity.y = 350;
            }
        } else {
            this.velocity.y += this.acceleration.y * (delta/1000);
        }

        this.position.x += this.velocity.x * (delta/1000);
        this.position.y += this.velocity.y * (delta/1000);

    }

    render(context, globalTime, applyScreenTransform) {
        let ctxWidth = context.canvas.width
        let ctxHeight = context.canvas.height

        let hue = (Math.sin((globalTime / 6000) * Math.PI) + 1) * 360

        applyScreenTransform(this.position, this.size);

        context.fillStyle = `hsl(${hue}, 30%, 70%)`
        context.fillRect(0, 0, this.size.width, this.size.height)
    }
}