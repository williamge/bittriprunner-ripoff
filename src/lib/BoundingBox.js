import vec2 from './Vector2d'

/**
 * Represents an axis-aligned bounding box
 */
export default class BoundingBox {
    /**
     * BoundingBox constructor
     * @param  {Vector2d} topLeft     top left point of the bounding box
     * @param  {Vector2d} bottomRight bottom right point of the bounding box
     */
    constructor(topLeft, bottomRight) {
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }

    get leftX() {
        return this.topLeft.x;
    }
    get rightX() {
        return this.bottomRight.x;
    }
    get topY() {
        return this.topLeft.y;
    }
    get bottomY() {
        return this.bottomRight.y;
    }

    /**
     * Returns true if there is a collision between two boxes, false otherwise.
     * @param  {BoundingBox}  box1 
     * @param  {BoundingBox}  box2 
     * @return {Boolean}      
     */
    static isCollision(box1, box2) {
        let xCollision = false;
        let yCollision = false;

        if (box1.leftX < box2.leftX) {
            if (box1.rightX > box2.leftX) {
                xCollision = true;
            }
        } else {
            if (box2.rightX > box1.leftX) {
                xCollision = true;
            }
        }
        if (box1.bottomY < box2.bottomY) {
            if (box1.topY > box2.bottomY) {
                yCollision = true;
            }
        } else {
            if (box2.topY > box1.bottomY) {
                yCollision = true;
            }
        }

        return xCollision && yCollision;
    }
}