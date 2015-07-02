
export default class Channel {
    constructor() {
        this._listeners = [];
    }

    subscribe(cb) {
        this._listeners.push(cb);
    }

    publish(data) {
        for (let listener of this._listeners) {
            listener(data);
        }
    }
}