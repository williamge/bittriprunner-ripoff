/**
 * Helper function for creating an event handler for binding window input (keypresses) to keyState 
 * @param  {KeyState} keyState a keyState object to set the key state of
 * @param  {boolean} upOrDown whether this handler is for keyup (true) or keydown (false)
 * @return {Function}          Event handler to bind to a keypress event
 */
function makeHandleKeyPresses(keyState, upOrDown) {
    return function handleKeyPresses(e) {
        let code = e.keyCode;
        if (e.charCode && code == 0) {
            code = e.charCode;
        }

        switch(code){
            case 37:
                keyState.set('left_arrow', upOrDown);
                break;
            case 38:
                keyState.set('up_arrow', upOrDown);
                break;
          case 39:
                keyState.set('right_arrow', upOrDown);
                break;
          case 40:
                keyState.set('down_arrow', upOrDown);
                break;
        }
        if (keyState.changed) {
            e.preventDefault();
            keyState.changed = false;
        }
    }
}

/**
 * Slim class which binds keydown and keyup events to a KeyState object for a given DOM handle
 */
export default class Input {
    constructor(keyState) {
        this.keyState = keyState;
    }

    /**
     * Adds event listeners on the given DOM handle
     * @param  {HTMLElement} domHandle DOM element to add the event listeners to
     */
    listenTo(domHandle) {
        domHandle.addEventListener('keydown', makeHandleKeyPresses(this.keyState, true));
        domHandle.addEventListener('keyup', makeHandleKeyPresses(this.keyState, false));
    }
}