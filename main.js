import * as __globalcss from './global.css'
import * as __canvascss from './canvas.css'

import Player from './game/Player'

import {Obstacle, loadObstaclesFromJson} from './game/Obstacle'

import {GameLogic, GameCore, GameLoop} from './game/core'

import KeyState from './game/KeyState'
import Input from './Input'

import level1 from './data/level1'

export default function() {

    let mainHandle = document.getElementById('main-handle')

    let mainCanvas = document.createElement('canvas')
    mainCanvas.classList.add('bordered-canvas');
    mainCanvas.width = 640
    mainCanvas.height = 240 
    
    let mainContext = mainCanvas.getContext('2d')
    mainHandle.appendChild(mainCanvas)

    let keyState = new KeyState();

    let inputHandler = new Input(keyState);
    inputHandler.listenTo(window);

    let camera = {
        position: {
            x: 0, 
            y: 0
        },
        blockPosition: {
            left: (mainCanvas.width * (3/4)),
            toLoadLeft: (mainCanvas.width * (3/4)) + mainCanvas.width,
            _lastBlockPosition: (mainCanvas.width * (3/4)) + 1
        },
        player: null,
        gameLogic: null,
        update: function() {
            //Pegging the camera's position to the player, but only on the x-axis so we can see
            //the player jump properly
            this.position.x = - (this.player.position.x - (mainContext.canvas.width / 4));

            this.blockPosition.left = this.player.position.x - (mainContext.canvas.width / 4);
            this.blockPosition.toLoadLeft = this.blockPosition.left + mainCanvas.width;

            let blockRelativeXPosition = this.blockPosition.left % mainCanvas.width;

            if (blockRelativeXPosition < this._lastBlockPosition && this.blockPosition.left > mainCanvas.width + (mainCanvas.width * (3/4))) {
                this.gameLogic.events.shouldLoadNextZone.publish();
            }

            this._lastBlockPosition = blockRelativeXPosition;
        }
    }

    let gameLogic = new GameLogic();
    camera.gameLogic = gameLogic;

    let game = new GameCore(mainContext, camera, gameLogic);

    let player = new Player(game.worldInfo, keyState);
    camera.player = player;

    game.addEntity(player);


    let {loadObstacles, removeOldObstacles} = (function() {
        let currentObstacles = [];
        let nextObstacles = [];

        function loadObstacles() {

            let offset = camera.blockPosition.toLoadLeft;

            for (let obstacle of loadObstaclesFromJson(game.worldInfo, level1, offset)) {
                game.addEntity(obstacle);
                nextObstacles.push(obstacle);
            }
        }
        function removeOldObstacles() {
            for (let obstacle of currentObstacles) {
                game.removeEntity(obstacle);
            }
            currentObstacles = nextObstacles;
            nextObstacles = [];
        }

        return {
            loadObstacles,
            removeOldObstacles
        };
    })();

    loadObstacles();

    let loop = new GameLoop(game);

    gameLogic.events.playerHitBlock.subscribe((data) => {
        loop.pauseLoop();
        gameLogic.state.gameRunning = false;
        alert(`Game Over! Score: ${player.position.x.toFixed(0)}`);
    })

    gameLogic.events.shouldLoadNextZone.subscribe((data) => {
        removeOldObstacles();
        loadObstacles();
    })

    gameLogic.state.gameRunning = true;
    loop.startLoop();

}