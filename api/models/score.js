const { findAUser }  = require('./users');
const path = require('node:path');
const { parse, serialize } = require('../utils/json');
const jsonDbPath = path.join(__dirname, '/../data/users.json');
// eslint-disable-next-line import/order
const _ = require('lodash');


function win(player){
    const playerFoundWin = findUserUpdateWin(player);
    return playerFoundWin;
}

function lose(player){
    const playerFoundLose = findUserUpdateLose(player);
    return playerFoundLose;
}
function numberGamePlayer(player){
    const userFound = findAUser(player);
    if (!userFound) return undefined;
    const total = userFound.scoreWin + userFound .scoreLose;
    return total;
}

function sortPlayer(){
    const allPlayer = parse(jsonDbPath);
    const tableSortPlayer = allPlayer.slice();
    tableSortPlayer.sort((a,b) => {
        // Calcule la somme des propriétés value1 et value2 pour chaque objet
        // const totA = a.scoreWin + b.scoreLose;
        // const sumA = a.scoreWin * totA;
        // const totb = a.scoreWin + b.scoreLose;
        // const sumB = b.scoreWin * totb;

        // --------------------- LIBRAIRIE -----------------------------
        const totA = _.add(a.scoreWin,b.scoreLose);
        const sumA = _.multiply(a.scoreWin,totA);  
        const totB = _.add(a.scoreWin,b.scoreLose);
        const sumB = _.multiply(a.scoreWin,totB);

        // Si la somme de a est inférieure à celle de b, a doit être classé apres b
        if (sumA < sumB) {
            return 1;
        }
        // Si la somme de a est inférieure à celle de b, a doit être classé avant b
        if (sumA > sumB) {
            return -1;
        }
        // Si les sommes sont égales, a et b restent à leur position actuelle dans le tableau
        return 0;
        });
            return tableSortPlayer;

}


function findUserUpdateWin(username){
    const allUser = parse(jsonDbPath);
    const indexOfUser = allUser.findIndex((user) => user.username === username);
    if (indexOfUser < 0) return undefined;
    allUser[indexOfUser].scoreWin += 1 // change la valeur de +1
    serialize(jsonDbPath, allUser)
    return allUser[indexOfUser]
}

function findUserUpdateLose(username){
    const allUser = parse(jsonDbPath);
    const indexOfUser = allUser.findIndex((user) => user.username === username);
    if (indexOfUser < 0) return undefined;
    allUser[indexOfUser].scoreLose += 1 // change la valeur de +1
    serialize(jsonDbPath, allUser)
    return allUser[indexOfUser]
}




module.exports = {
    win,
    lose,
    numberGamePlayer,
    sortPlayer,
    
  }