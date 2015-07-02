/**
 * Just a global file for central configuration of the application. Loads global components, CSS,
 * and the main function, and then calls the main function to start the application.
 */

import * as polyfill from 'babel/polyfill'
import main from './src/main';

let urlSplit = window.location.href.split('#');

let cvars = {
    debugMode: {
        enabled: false,
        stage: {
            enabled: false,
            number: -1
        }
    },
    features: {
        randomBlocks: false
    }
};

if (urlSplit.length > 1) {
    let params = urlSplit[1].split(',');

    for (let parameter of params) {
        if (parameter.indexOf('debug_stage') != -1) {
            cvars.debugMode.enabled = true;
            cvars.debugMode.stage.enabled = true;
            cvars.debugMode.stage.number = Number(parameter.split('=')[1]);
        }

        if (parameter == 'random_blocks') {
            cvars.features.randomBlocks = true;
        }
    }
}

let {
    debugStage,
    play
} = main(cvars);

if (!cvars.debugMode.enabled) {
    play();
} else {
    if (cvars.debugMode.stage.enabled) {
        debugStage(cvars.debugMode.stage.number);
    }
}