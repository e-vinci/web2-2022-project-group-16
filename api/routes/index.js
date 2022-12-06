
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
    let colors = ["pique","carreau","coeur","trefle"];
    let game = [];
    let cmp = 0;
    for(var i = 0; i <= 3 ; i ++){
        for(var j = 1; j <= 13 ; j ++){
            game[cmp] = {color: colors[i],value: j};
            cmp++;
        }
    }
    return game;
}


function shuffle (jeu) {
    jeu.sort(()=> Math.random() - 0.5);
};


function picksCards (qty,game) {
    let cardsTake = [] ;
    for(let i = 0 ; i < qty ; i++){
        cardsTake[i] = game[i];
    }
    for(let i = 0 ; i < game.length ; i++){
        game[i] = game[i+qty];
    }
    game.length = game.length-qty;
    console.log(cardsTake);
    return cardsTake;
};

function cardsPlayable(cardsValue){
    playbleCards = {
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

let id_player = 0;

function createPlayer (pseudo,tableCards, table3Cards, table3CardsHidden) {
    id_player++;
        let player = {
            idPlayer : id_player,
            pseudoPlayer : pseudo,
            table3CardsPlayer : tableCards,
            table3CardsVisiblePlayer: table3Cards,
            table3carteHiddenPlayer : table3CardsHidden
        }
        return player;
}


function addPlayerGame (player) {
    tablePlayerGame.push(player);
    return tablePlayerGame;
}

let indexNextPlayer = 0;
function nextPlayer() {
    let player = tablePlayerGame[indexNextPlayer];
    indexNextPlayer++;
    if (indexNextPlayer + 1 > tablePlayerGame.length){
        indexNextPlayer =0;
    }
    return player;
}


//partie test
var demoArray = initgame();
// console.log(demoArray);
shuffle(demoArray);
// console.log(demoArray);
// console.log("pioche une carte : " + picksCards(1,demoArray));
// console.log("pioche deux carte : " + picksCards(2,demoArray));
// console.log(demoArray);
// console.log("nbr carte pioche" + demoArray.length);

var player1 = createPlayer("Player1",picksCards(3,demoArray),picksCards(3,demoArray),picksCards(3,demoArray));
var player2 = createPlayer("Player2",picksCards(3,demoArray),picksCards(3,demoArray),picksCards(3,demoArray));
// str = JSON.stringify(player1);
// console.log(str); // Logs output to dev tools console.
// console.log(player1.table3Carte)
addPlayerGame(player1);
addPlayerGame(player2);
console.log(nextPlayer());
console.log(nextPlayer());
console.log(nextPlayer());



var carte = picksCards(1,demoArray);
console.log("pioche une crtes : "  + carte  );
console.log("carte jouable dessus : " + cardsPlayable(carte));
//fin partie test


