import Entity from './EntityInterface'

import {Decorators as EntityDecorators} from './decorators/EntityDescriptions'
const {Renderable} = EntityDecorators;

function _gridTextureForMoving(worldInfo) {
    let BLOCK_WIDTH = worldInfo.width/15;
    let textureCanvas = document.createElement('canvas');
    textureCanvas.width = worldInfo.width * 1.5;
    textureCanvas.height = worldInfo.width * 1.5 ;
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

const timeSpeed = 0.5;

@Renderable
export default class WeirdBackground extends Entity {
    /**
     * Player constructor
     * @param  {KeyState} keyState  KeyState instance which the player intance will use for the current key-state
     */
    constructor(worldInfo) {
        super();

        this.parentCanvasSize = {
            width: worldInfo.width,
            height: worldInfo.height
        }

        this.zIndex = -50;

        let {gridCanvas, BLOCK_WIDTH} = _gridTextureForMoving(worldInfo);

        this.gridCanvas = gridCanvas;
        this.BLOCK_WIDTH = BLOCK_WIDTH;
    }

    render(context, globalTime, {applyScreenTransform, applyCameraTransform}, camera) {
        let width = this.parentCanvasSize.width;
        let height = this.parentCanvasSize.height;

        context.save();

        let centerGridTransformation = () => {
            let moveByX = (this.gridCanvas.width / 2);
            let moveByY = (this.gridCanvas.height / 2);

            context.translate(-moveByX,-moveByY);
        }

        let angle = Math.sin( timeSpeed * (globalTime / 1000) ) + 1;

        let scaleByX = Math.sin( timeSpeed * 0.5 * (globalTime / 1000) ) + 1;
        let scaleByY = angle;

        context.translate(width/2, height/2);
        context.rotate(angle);
        context.scale(scaleByX + 1, scaleByY + 1);
        centerGridTransformation();

        context.globalAlpha = 0.25;

        context.drawImage(this.gridCanvas, 0, 0);

        context.restore();
    }
}