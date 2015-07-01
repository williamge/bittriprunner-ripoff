import * as __globalcss from './global.css'
import * as __canvascss from './canvas.css'

import Player from './game/Player'

import {Obstacle, loadObstaclesFromJson} from './game/Obstacle'

import {GameLogic, GameCore, GameLoop} from './game/core'

import KeyState from './game/KeyState'
import Input from './Input'

import level1 from './data/level1'
import level2 from './data/level2'

let createMainCanvas = function() {
    let mainHandle = document.getElementById('main-handle')

    let mainCanvas = document.createElement('canvas')
    mainCanvas.classList.add('bordered-canvas');
    mainCanvas.width = 640
    mainCanvas.height = 240 

    let mainContext = mainCanvas.getContext('2d')
    mainHandle.appendChild(mainCanvas)

    const START_TO_OBSTACLES = 0;
    const PLAYER_DISTANCE_FROM_CAMERA = (mainContext.canvas.width / 4);

    return {
        mainCanvas,
        mainContext,
        START_TO_OBSTACLES,
        PLAYER_DISTANCE_FROM_CAMERA
    };
}

function *getStage() {
    let stages = [
        level1,
        level2
    ];

    let i = 0;

    for(;;) {
        if (++i == stages.length) {
            i = 0;
        }
        yield stages[i];
    }
}

//Helper functions for adding or removing obstacle entities
//TODO(wg): clean this up, put in to a nicer set of functions
let obstacleHelpers = function(game) {
    let currentObstacles = [];
    let nextObstacles = [];

    let stageIter = getStage();

    /**
     * Loads obstacles for one screen length, and places them one screen length away from the camera position
     */
    function loadObstacles(offset) {
        for (let obstacle of loadObstaclesFromJson(game.worldInfo, stageIter.next().value, offset)) {
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
};

export function play() {

    let {
        mainCanvas,
        mainContext,
        START_TO_OBSTACLES,
        PLAYER_DISTANCE_FROM_CAMERA
    } = createMainCanvas();

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

    let {loadObstacles, removeOldObstacles} = obstacleHelpers(game);

    //Have to load the initial obstacles for the current screen, since the auto-loading
    //functionality works on loading the next (off-camera) screen
    loadObstacles(camera.blockPosition.toLoadLeft);

    let loop = new GameLoop(game);

    gameLogic.events.playerHitBlock.subscribe((data) => {
        loop.pauseLoop();
        gameLogic.state.gameRunning = false;
        alert(`Game Over! Score: ${player.position.x.toFixed(0)}`);
    })

    gameLogic.events.shouldLoadNextZone.subscribe((data) => {
        removeOldObstacles();
        loadObstacles(camera.blockPosition.toLoadLeft);
    })

    //Here we go! Start the game loop and start playing
    gameLogic.state.gameRunning = true;
    loop.startLoop();

}

export function debugStage() {

    let {
        mainCanvas,
        mainContext,
        START_TO_OBSTACLES,
        PLAYER_DISTANCE_FROM_CAMERA
    } = createMainCanvas();

    //TODO(wg): make this much less messy
    let camera = {
        position: {
            x: 0, 
            y: 0
        },
        blockPosition: {
            left: START_TO_OBSTACLES,
            toLoadLeft: 0,
            _lastBlockPosition: START_TO_OBSTACLES + 1
        },
        update: function() {
        }
    }

    let gameLogic = new GameLogic();
    camera.gameLogic = gameLogic;

    let game = new GameCore(mainContext, camera, gameLogic);

    let {loadObstacles, removeOldObstacles} = obstacleHelpers(game);

    //Have to load the initial obstacles for the current screen, since the auto-loading
    //functionality works on loading the next (off-camera) screen
    loadObstacles(0);

    let loop = new GameLoop(game);

    //We only want to run one tick of the loop, just enough to see the stage
    gameLogic.state.gameRunning = true;
    loop.tick();

}