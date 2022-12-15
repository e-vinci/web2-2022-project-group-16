const { findAUser }  = require('./users');
const path = require('node:path');
const { parse, serialize } = require('../utils/json');
const jsonDbPath = path.join(__dirname, '/../data/users.json');


function win(player){
    console.log("player")
    console.log(player)
    const user = parse(jsonDbPath);
    const playerFound = findAUser(player)
    console.log(`ceci est le player : ${playerFound}`)
    playerFound.scoreWin += 1;


    //  serialize(jsonDbPath,nombre);
    //  const updatedPlayer= { ...playerFound,...nombre };
  
    // playerFound = updatedPlayer;
  
    // serialize(jsonDbPath, updatedPlayer);
    // jsonDbPath.replace

    return playerFound; 
}

function lose(player){
    const game = findAUser(player)
    game.scoreLose += 1;
    return game;
}

function numberGamePlayer(player){
    const game = findAUser(player)
    let numberGame = 0;
    numberGame =  game.scoreWin + game.scoreLose;
    return numberGame;
}

// function updatePlayer(id, winGame) {
//     const idNumber = parseInt(id, 25);
//     const PLAYER = parse(jsonDbPath);
//     const foundPlayer = PLAYER.findIndex((playFoundThis) => playFoundThis.id === idNumber);
//     if (foundPlayer < 0) return undefined;
  
//     const updatedPlayer= { ...PLAYER[foundPlayer], ...winGame };
  
//     PLAYER[foundPlayer] = updatePlayer;
  
//     serialize(jsonDbPath, PLAYER);
  
//     return updatePlayer;
//   }

module.exports = {
    win,
    lose,
    numberGamePlayer,
    
  }