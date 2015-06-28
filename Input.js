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

export default class Input {
    constructor(keyState) {
        this.keyState = keyState;
    }

    listenTo(domHandle) {
        domHandle.addEventListener('keydown', makeHandleKeyPresses(this.keyState, true));
        domHandle.addEventListener('keyup', makeHandleKeyPresses(this.keyState, false));
    }
}