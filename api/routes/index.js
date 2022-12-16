
const body = document.querySelector('body');

body.addEventListener('click', startGame);

let deck = [];
let discardPile = [];
let tablePlayerGame = [];
let acttualPlayer = 0;


function startGame() {
    deck = initgame();
    discardPile = {color: null,value: 2}
    let playerMoi = createPlayer('moi',picksCards(3,deck),picksCards(3,deck),picksCards(3,deck));
    addPlayerGame(playerMoi);
    let bot = createPlayer('bot',picksCards(3,deck),picksCards(3,deck),picksCards(3,deck));
    addPlayerGame(bot);

    playing(deck,discardPile,tablePlayerGame,acttualPlayer);
}

function playing(deck,discardPile,tablePlayerGame,acttualPlayer){
    let player = tablePlayerGame[acttualPlayer];
    let playbleCards = playbleCardsInHands(player.table3CardsPlayer);
    console.log(playbleCards);

}

function playbleCardsInHands(hands){
    let playbleCards = cardsPlayable(discardPile[0].value);
    let cardsPlayableInHands= [];
    hands.forEach(card => {
        if (playbleCards.contains(card.value)){
            cardsPlayableInHands.push(card);
        }
    });
    return cardsPlayableInHands;
}
  



function initgame(){
    const colors = ["pique","carreau","coeur","trefle"];
    const game = [];
    let cmp = 0;
    for(let i = 0; i <= 3 ; i +=1){
        for(let j = 1; j <= 13 ; j +=1){
            game[cmp] = {color: colors[i],value: j};
            cmp+=1;
        }
    }
    return game;
}


function shuffle (jeu) {
    jeu.sort(()=> Math.random() - 0.5);
};


function picksCards (qty,game) {
    const cardsTake = [] ;
    const gameCard = game;
    for(let i = 0 ; i < qty ; i+=1){
        cardsTake[i] = gameCard[i];
    }
    for(let i = 0 ; i < game.length ; i+=1){
        gameCard[i] = game[i+qty];
    }
    gameCard.length -=qty;
    console.log(cardsTake);
    return cardsTake;
};

function cardsPlayable(cardsValue){
    const playbleCards = {
        1 : [1,2,3], 
        2: [1,2,3,4,5,6,7,8,9,10,11,12,13],
        3: [],
        4: [4,5,6,7,8,9,10,11,12,13,1,2,3],
        5: [5,6,7,8,9,10,11,12,13,1,2,3],
        6: [6,7,8,9,10,11,12,13,1,2,3],
        7: [4,5,6,7,2,3],
        8: [8,9,10,11,12,13,1,2,3],
        9: [9,10,11,12,13,1,2,3],
        10: [10,11,12,13,1,2,3],
        11: [11,12,13,1,2,3],
        12: [12,13,1,2,3],
        13: [13,1,2,3]
};
return playbleCards[cardsValue];
};

let idPlayer = 0;

function createPlayer (pseudo,tableCards, table3Cards, table3CardsHidden) {
    idPlayer+=1;
        const player = {
            idPlayer,
            pseudoPlayer : pseudo,
            table3CardsPlayer : tableCards,
            table3CardsVisiblePlayer: table3Cards,
            table3carteHiddenPlayer : table3CardsHidden
        }
        return player;
}
const tablePlayerGame = [];

function addPlayerGame (player) {
    tablePlayerGame.push(player);
    return tablePlayerGame;
}

let indexNextPlayer = 0;
function nextPlayer() {
    const player = tablePlayerGame[indexNextPlayer];
    indexNextPlayer+=11;
    if (indexNextPlayer + 1 > tablePlayerGame.length){
        indexNextPlayer =0;
    }
    return player;
}


// partie test
const demoArray = initgame();
// console.log(demoArray);
shuffle(demoArray);
// console.log(demoArray);
// console.log("pioche une carte : " + picksCards(1,demoArray));
// console.log("pioche deux carte : " + picksCards(2,demoArray));
// console.log(demoArray);
// console.log("nbr carte pioche" + demoArray.length);

const player1 = createPlayer("Player1",picksCards(3,demoArray),picksCards(3,demoArray),picksCards(3,demoArray));
const player2 = createPlayer("Player2",picksCards(3,demoArray),picksCards(3,demoArray),picksCards(3,demoArray));
// str = JSON.stringify(player1);
// console.log(str); // Logs output to dev tools console.
// console.log(player1.table3Carte)
addPlayerGame(player1);
addPlayerGame(player2);
console.log(nextPlayer());
console.log(nextPlayer());
console.log(nextPlayer());



const carte = picksCards(1,demoArray);
console.log(`pioche une crtes : ${   carte}`  );
console.log(`carte jouable dessus : ${  cardsPlayable(carte)}`);
// fin partie test

export default index.js;


