export const Symbols = {
    updatable: Symbol('updatable'),
    renderable: Symbol('renderable'),
    //That can't be a word...
    boundable: Symbol('boundable')
}

export const ZLevels = {
    BACKGROUND: -100,
    DEFAULT: 0,
    FOREGROUND: 50,
    IMMEDIATE_FOREGROUND: 100
};

export const Decorators = {
    /**
     * Marks a class as being able to be updated in a GameCore instance
     */
    Updatable: function(target) {
        target.prototype[Symbols.updatable] = true;
    },
    isUpdatable: function(target) {
        return !!target[Symbols.updatable];
    },

    /**
     * Marks a class as being able to be renderable in a GameCore instance
     */
    Renderable: function(target) {
        target.prototype[Symbols.renderable] = true;
    },
    isRenderable: function(target) {
        return !!target[Symbols.renderable];
    },


    /**
     * Marks a class as being able to be collided against in a GameCore instance.
     * Needs to be called with a valid bounding group identifier, identifying which
     * bounding group this class should belong to. 
     */
    Boundable: function(boundableGroup) {
        return function(target) {
            target.prototype[Symbols.boundable] = boundableGroup;
        }
    },
    isBoundable: function(target) {
        return !!target[Symbols.boundable];
    },
    getBoundingGroup: function(target) {
        return target[Symbols.boundable];
    }
}