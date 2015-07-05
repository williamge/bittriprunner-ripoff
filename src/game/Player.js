import Entity from './EntityInterface'

import {BoundingGroupNames} from './core'

import {Vector2d as vec2, Size2d as size2} from '../lib/Vector2d'

import BoundingBox from '../lib/BoundingBox'

import {Decorators as EntityDecorators, ZLevels} from './decorators/EntityDescriptions'
const {Updatable, Boundable, Renderable} = EntityDecorators;

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

        this.personalCanvas = document.createElement('canvas');
        this.oldCameraPosition = 0;

        this.zIndex = ZLevels.IMMEDIATE_FOREGROUND;
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
                this.position.y = 0;
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

    render(context, globalTime, {applyScreenTransform, applyCameraTransform}, camera) {

        let mixingCanvas = document.createElement('canvas');
        mixingCanvas.width = context.canvas.width;
        mixingCanvas.height = context.canvas.height;
        let mixingContext = mixingCanvas.getContext('2d');


        /**
         * Displays nice trails:
         * 
         * this.personalCanvas holds the player rendering we did last last pass of the render loop.
         *
         * Since we want to have nice trails behind the player, we have to move the last rendering
         * back to the last frame (by moving -(difference between current position and last frame's position))
         * and then render the last frame rendering (this.personalCanvas) in to our current frame
         * rendering (mixingContext).
         */
        mixingContext.save();

        applyScreenTransform(mixingContext, new vec2({x: camera.position.x - this.oldCameraPosition.x, y: 0}), new size2({width: mixingCanvas.width, height: mixingCanvas.height} ));
        mixingContext.globalAlpha = 0.93;
        mixingContext.drawImage(this.personalCanvas, 0, 0);   
        
        mixingContext.restore();    


        /**
         * Renders the actual player sprite for this frame.
         */
        mixingContext.save();

        applyCameraTransform(mixingContext);
        applyScreenTransform(mixingContext, this.position, this.size);

        //Changing colour over time
        let hue = (Math.sin((globalTime / 6000) * Math.PI) + 1) * 360

        mixingContext.fillStyle = `hsl(${hue}, 30%, 70%)`

        mixingContext.rotate(- (this.position.y * 0.0015) );
        mixingContext.fillRect(0, 0, this.size.width, this.size.height); 

        mixingContext.restore();    

        context.drawImage(mixingCanvas, 0, 0);

        /**
         * Since we have rendered this frame's sprite in to this frame's rendering and we
         * have nothing else to render, we swap the last frame's rendering with this one,
         * since the next time render is run this will have been the last frame's rendering.
         */
        this.personalCanvas = mixingCanvas;

        this.oldCameraPosition = camera.position.copy();
    }
}