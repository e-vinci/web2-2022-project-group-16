

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

//partie test
var demoArray = initgame();
console.log(demoArray);
shuffle(demoArray);
console.log(demoArray);
console.log("pioche une carte : " + picksCards(1,demoArray));
console.log("pioche deux carte : " + picksCards(2,demoArray));
console.log(demoArray);
console.log("nbr carte pioche" + demoArray.length);
var carte = picksCards(1,demoArray);
console.log("pioche une crtes : "  + carte  );
console.log("carte jouable dessus : " + cardsPlayable(carte));
//fin partie test


