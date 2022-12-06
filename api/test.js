const orianterObjet = require('./routes/orianterObjet');
    
const danish = new orianterObjet.Danish(2);
run();






function run () {
    
        




    danish.nextPlayer();
};
console.log(danish.tablePlayerGame[0].table3CardsVisiblePlayer);