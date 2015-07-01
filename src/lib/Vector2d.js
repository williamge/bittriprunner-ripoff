
export class Vector2d {
    constructor(obj) {
        if (obj.x != null) {
            this.x = obj.x;
        }
        if (obj.y != null) {
            this.y = obj.y;
        }

        if (this.x == null || this.y == null) {
            //TODO(wg): this is the most shameful error message I have come up with, but 
            //I just cannot bring myself to think of a better one right now, I'm so sorry
            throw new TypeError("Wrong!");
        }
    }

    /**
     * Returns a new instance of the current vector instance, which holds no references to the current one.
     * @return {Vector2d} 
     */
    copy() {
        return new Vector2d({
            x: this.x,
            y: this.y
        });
    }

    /**
     * Returns a new instance representing the current vector instance added to another vector instance.
     * @param {Vector2d} toAdd 
     */
    add(toAdd) {
        return new Vector2d({
            x: this.x + toAdd.x,
            y: this.y + toAdd.y
        });
    }
}

export class Size2d extends Vector2d {
    constructor(obj) {
        super({
            x: obj.width,
            y: obj.height
        });
    }

    get height() {
        return this.y;
    }

    get width() {
        return this.x; 
    }
}