const orianterObjet = require('../../../api/routes/orianterObjet');

const danish = new orianterObjet.Danish(2);


function translateCard(num) {
    const arrayTranslate = ["card","ace","two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
  
    return arrayTranslate[num];
}

function renderCardsHand() {
    const divCardPlayer = document.querySelector("#card-hand");
    
    danish.cardsPlayable(danish.discardPile[0]);

    const playerHand = danish.tablePlayerGame[0].tableHands;
    console.log("main ");
    console.log(playerHand)
    console.log("main special card ");
    console.log(playerHand[0].value)


    // eslint-disable-next-line no-plusplus
    for(let i=0; i < playerHand.length; i++){
        const cardcontent = document.createElement("div"); 
        const cards = document.createElement("div"); 

        cardcontent.className = "card-content";
        cardcontent.className += " ";
        cardcontent.className += translateCard(playerHand[i].value);

        cards.className = "cards";
        cards.className += " ";
        cards.className += playerHand[i].color;
        cards.className += " ";
        cards.className += translateCard(playerHand[i].value);
        cards.dataset.number = translateCard(playerHand[i].value);
        cards.dataset.type = playerHand[i].color;

        divCardPlayer.appendChild(cardcontent);
        cardcontent.appendChild(cards);
    }

}

function renderCardsHidden(){

    const divCardPlayer = document.querySelector("#card-back");
    
    
    const playerHidden = danish.tablePlayerGame[0].table3carteHiddenPlayer;;
    console.log("main ");
    console.log(playerHidden)
    console.log("main special card ");
    console.log(playerHidden[0].value)


    // eslint-disable-next-line no-plusplus
    for(let i=0; i < playerHidden.length; i++){
        const cardcontent = document.createElement("div"); 
        const cards = document.createElement("div"); 

        cardcontent.className = "card-content";
        cardcontent.className += " ";
        cardcontent.className += translateCard(playerHidden[i].value);

        cards.className = "cards";

        divCardPlayer.appendChild(cardcontent);
        cardcontent.appendChild(cards);
    }

}


function renderCardsVisible() {
    const divCardPlayer = document.querySelector("#card-visible");
    
    const playerVisible = danish.tablePlayerGame[0].table3CardsVisiblePlayer;
    console.log("main ");
    console.log(playerVisible)
    console.log("main special card ");
    console.log(playerVisible[0].value)


    // eslint-disable-next-line no-plusplus
    for(let i=0; i < playerVisible.length; i++){
        const cardcontent = document.createElement("div"); 
        const cards = document.createElement("div"); 

        cardcontent.className = "card-content";
        cardcontent.className += " ";
        cardcontent.className += translateCard(playerVisible[i].value);

        cards.className = "cards";
        cards.className += " ";
        cards.className += playerVisible[i].color;
        cards.className += " ";
        cards.className += translateCard(playerVisible[i].value);
        cards.dataset.number = translateCard(playerVisible[i].value);
        cards.dataset.type = playerVisible[i].color;

        divCardPlayer.appendChild(cardcontent);
        cardcontent.appendChild(cards);
    }

}

function run() {
    renderCardsHand();
    renderCardsHidden();
    renderCardsVisible();
    danish.nextPlayer();
};

 
module.exports = { run }