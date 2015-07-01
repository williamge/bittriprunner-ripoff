import {Vector2d as vec2} from '../lib/Vector2d'

export default class Camera {
    constructor() {
        this.position = new vec2({
            x: 0,
            y: 0
        });
    }

    update(delta) {
    }
}