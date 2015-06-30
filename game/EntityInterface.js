
/**
 * Dummy class, more of an interface for what Entities should look like
 */
export default class Entity {

    /**
     * Constructor is left entirely up to the implementing class to decide the signature. 
     */

     /**
      * Called every pass through the update loop, usually at least once per frame. Don't presume
      * any ordering of the update and render methods, this method should leave the object in a consistent state. 
      * @param  {Number} delta Milliseconds since last call of #update
      * @return {void}       
      */
    update(delta) {

    }

    /**
     * Called every pass through the render loop, exactly once per frame (obviously). Don't presume
     * any ordering of the update and render methods, this method should leave the object in a consistent
     * state and should not contain any logic to change the object beyond rendering it.
     * @param  {CanvasRenderingContext2D} context              The context to render the object to
     * @param  {Number} globalTime           Elapsed time since the start of the game
     * @param  {(position, size) => void} applyScreenTransform applies a screen transformation to the render context
     * to move the context in to a state that game coordinates can be applied to. This should be called before
     * rendering any points using game/world-coordinates
     * @return {void}                      
     */
    render(context, globalTime, applyScreenTransform) {
        /**
         * Make sure to call the #applyScreenTransform function to translate the render context
         * to the screen coordinates or else any drawn points will not show up in the proper spot.
         *
         * To sum up => the canvas context uses a coordinate system starting from the top left with the 
         * y-axis going top to bottom (from 0 to 100). Game coordinates are easier to think about with
         * that y-axis flipped, so a transformation has to be applied to ensure that the game coordinates
         * when rendered line up with the canvas coordinates. 
         */
    }

    /**
     * Returns an axis-aligned bounding box for the object, up to the inheriting class to decide
     * how that should be made. This can be called at any time after initialization, so beware.
     * @return {BoundingBox} BoundingBox instance for the instance
     */
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
}