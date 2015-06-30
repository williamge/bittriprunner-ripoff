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

    const START_TO_OBSTACLES = (mainCanvas.width * (3/4));
    const PLAYER_DISTANCE_FROM_CAMERA = (mainContext.canvas.width / 4);

    
    let mainContext = mainCanvas.getContext('2d')
    mainHandle.appendChild(mainCanvas)

    //Holds the state of keypresses for the application (ends up being the browser window in this case)
    let keyState = new KeyState();

    //Creates handlers for input on the browser window and binds key state to the keyState object
    let inputHandler = new Input(keyState);
    inputHandler.listenTo(window);

    //TODO(wg): make this much less messy
    let camera = {
        position: {
            x: 0, 
            y: 0
        },
        blockPosition: {
            left: START_TO_OBSTACLES,
            toLoadLeft: START_TO_OBSTACLES + mainCanvas.width,
            _lastBlockPosition: START_TO_OBSTACLES + 1
        },
        player: null,
        gameLogic: null,
        update: function() {
            //Pegging the camera's position to the player, but only on the x-axis so we can see
            //the player jump properly
            this.position.x = - (this.player.position.x - PLAYER_DISTANCE_FROM_CAMERA);

            this.blockPosition.left = this.player.position.x - PLAYER_DISTANCE_FROM_CAMERA;
            this.blockPosition.toLoadLeft = this.blockPosition.left + mainCanvas.width;

            let blockRelativeXPosition = this.blockPosition.left % mainCanvas.width;

            if (blockRelativeXPosition < this._lastBlockPosition && this.blockPosition.left > START_TO_OBSTACLES + mainCanvas.width) {
                this.gameLogic.events.shouldLoadNextZone.publish();
            }

            this._lastBlockPosition = blockRelativeXPosition;
        }
    }

    let gameLogic = new GameLogic();
    camera.gameLogic = gameLogic;

    let game = new GameCore(mainContext, camera, gameLogic);

    //Player entity
    let player = new Player(game.worldInfo, keyState);
    camera.player = player;

    game.addEntity(player);


    //Helper functions for adding or removing obstacle entities
    //TODO(wg): clean this up, put in to a nicer set of functions
    let {loadObstacles, removeOldObstacles} = (function() {
        let currentObstacles = [];
        let nextObstacles = [];

        /**
         * Loads obstacles for one screen length, and places them one screen length away from the camera position
         */
        function loadObstacles() {

            let offset = camera.blockPosition.toLoadLeft;

            for (let obstacle of loadObstaclesFromJson(game.worldInfo, level1, offset)) {
                game.addEntity(obstacle);
                nextObstacles.push(obstacle);
            }
        }
        /**
         * Removes the obstacles that the camera has passed by, and swaps the current (now removed) obstacle list
         * with the next (now visible obstacles)
         */
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

    //Have to load the initial obstacles for the current screen, since the auto-loading
    //functionality works on loading the next (off-camera) screen
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

    //Here we go! Start the game loop and start playing
    gameLogic.state.gameRunning = true;
    loop.startLoop();

}