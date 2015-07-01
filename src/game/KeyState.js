/**
 * Holds the state of keys for the game for the current moment in time.
 */
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

    /**
     * Sets a given key to the given state
     * @param {string} key   Key for the key of which the state if being changed
     * @param {boolean} state true if the key is pressed, false otherwise
     */
    set(key, state) {
        this.states[key] = state;
        this.dirty = true;
    }

    /**
     * Returns the state of the given key. Throws an error if the key is not valid for
     * this KeyState instance
     * @param  {string} key Key for which to return the state of
     * @return {boolean}     true if the key is pressed, false otherwise
     */
    get(key) {
        if (this.states[key] == undefined) {
            throw new Error("Invalid key provided.");
        }
        return this.states[key];
    }
}