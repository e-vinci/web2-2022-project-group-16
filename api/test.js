

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


var demoArray = initgame();
console.log(demoArray);

shuffle(demoArray);
shuffle(demoArray);
console.log(demoArray);
console.log("pioche une carte : " + picksCards(1,demoArray));
console.log("pioche deux carte : " + picksCards(2,demoArray));
console.log(demoArray);
console.log("nbr carte pioche" + demoArray.length);



