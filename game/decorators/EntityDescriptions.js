export const Symbols = {
    updatable: Symbol('updatable'),
    renderable: Symbol('renderable'),
    //That can't be a word...
    boundable: Symbol('boundable')
}

export function Updatable(target) {
    target[Symbols.updatable] = true;
}

export function Renderable(target) {
    target[Symbols.renderable] = true;
}

export function Boundable(boundableGroup) {
    return function(target) {
        target[Symbols.boundable] = boundableGroup;
    }
}