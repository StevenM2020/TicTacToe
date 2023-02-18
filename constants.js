//script:  constants
//author:  Steven Motz
//date:    2/14/2023
//purpose: This is the constants file that contains the constants for the app.

// This is the array of winning combinations
export let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// This is the array of x and o images
export const images = { 
    0: require('./assets/Square.png'),
    1: require('./assets/X1.png'),
    2: require('./assets/X2.png'),
    3: require('./assets/X3.png'),
    4: require('./assets/O1.png'),
    5: require('./assets/O2.png'),
    6: require('./assets/O3.png')
  }