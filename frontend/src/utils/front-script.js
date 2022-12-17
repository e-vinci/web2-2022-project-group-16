// eslint-disable-next-line import/no-import-module-exports
import Danish from '../Components/Game/Danish';

const auths = require('./auths');
// const orianterObjet = require('../../../api/routes/orianterObjet');

const nbrPlayer = 2;
const danish = new Danish(nbrPlayer);


function clickOnCard() {
    const card = document.querySelectorAll('div#playerGame div.cards');
    Array.from(card).forEach((elem) => {
      elem.addEventListener('click', () => {
          const number = elem?.dataset?.number;
          const type = elem?.dataset?.type;
          const user = elem.closest('div#playerGame');
          const idJoueur = user?.dataset?.player;
          cardPlay(number, type, idJoueur);
      });
  })
}

function translateCardFromNum(num) {
    const arrayTranslate = ["card","ace","two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
  
    return arrayTranslate[num];
}

function translateCardFromString(string) {
    const arrayTranslate = ["card","ace","two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
  
    return arrayTranslate.indexOf(string);
}

function renderCardsHand() {
    const divCardPlayer = document.querySelector("#playerGame #card-hand");
    divCardPlayer.innerHTML = "";
    
    const playerHand = danish.tablePlayerGame[1].hand;

    // eslint-disable-next-line no-plusplus
    for(let i=0; i < playerHand.length; i++){
        

        const cardcontent = document.createElement("div"); 
        const cards = document.createElement("div"); 

        cardcontent.className = "card-content";
        cardcontent.className += " ";
        cardcontent.className += translateCardFromNum(playerHand[i].value);

        cards.className = "cards";
        cards.className += " ";
        cards.className += playerHand[i].color;
        cards.className += " ";
        cards.className += translateCardFromNum(playerHand[i].value);
        cards.dataset.number = translateCardFromNum(playerHand[i].value);
        cards.dataset.type = playerHand[i].color;

        if (danish.cardsPlayable(danish.discardPile[danish.discardPile.length-1]).includes(playerHand[i].value)){
            cardcontent.className += " ";
            cardcontent.className += "isPlayable";
        }

        divCardPlayer.appendChild(cardcontent);
        cardcontent.appendChild(cards);
    }

    clickOnCard();

}

function renderCardsHidden(){
    const divCardPlayer = document.querySelector("#playerGame #card-back");
    divCardPlayer.innerHTML = "";
    const playerHidden = danish.tablePlayerGame[1].hiddenCards;
    // eslint-disable-next-line no-plusplus
    for(let i=0; i < playerHidden.length; i++){
        const cardcontent = document.createElement("div"); 
        const cards = document.createElement("div"); 

        cardcontent.className = "card-content";
        cardcontent.className += " ";
        cardcontent.className += translateCardFromNum(playerHidden[i].value);

        cards.className = "cards";
        cards.className += " ";
        cards.className += playerHidden[i].color;
        cards.className += " ";
        cards.className += translateCardFromNum(playerHidden[i].value);
        cards.dataset.number = translateCardFromNum(playerHidden[i].value);
        cards.dataset.type = playerHidden[i].color;

        divCardPlayer.appendChild(cardcontent);
        cardcontent.appendChild(cards);
    }

    clickOnCard();

}


function renderCardsVisible() {
    const divCardPlayer = document.querySelector("#playerGame #card-visible");
    divCardPlayer.innerHTML = "";
    const playerVisible = danish.tablePlayerGame[1].visibleCards;
    // eslint-disable-next-line no-plusplus
    for(let i=0; i < playerVisible.length; i++){
        const cardcontent = document.createElement("div"); 
        const cards = document.createElement("div"); 

        cardcontent.className = "card-content";
        cardcontent.className += " ";
        cardcontent.className += translateCardFromNum(playerVisible[i].value);

        cards.className = "cards";
        cards.className += " ";
        cards.className += playerVisible[i].color;
        cards.className += " ";
        cards.className += translateCardFromNum(playerVisible[i].value);
        cards.dataset.number = translateCardFromNum(playerVisible[i].value);
        cards.dataset.type = playerVisible[i].color;

        if (danish.tablePlayerGame[1].hand.length ===0 && danish.cardsPlayable(danish.discardPile[danish.discardPile.length-1]).includes(playerVisible[i].value)){
            cardcontent.className += " ";
            cardcontent.className += "isPlayable";
        }

        divCardPlayer.appendChild(cardcontent);
        cardcontent.appendChild(cards);
    }

    clickOnCard();

}

function renderCardsVisibleIa() {
    const divCardPlayer = document.querySelector("#iaGame #card-visible");
    divCardPlayer.innerHTML = "";
    const playerVisible = danish.tablePlayerGame[0].hiddenCards;
    // eslint-disable-next-line no-plusplus
    for(let i=0; i < playerVisible.length; i++){
        const cardcontent = document.createElement("div"); 
        const cards = document.createElement("div"); 

        cardcontent.className = "card-content";
        cardcontent.className += " ";
        cardcontent.className += translateCardFromNum(playerVisible[i].value);

        cards.className = "cards";
        cards.className += " ";
        cards.className += playerVisible[i].color;
        cards.className += " ";
        cards.className += translateCardFromNum(playerVisible[i].value);
        cards.dataset.number = translateCardFromNum(playerVisible[i].value);
        cards.dataset.type = playerVisible[i].color;
        divCardPlayer.appendChild(cardcontent);
        cardcontent.appendChild(cards);
    }

}

function renderCardsHiddenIa(){

    const divCardPlayer = document.querySelector("#iaGame #card-back");
    divCardPlayer.innerHTML = "";
    const playerHidden = danish.tablePlayerGame[0].hiddenCards;
    // eslint-disable-next-line no-plusplus
    for(let i=0; i < playerHidden.length; i++){
        const cardcontent = document.createElement("div"); 
        const cards = document.createElement("div"); 

        cardcontent.className = "card-content";
        cardcontent.className += " ";
        cardcontent.className += translateCardFromNum(playerHidden[i].value);

        cards.className = "cards";
        cards.className += " ";
        cards.className += playerHidden[i].color;
        cards.className += " ";
        cards.className += translateCardFromNum(playerHidden[i].value);
        cards.dataset.number = translateCardFromNum(playerHidden[i].value);
        cards.dataset.type = playerHidden[i].color;

        divCardPlayer.appendChild(cardcontent);
        cardcontent.appendChild(cards);
    }

}

function renderCardsHandIa() {
    const divCardPlayer = document.querySelector("#iaGame #card-hand");
    divCardPlayer.innerHTML = "";
    const playerHand = danish.tablePlayerGame[0].hand;
    // eslint-disable-next-line no-plusplus
    for(let i=0; i < playerHand.length; i++){
        const cardcontent = document.createElement("div"); 
        const cards = document.createElement("div"); 

        cardcontent.className = "card-content";
        cardcontent.className += " ";
        cardcontent.className += translateCardFromNum(playerHand[i].value);

        cards.className = "cards";
        cards.className += " ";
        cards.className += playerHand[i].color;
        cards.className += " ";
        cards.className += translateCardFromNum(playerHand[i].value);
        cards.dataset.number = translateCardFromNum(playerHand[i].value);
        cards.dataset.type = playerHand[i].color;

        divCardPlayer.appendChild(cardcontent);
        cardcontent.appendChild(cards);
    }

}


function renderPile() {
    const divCardPlayer = document.querySelector("#game #pile");
    divCardPlayer.innerHTML = "";
    const infoCard = danish.discardPile[danish.discardPile.length-1];
    const cards = document.createElement("div"); 
    const cardcontent = document.createElement("div"); 
    cardcontent.className = "card-content";
    cardcontent.className += " ";
    cardcontent.className += translateCardFromNum(infoCard.value);
    cards.className = "cards";
    cards.className += " ";
    cards.className += infoCard.color;
    cards.className += " ";
    cards.className += translateCardFromNum(infoCard.value);
    cards.dataset.number = translateCardFromNum(infoCard.value);
    cards.dataset.type = infoCard.color;

    divCardPlayer.appendChild(cardcontent);
    cardcontent.appendChild(cards);
}

function CutDiscardPile(){
    // eslint-disable-next-line no-plusplus
    for(let i = 0 ; i <= danish.tablePlayerGame[danish.indexOfActualPlayer].hand.length-1 ; i++){
        if(danish.tablePlayerGame[danish.indexOfActualPlayer].hand[i].value === 10){
            danish.discardPile.push(danish.tablePlayerGame[danish.indexOfActualPlayer].hand.splice(i,1)[0]);
            danish.getNewCard();
            renderCardsHand();
        }
    }

    const discardPileNew = [];
    discardPileNew.push(danish.discardPile[0]);
    danish.discardPile = discardPileNew;
    renderPile();
    
    if(danish.indexOfActualPlayer === 0){
        // return setTimeout(IAPlaye, 1000);
    }
}


function GetDiscardPile(){
    const discardPileNew = [];
    danish.discardPile.forEach(element => {
        if(danish.discardPile[0] !== element){
            danish.tablePlayerGame[danish.indexOfActualPlayer].hand.push(element);
        }else{
            discardPileNew.push(element);
        }
    });
    renderCardsHand();
    renderCardsHandIa();
    danish.discardPile = discardPileNew;
}

function IAConditionPlay(tableToPlay){
    const cardDiscard = danish.discardPile[danish.discardPile.length-1];
    const cardsPlayable = danish.cardsPlayable(cardDiscard);
    let index = -1 ;
    let indexBis = -1;
    let card = {color : null , value : 20} 
    // eslint-disable-next-line no-plusplus
    for(let i= 0 ; i < tableToPlay.length  ; i++){
            if (tableToPlay[i].value <= card.value){
                if(cardsPlayable.includes(tableToPlay[i].value)){
                    if(tableToPlay[i].value === 3 || tableToPlay[i].value ===2 || tableToPlay[i].value === 1){
                        indexBis = i;
                    }else{
                        card = tableToPlay[i];
                        index = i;
                    }
                }
        }
    }
    if (index === -1){
        if(indexBis !== -1) {
         index = indexBis;
         card = tableToPlay[indexBis];   
        }
    }
    if(index > -1){
        if(card.value === 10){
            CutDiscardPile(); 
            danish.getNewCard();
            danish.discardPile.push(tableToPlay.splice(index,1)[0]);
            danish.getNewCard();
            return true;
        }
        if(card.value === 8){
            danish.discardPile.push(tableToPlay.splice(index,1)[0]);
            danish.getNewCard();
            return false;
        }

        danish.discardPile.push(tableToPlay.splice(index,1)[0]);
        
        danish.getNewCard();
        
        

    }else{
        GetDiscardPile();
    }
    
    return true;

}



async function IAPlaye() {
    let canChangePlayer ;
    const index = 0;
    let canWin = false;
    let card = {color : null , value : 20} 
    if(danish.tablePlayerGame[0].hand.length !== 0 ){
        canChangePlayer = IAConditionPlay(danish.tablePlayerGame[0].hand);
        renderCardsHandIa();

    }else if (danish.tablePlayerGame[0].visibleCards.length !== 0){
        canChangePlayer = IAConditionPlay(danish.tablePlayerGame[0].visibleCards);
        renderCardsVisibleIa();
    }else {
        // eslint-disable-next-line prefer-destructuring
        card = danish.tablePlayerGame[0].hiddenCards[0];
        const cardDiscard = danish.discardPile[danish.discardPile.length-1];
        const cardsPlayable = danish.cardsPlayable(cardDiscard);
        danish.discardPile.push(danish.tablePlayerGame[0].hiddenCards.splice(index,1)[0]);
        if(!cardsPlayable.includes(card.value)){
            GetDiscardPile();
            renderPile();
            canWin = false;
        }
        canWin = true;
    
        renderCardsHiddenIa();
    }

    if( canWin && danish.tablePlayerGame[danish.indexOfActualPlayer].hiddenCards.length === 0){
        danish.tablePlayerGame[danish.indexOfActualPlayer].win = true;
        const usernameIa = "ia";

        const optionsGagner = {
            method: 'POST',
            body: JSON.stringify({
                usernameIa
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const responseWin = await fetch(`${process.env.API_BASE_URL}/score/winGame`,optionsGagner) 
        if (!responseWin.ok) throw new Error(`fetch error : ${responseWin.status} : ${responseWin.statusText}`);
        const userGlobal = auths.getAuthenticatedUser();
        const {username} = userGlobal.username;
        const optionsPerdu = {
            method: 'POST',
            body: JSON.stringify({
                username
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const responseLose = await fetch(`${process.env.API_BASE_URL}/score/loseGame`,optionsPerdu) 

        if (!responseLose.ok) throw new Error(`fetch error : ${responseLose.status} : ${responseLose.statusText}`);


        return;
    }
    renderPile();
    renderCardsHand();
    renderCardsVisible()
    if(canChangePlayer){
        danish.nextPlayer();
    }else{
        setTimeout(IAPlaye, 1000);
        return ;
    }
    CanYouPlay();
};

function CanYouPlay(){
    const cardDiscard = danish.discardPile[danish.discardPile.length-1];
    const cardsPlayable = danish.cardsPlayable(cardDiscard);
    let cmp = 0;
    let tableToPlay = danish.discardPile[0];
    if (danish.tablePlayerGame[danish.indexOfActualPlayer].hand.length !== 0){
        tableToPlay = danish.tablePlayerGame[danish.indexOfActualPlayer].hand
    }else if(danish.tablePlayerGame[danish.indexOfActualPlayer].visibleCards.length !== 0){
        tableToPlay = danish.tablePlayerGame[danish.indexOfActualPlayer].visibleCards;
    }
    // eslint-disable-next-line no-plusplus
    for(let i=0; i < tableToPlay.length ; i++){
        if(!cardsPlayable.includes(tableToPlay[i].value)){
            // eslint-disable-next-line no-plusplus
            cmp++;
        }
    }
    if(cmp >= tableToPlay.length){
        GetDiscardPile();
        renderCardsHand();
        renderPile();
        danish.nextPlayer();
        setTimeout(IAPlaye, 1000);
        
    }

}

function run() {
    renderPile();
    renderCardsHand();
    renderCardsHidden();
    renderCardsVisible();
    renderCardsVisibleIa();
    renderCardsHiddenIa();
    renderCardsHandIa();
    setTimeout(IAPlaye, 1000);
};

async function cardPlay(number, type, idJoueur) {
    // eslint-disable-next-line eqeqeq
    if(danish.indexOfActualPlayer == idJoueur){
        let bool10 = false;
        if(danish.tablePlayerGame[danish.indexOfActualPlayer].hand.length !== 0){
            if(translateCardFromString(number) === 10){
                CutDiscardPile();
                renderCardsHand();
                bool10 = true;
                return;
            }
            if(danish.cardsPlayable(danish.discardPile[danish.discardPile.length-1]).includes(translateCardFromString(number))){            
                // eslint-disable-next-line no-plusplus
                for(let i = 0 ; i <= danish.tablePlayerGame[danish.indexOfActualPlayer].hand.length-1 ; i++){
                    if(translateCardFromNum(danish.tablePlayerGame[danish.indexOfActualPlayer].hand[i].value) === number && danish.tablePlayerGame[danish.indexOfActualPlayer].hand[i].color === type){
                        danish.discardPile.push(danish.tablePlayerGame[danish.indexOfActualPlayer].hand.splice(i,1)[0]);
                        renderPile();
                        danish.getNewCard();
                        renderCardsHand();
                        if (translateCardFromString(number) === 8){
                            renderCardsHand();
                            return;
                        }
                    }
                }
            } else {
                return;
            }
        }else if (danish.tablePlayerGame[danish.indexOfActualPlayer].visibleCards.length !== 0){
            if(danish.cardsPlayable(danish.discardPile[danish.discardPile.length-1]).includes(translateCardFromString(number))){            
                // eslint-disable-next-line no-plusplus
                for(let i = 0 ; i <= danish.tablePlayerGame[danish.indexOfActualPlayer].visibleCards.length-1 ; i++){
                    if(translateCardFromNum(danish.tablePlayerGame[danish.indexOfActualPlayer].visibleCards[i].value) === number && danish.tablePlayerGame[danish.indexOfActualPlayer].visibleCards[i].color === type){
                        danish.discardPile.push(danish.tablePlayerGame[danish.indexOfActualPlayer].visibleCards.splice(i,1)[0]);
                        renderPile();
                        renderCardsVisible();
                        if (translateCardFromString(number) === 8){
                            renderCardsVisible();
                            return;
                        }
                        if(translateCardFromString(number) === 10){
                            CutDiscardPile();
                            renderCardsVisible();
                            bool10 = true;
                            return;
                        }
                    }else {
                        setTimeout(GetDiscardPile, 500);
                        renderCardsHidden();
                    }
                }
            }
        }else{       
            // eslint-disable-next-line no-plusplus
            for(let i = 0 ; i <= danish.tablePlayerGame[danish.indexOfActualPlayer].hiddenCards.length-1 ; i++){
                if(translateCardFromNum(danish.tablePlayerGame[danish.indexOfActualPlayer].hiddenCards[i].value) === number && danish.tablePlayerGame[danish.indexOfActualPlayer].hiddenCards[i].color === type){
                    danish.discardPile.push(danish.tablePlayerGame[danish.indexOfActualPlayer].hiddenCards.splice(i,1)[0]);
                    if(danish.cardsPlayable(danish.discardPile[danish.discardPile.length-1]).includes(danish.tablePlayerGame[danish.indexOfActualPlayer].hiddenCards[i])){
                        renderPile();
                        renderCardsHidden();
                        if (translateCardFromString(number) === 8){
                            renderCardsHidden();
                            return;
                        }
                        if(translateCardFromString(number) === 10){
                            CutDiscardPile();
                            renderCardsHidden();
                            bool10 = true;
                            return;
                        }
                    }else {
                        setTimeout(GetDiscardPile, 500);
                        renderCardsHidden();
                        renderPile();
                    }
                    
                }
            }

        }
        if(danish.tablePlayerGame[danish.indexOfActualPlayer].hiddenCards.length === 0){
            danish.tablePlayerGame[danish.indexOfActualPlayer].win = true;
            const userGlobal = auths.getAuthenticatedUser();

            const {username} = userGlobal.username;

            const optionsGagner = {
                method: 'POST',
                body: JSON.stringify({
                    username
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            };


            const responseWin = await fetch(`${process.env.API_BASE_URL}/score/winGame`,optionsGagner) 

            if (!responseWin.ok) throw new Error(`fetch error : ${responseWin.status} : ${responseWin.statusText}`);


            const usernameIa = "ia";

            const optionsPerdu = {
                method: 'POST',
                body: JSON.stringify({
                    usernameIa
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const responseLose = await fetch(`${process.env.API_BASE_URL}/score/loseGame`,optionsPerdu) 

            if (!responseLose.ok) throw new Error(`fetch error : ${responseLose.status} : ${responseLose.statusText}`);
            
            return;
        }

        if(!bool10){
            danish.nextPlayer();
        }
        
        setTimeout(IAPlaye, 700);
    }
};




 
export default run;