

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
let tablePlayerGame = [];

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






