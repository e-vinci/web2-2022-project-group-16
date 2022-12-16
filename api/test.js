const orianterObjet = require('./routes/orianterObjet');
    
const danish = new orianterObjet.Danish(2);
run();






function run () {
    console.log(danish.cardsPlayable(danish.discardPile[0]));
        




    danish.nextPlayer();
};
console.log(danish.tablePlayerGame[0].table3CardsVisiblePlayer);