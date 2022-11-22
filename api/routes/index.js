

function shuffle (jeu) {
    jeu.sort(()=> Math.random() - 0.5);

};

var demoArray = [1, 3, 5, 10 , 12 , 14,15, 18, 19,22];
shuffle(demoArray);
console.log(demoArray);