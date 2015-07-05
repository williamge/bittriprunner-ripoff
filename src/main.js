import * as __globalcss from './global.css'
import * as __canvascss from './canvas.css'

import {Vector2d as vec2} from './lib/Vector2d';

import Player from './game/Player'
import Background from './game/Background';
import WeirdBackground from './game/WeirdBackground';

import {Obstacle, loadObstaclesFromJson} from './game/Obstacle'

import {GameLogic, GameCore, GameLoop} from './game/core'
import Camera from './game/Camera'

import KeyState from './game/KeyState'
import Input from './Input'

import level1 from './data/level1'
import level2 from './data/level2'

export default function factory(cvars) {



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

    //Helper functions for adding or removing obstacle entities
    //TODO(wg): clean this up, put in to a nicer set of functions
    let obstacleHelpers = function(game) {

        const stages = [
            level1,
            level2
        ];

        function *getStage() {

            let i = -1;

            for(;;) {
                if (++i == stages.length) {
                    i = 0;
                }
                yield stages[i];
            }
        }

        function *getRandomStage() {
            for(;;) {
                let randomNumber = Math.random();
                randomNumber = randomNumber * (stages.length - 1);
                randomNumber = Math.round(randomNumber);

                yield stages[randomNumber];
            }
        }

        let currentObstacles = [];
        let nextObstacles = [];

        const stageIter = cvars.features.randomBlocks ? getRandomStage() : getStage();

        /**
         * Loads obstacles for one screen length, and places them one screen length away from the camera position
         */
        function loadObstacles(offset, optionalStageIndex) {
            let stage = optionalStageIndex != null ? stages[optionalStageIndex] : stageIter.next().value

            for (let obstacle of loadObstaclesFromJson(game.worldInfo, stage, offset)) {
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

    function play(cvars) {

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

        let gameLogic = new GameLogic();
        let player = new Player(keyState);

        let camera = (function() {
            class GameCamera extends Camera {
                constructor() {
                    super();
                    this.position = new vec2({
                        x: 0,
                        y: 0
                    });

                    this.blockPosition = {
                        left: START_TO_OBSTACLES,
                        toLoadLeft: START_TO_OBSTACLES + mainCanvas.width,
                        _lastBlockPosition: START_TO_OBSTACLES + 1
                    };
                }

                update(delta) {
                    //Pegging the camera's position to the player, but only on the x-axis so we can see
                    //the player jump properly
                    this.position.x = - (player.position.x - PLAYER_DISTANCE_FROM_CAMERA);

                    this.blockPosition.left = player.position.x - PLAYER_DISTANCE_FROM_CAMERA;
                    this.blockPosition.toLoadLeft = this.blockPosition.left + mainCanvas.width;

                    let blockRelativeXPosition = this.blockPosition.left % mainCanvas.width;

                    if (blockRelativeXPosition < this._lastBlockPosition && this.blockPosition.left > START_TO_OBSTACLES + mainCanvas.width) {
                        gameLogic.events.shouldLoadNextZone.publish();
                    }

                    this._lastBlockPosition = blockRelativeXPosition;
                }
            }
            return new GameCamera()
        })();

        let game = new GameCore(mainContext, camera, gameLogic);

        let background = new Background(game.worldInfo);
        let weirdBackground = new WeirdBackground(game.worldInfo); 

        game.addEntity(player);
        game.addEntity(background);
        game.addEntity(weirdBackground);

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

    function debugStage(stage) {

        let {
            mainCanvas,
            mainContext,
            START_TO_OBSTACLES,
            PLAYER_DISTANCE_FROM_CAMERA
        } = createMainCanvas();

        let camera = new Camera();

        let gameLogic = new GameLogic();

        let game = new GameCore(mainContext, camera, gameLogic);

        let {loadObstacles, removeOldObstacles} = obstacleHelpers(game);

        //Have to load the initial obstacles for the current screen, since the auto-loading
        //functionality works on loading the next (off-camera) screen
        loadObstacles(0, stage);

        let loop = new GameLoop(game);

        //We only want to run one tick of the loop, just enough to see the stage
        gameLogic.state.gameRunning = true;
        loop.tick();

    }

    return {
        play,
        debugStage
    };
}