/* eslint-disable import/no-import-module-exports */
// eslint-disable-next-line import/no-import-module-exports
import menuBtn from '../../img/menu.png';
import backBtn from '../../img/back.png';
import GetButtons from '../Router/GetButtons';
import rulesBtn from '../../img/rules.png';
import { run, clickOnCard } from '../../utils/front-script';



const GamePage = () => {
  // eslint-disable-next-line no-use-before-define
  mainHeader();
  // eslint-disable-next-line no-use-before-define
  createBody();
  
  run();
  // eslint-disable-next-line no-use-before-define
  mainFooter();
  GetButtons();
  clickOnCard();
  console.log(`test`);



  // eslint-disable-next-line no-unused-vars
  
};


const createBody = () => {
  // create a new div element 
	const game = document.createElement("div");
	// eslint-disable-next-line camelcase
	const carduser = document.createElement("div"); 
	const cardback = document.createElement("div"); 
  const cardbackIa = document.createElement("div");
	const cardvisible = document.createElement("div"); 
  const cardvisibleIa = document.createElement("div"); 
  const cardhand = document.createElement("div"); 
  const playerGame = document.createElement("div");
  const iaGame = document.createElement("div");
  const carduserIa = document.createElement("div"); 
  const cardhandIa = document.createElement("div"); 
  const pile = document.createElement("div");

  // assigning class name to the new div
  game.id = "game";
  pile.id = "pile";
  carduser.className = "card-user";
  carduserIa.className = "card-user";
  cardback.className = "card-back";
  cardbackIa.className = "card-back";
  cardvisible.className = "card-visible";
  cardvisibleIa.className = "card-visible";
  cardhand.className = "card-hand";
  cardhandIa.className = "card-hand";
  cardhand.id = "card-hand";
  cardhandIa.id = "card-hand";
  cardback.id = "card-back";
  cardbackIa.id = "card-back";
  cardvisible.id = "card-visible";
  cardvisibleIa.id = "card-visible";
  playerGame.dataset.player = 1;
  playerGame.id = "playerGame";
  iaGame.id = "iaGame";
  playerGame.className = "hand-player";
  iaGame.className = "hand-player";
  iaGame.dataset.player = 0;

  const main = document.querySelector('main');
  main.appendChild(game);
  game.appendChild(pile);
  game.appendChild(playerGame);
  game.appendChild(iaGame);

  iaGame.appendChild(carduserIa);
  carduserIa.appendChild(cardhandIa);
  iaGame.appendChild(cardbackIa);
  iaGame.appendChild(cardvisibleIa);

  playerGame.appendChild(carduser);
  carduser.appendChild(cardhand)
  playerGame.appendChild(cardback);
  playerGame.appendChild(cardvisible);

}

const mainHeader = () => {
    const main = document.querySelector('main');

    main.innerHTML = `
    <header class="px-3 pt-3 d-flex justify-content-between align-items-center">

    <button data-uri="/" class="navigation-btn back-btn-game"><img id="rules-btn" class="ms-2" src="${backBtn}" alt="rules button"></button>

    <a href="/" class="rule-btn"><img id="rules-btn" class="ms-2" src="${menuBtn}" alt="rules button"></button>

    </header>
    `;
    

}

const mainFooter = () => {
  const main = document.querySelector('main');

  main.innerHTML += `
  <footer class="px-3 pb-3 d-flex justify-content-end align-items-center"><div id="rules"><a class="rule-btn">rules</a><img id="rules-btn" class="ms-2" src="${rulesBtn}" alt="rules button"></div></footer>
  `;

  const rule = document.querySelector('div#rules');
  const modal = document.getElementById("myModal");
  rule.addEventListener("click", (event)=> {
    event.preventDefault();
    modal.style.display = "flex";
    console.log("clicckkkkk")
  });
  const closeModal = document.querySelector("div#myModal .close");
  closeModal.onclick = function() {
    modal.style.display = "none";
  }
  
}

export default GamePage;

