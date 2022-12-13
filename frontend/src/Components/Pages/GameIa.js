import menuBtn from '../../img/menu.png';
import backBtn from '../../img/back.png';
import GetButtons from '../Router/GetButtons';
import rulesBtn from '../../img/rules.png';
import { run, cardPlay } from '../../utils/front-script';



const CreditsPage = () => {
  // eslint-disable-next-line no-use-before-define
  mainHeader();
  // eslint-disable-next-line no-use-before-define
  createBody();
  GetButtons();
  run();
  // eslint-disable-next-line no-use-before-define
  mainFooter();

  console.log(`test`);
  const card = document.querySelectorAll('div.cards');
  console.log(card);
  Array.from(card).forEach((elem) => {
      elem.addEventListener('click', () => {
          const number = elem?.dataset?.number;
          const type = elem?.dataset?.type;
          console.log(`${type} - ${number}`);
          const user = elem.closest('div.card-user');
          console.log(user)
          const idJoueur = user?.dataset?.player;
          console.log(`${idJoueur}`);

          cardPlay(number, type, idJoueur);
      });
  })
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
  carduser.dataset.player = 1;
  playerGame.id = "playerGame";
  iaGame.id = "iaGame";
  playerGame.className = "hand-player";
  iaGame.className = "hand-player";
  carduserIa.dataset.player = 0;

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
    <button data-uri="/" class="navigation-btn"><img id="rules-btn" class="ms-2" src="${backBtn}" alt="rules button"></button>
    <a href="#"><img id="rules-btn" class="ms-2" src="${menuBtn}" alt="rules button"></a>
    </header>
    `;
}

const mainFooter = () => {
  const main = document.querySelector('main');

  main.innerHTML += `
  <footer class="px-3 pb-3 d-flex justify-content-end align-items-center"><div id="rules"><a href="#">rules</a><img id="rules-btn" class="ms-2" src="${rulesBtn}" alt="rules button"></div></footer>
  `;
}


export default CreditsPage;
