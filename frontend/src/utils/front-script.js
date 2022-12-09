const orianterObjet = require('../../../api/routes/orianterObjet');

const danish = new orianterObjet.Danish(2);


function GetCard() {
    const card = document.querySelectorAll('div.cards');

    Array.from(card).forEach((elem) => {
        elem.addEventListener('click', () => {
            const number = elem?.dataset?.number;
            const type = elem?.dataset?.type;
            console.log(`${type} - ${number}`);
        });
    })
}

function translateCard(num) {

    const arrayTranslate = ["card","ace","two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
  
    return arrayTranslate[num];
  
}

function renderCards() {
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


function run() {
    renderCards();
    danish.nextPlayer();
};

 
module.exports = { GetCard, run }