/**
 * Some notes on levels:
 *
 * They're not so much levels, they're more of block layouts one screen-width wide that are
 * put together randomly to form one continuous level.
 *
 * Assumptions:
 *     - screen width is 640
 *     - screen height is 240
 *
 * Good practices:
 *     - first block that the player can hit should be at least 160 units in to the level, 
 *     just so that there's a nice break between each segment
 */

export default [
    {
        //Decoration blocks (for testing):
        size: {
            height: 30,
            width: 30
        }, 
        position: {
            x: 0,
            y: 210
        }
    },
    {
        size: {
            height: 30,
            width: 30
        }, 
        position: {
            x: 160,
            y: 210
        }
    },
    {
        size: {
            height: 30,
            width: 30
        }, 
        position: {
            x: 320,
            y: 210
        }
    },
    //Real blocks start here:
    {
        size: {
            height: 40,
            width: 30
        }, 
        position: {
            x: 160,
            y: 0
        }
    },
    {
        size: {
            height: 50,
            width: 30
        }, 
        position: {
            x: 200,
            y: 0
        }
    },
    {
        size: {
            height: 60,
            width: 30
        }, 
        position: {
            x: 400,
            y: 0
        }
    },
    {
        size: {
            height: 60,
            width: 30
        }, 
        position: {
            x: 600,
            y: 0
        }
    }
]