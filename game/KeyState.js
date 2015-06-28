export default class KeyState {
    constructor() {
        this.states = {
            left_arrow: false,
            right_arrow: false,
            up_arrow: false,
            down_arrow: false,
            left_mouse_button: false,
            right_mouse_button: false
        };

        this.dirty = false;
    }

    set(key, state) {
        this.states[key] = state;
        this.dirty = true;
    }

    get(key) {
        if (this.states[key] == undefined) {
            throw new Error("Invalid key provided.");
        }
        return this.states[key];
    }
}