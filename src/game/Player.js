import Entity from './EntityInterface'

import {BoundingGroupNames} from './core'

import {Vector2d as vec2, Size2d as size2} from '../lib/Vector2d'

import BoundingBox from '../lib/BoundingBox'

import {Updatable, Boundable, Renderable} from './decorators/EntityDescriptions'

/**
 * Represents a player in the game world which the user controls.
 */
@Boundable(BoundingGroupNames.Player)
@Renderable
@Updatable
export default class Player extends Entity {
    /**
     * Player constructor
     * @param  {KeyState} keyState  KeyState instance which the player intance will use for the current key-state
     */
    constructor(keyState) {
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
            y: -750
        })

        this.keyState = keyState;
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

    /**
     * Checks the collisions for the player instance, and will signal on the GameLogic instance if the player has collided 
     * with an obstacle. If the player has collided with an obstacle then this function returns true immediately after triggering an event on GameLogic.
     */
    _checkCollisions(BoundingMap, gameLogic) {
        for (let entity of BoundingMap.get(BoundingGroupNames.Blocks)) {
            if (BoundingBox.isCollision(this.getBoundingBox(), entity.getBoundingBox())) {
                gameLogic.events.playerHitBlock.publish();
                return true;
            }
        }

        return false;
    }

    update(delta, BoundingMap, gameLogic) {

        if (!this._checkCollisions(BoundingMap, gameLogic)) {
            if (this.position.y <= 0) {
                this.velocity.y = 0;

                if (this.keyState.get('up_arrow')) {
                    this.velocity.y = 400;
                }
            } else {
                this.velocity.y += this.acceleration.y * (delta/1000);
            }

            this.position.x += this.velocity.x * (delta/1000);
            this.position.y += this.velocity.y * (delta/1000);
        }
    }

    render(context, globalTime, applyScreenTransform) {
        let ctxWidth = context.canvas.width
        let ctxHeight = context.canvas.height

        //Changing colour over time
        let hue = (Math.sin((globalTime / 6000) * Math.PI) + 1) * 360

        applyScreenTransform(this.position, this.size);

        context.fillStyle = `hsl(${hue}, 30%, 70%)`
        context.fillRect(0, 0, this.size.width, this.size.height)
    }
}