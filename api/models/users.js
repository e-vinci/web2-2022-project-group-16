const jwt = require('jsonwebtoken');
const path = require('node:path');
const { parse,serialize } = require('../utils/json');
require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 10;


const lifetimeJwt = 24 * 60 * 60 * 1000 * 80; // in ms : 24 * 60 * 60 * 1000 * 80= 80DAY

const jsonDbPath = path.join(__dirname, '/../data/users.json');
const apiKey = process.env.API_KEY;



function login(username,password){
    const userFound = findAUser(username);

    if(!userFound) return undefined;
    if(!bcrypt.compareSync(password,userFound.passwordCrypt))return undefined

 

    const token = jwt.sign(
        { username },
        apiKey, //obliger de le mettre le meme poiur tout le monde
        { expiresIn : lifetimeJwt } // Valable un certain temps
    );
    const userauthenticated = {
        username,
        token
    };
    return userauthenticated;
}

function register(username, password){
    const userFound = findAUser(username);
    if(userFound) return undefined; // si enregistrer == ERREUR
    const passwordCrypt = bcrypt.hashSync(password,saltRounds);

    const user = parse(jsonDbPath)
    const createUser = {
        id : getNextIdUser(),
        username,
        passwordCrypt,
        scoreWin : 0,
        scoreLose : 0,
    };
    user.push(createUser);
    serialize(jsonDbPath,user);
    const token = jwt.sign(
        { username },
        apiKey, //obliger de le mettre le meme poiur tout le monde
        { expiresIn : lifetimeJwt } // Valable un certain temps
    );
    const userauthenticated = {
        username,
        token
    };
    return userauthenticated;

}

function findAUser(userName){
    const users = parse(jsonDbPath); // recherche dans la base de donné
    const indexOfUser = users.findIndex((user) => user.username === userName);
    if (indexOfUser < 0) return undefined;
    return users[indexOfUser];
}



function getNextIdUser() {
    const users = parse(jsonDbPath);
    const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = users[lastItemIndex]?.id;
    const nextId = lastId + 1;
    return nextId;
  }

function allPlayer(){
    const play = parse(jsonDbPath);
    

      return play.forEach((item, index) => {
        console.log(item) //value
        console.log(index) //index
      })
}

  module.exports = {
    login,
    register,
    findAUser,
    allPlayer,
    

  }