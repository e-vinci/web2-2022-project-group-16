const orianterObjet = require('../../../api/routes/orianterObjet');

const nbrPlayer = 2;
const danish = new orianterObjet.Danish(nbrPlayer);


function translateCard(num) {
    const arrayTranslate = ["card","ace","two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
  
    return arrayTranslate[num];
}

function renderCardsHand() {
    const divCardPlayer = document.querySelector("#playerGame #card-hand");
    divCardPlayer.innerHTML = "";
    // danish.cardsPlayable(danish.discardPile[0]);
    
    const playerHand = danish.tablePlayerGame[1].tableHands;
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

    const divCardPlayer = document.querySelector("#playerGame #card-back");
    divCardPlayer.innerHTML = "";
    
    const playerHidden = danish.tablePlayerGame[1].table3carteHiddenPlayer;
    
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
    const divCardPlayer = document.querySelector("#playerGame #card-visible");
    divCardPlayer.innerHTML = "";

    const playerVisible = danish.tablePlayerGame[1].table3CardsVisiblePlayer;
    
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

function renderCardsVisibleIa() {
    const divCardPlayer = document.querySelector("#iaGame #card-visible");
    divCardPlayer.innerHTML = "";

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

function renderCardsHiddenIa(){

    const divCardPlayer = document.querySelector("#iaGame #card-back");
    divCardPlayer.innerHTML = "";
    
    const playerHidden = danish.tablePlayerGame[0].table3carteHiddenPlayer;
    
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

function renderCardsHandIa() {
    const divCardPlayer = document.querySelector("#iaGame #card-hand");
    divCardPlayer.innerHTML = "";
    // danish.cardsPlayable(danish.discardPile[0]);
    
    const playerHand = danish.tablePlayerGame[0].tableHands;
    console.log("----- main IA -----");
    console.log(playerHand);


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


function renderPile() {
    console.log("------- render pile -------")
    const divCardPlayer = document.querySelector("#game #pile");
    divCardPlayer.innerHTML = "";
    const infoCard = danish.discardPile[danish.discardPile.length-1];
    const cards = document.createElement("div"); 
    const cardcontent = document.createElement("div"); 
    cardcontent.className = "card-content";
    cardcontent.className += " ";
    cardcontent.className += translateCard(infoCard.value);
    cards.className = "cards";
    cards.className += " ";
    cards.className += infoCard.color;
    cards.className += " ";
    cards.className += translateCard(infoCard.value);
    cards.dataset.number = translateCard(infoCard.value);
    cards.dataset.type = infoCard.color;

    divCardPlayer.appendChild(cardcontent);
    cardcontent.appendChild(cards);


}


function IAPlaye() {
    let index = 0;
    if(danish.tablePlayerGame[0].tableHands.length !== 0 ){
        let card = {color : null , value : 20} 
        // eslint-disable-next-line no-plusplus
        for(let i=0; i < danish.tablePlayerGame[0].tableHands.length ; i++)
            if(danish.tablePlayerGame[0].tableHands[i].value <= card.value){
                console.log("-----test main :-------");
                console.log(danish.tablePlayerGame[0].tableHands);
                card = danish.tablePlayerGame[0].tableHands[i];
                index = i;
        }

        
        danish.discardPile.push(danish.tablePlayerGame[0].tableHands.splice(index,1)[0]);
        
        danish.getNewCard();

        console.log("main ia après jouer")
        console.log(danish.tablePlayerGame[0].tableHands);

        renderPile();
        renderCardsHandIa();
    }
}


function run() {
// danish.tablePlayerGame[danish.indexOfActualPlayer].win === false
console.log("---------- nouveau tour -------------");

    renderPile();
    renderCardsHand();
    renderCardsHidden();
    renderCardsVisible();

    renderCardsVisibleIa();
    renderCardsHiddenIa();
    renderCardsHandIa();

    IAPlaye();
    danish.nextPlayer();
    
    
    console.log("defausse");
    console.log(danish.discardPile);


    

};

function cardPlay(number, type, idJoueur) {
    console.log(`c'est le tour de : ${  danish.indexOfActualPlayer}`);
    console.log(`indice jouer = ${  idJoueur}`);
    console.log(danish.tablePlayerGame[danish.indexOfActualPlayer].tableHands)
    // eslint-disable-next-line eqeqeq
    if(danish.indexOfActualPlayer == idJoueur){
        console.log(" son tour");
        if(danish.tablePlayerGame[danish.indexOfActualPlayer].tableHands.length !== 0){
            // eslint-disable-next-line no-plusplus
            for(let i = 0 ; i <= danish.tablePlayerGame[danish.indexOfActualPlayer].tableHands.length ; i++){
    
                if(danish.tablePlayerGame[danish.indexOfActualPlayer].tableHands[i].value === number && danish.tablePlayerGame[danish.indexOfActualPlayer].tableHands[i].color === type){
                    danish.discardPile.push(danish.tablePlayerGame[danish.indexOfActualPlayer].tableHands[i].splice(i,1));
                    console.log("defausse après jouer");
                    console.log(danish.discardPile);
                }
                

    
            }
    
        }
    } else {
        console.log("pas son tour");
    }
    
    
};




 
module.exports = { run, cardPlay }