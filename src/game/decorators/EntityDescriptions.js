export const Symbols = {
    updatable: Symbol('updatable'),
    renderable: Symbol('renderable'),
    //That can't be a word...
    boundable: Symbol('boundable')
}

/**
 * Marks a class as being able to be updated in a GameCore instance
 */
export function Updatable(target) {
    target.prototype[Symbols.updatable] = true;
}

/**
 * Marks a class as being able to be renderable in a GameCore instance
 */
export function Renderable(target) {
    target.prototype[Symbols.renderable] = true;
}

/**
 * Marks a class as being able to be collided against in a GameCore instance.
 * Needs to be called with a valid bounding group identifier, identifying which
 * bounding group this class should belong to. 
 */
export function Boundable(boundableGroup) {
    return function(target) {
        target.prototype[Symbols.boundable] = boundableGroup;
    }
}