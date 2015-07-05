import Entity from './EntityInterface'

import {Decorators as EntityDecorators, ZLevels} from './decorators/EntityDescriptions'
const {Renderable} = EntityDecorators;

function _gridTextureForMoving(worldInfo) {
    let BLOCK_WIDTH = worldInfo.width/15;
    let textureCanvas = document.createElement('canvas');
    textureCanvas.width = worldInfo.width * 1.0 + BLOCK_WIDTH;
    textureCanvas.height = worldInfo.height * 1.0;
    let textureContext = textureCanvas.getContext('2d');

    let width = textureCanvas.width;
    let height = textureCanvas.height;

    textureContext.strokeStyle = `hsl(0, 0%, 90%)`;

    for (let i = 0; i < width + BLOCK_WIDTH; i+= BLOCK_WIDTH) {
        let path = new Path2D();
        path.moveTo(i, 0);
        path.lineTo(i, height);
        textureContext.stroke(path);
    }
    for (let i = 0; i < height + BLOCK_WIDTH; i+= BLOCK_WIDTH) {
        let path = new Path2D();
        path.moveTo(0, i);
        path.lineTo(width, i);
        textureContext.stroke(path);
    }

    return {
        gridCanvas: textureCanvas,
        BLOCK_WIDTH
    }
}

@Renderable
export default class Background extends Entity {
    /**
     * Player constructor
     * @param  {KeyState} keyState  KeyState instance which the player intance will use for the current key-state
     */
    constructor(worldInfo) {
        super();

        this.zIndex = ZLevels.BACKGROUND;

        let {gridCanvas, BLOCK_WIDTH} = _gridTextureForMoving(worldInfo);

        this.gridCanvas = gridCanvas;
        this.BLOCK_WIDTH = BLOCK_WIDTH;
    }

    render(context, globalTime, {applyScreenTransform, applyCameraTransform}, camera) {

        context.save();

        let moveBy = camera.position.x % this.BLOCK_WIDTH;

        context.translate(moveBy,0);

        context.drawImage(this.gridCanvas, 0, 0);

        context.restore();
    }
}