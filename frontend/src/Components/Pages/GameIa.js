import menuBtn from '../../img/menu.png';
import backBtn from '../../img/back.png';
import GetButtons from '../Router/GetButtons';
import rulesBtn from '../../img/rules.png';
import { run } from '../../utils/front-script';



const CreditsPage = () => {
  // eslint-disable-next-line no-use-before-define
  mainHeader();
  // eslint-disable-next-line no-use-before-define
  createBody();
  GetButtons();
  run();
  // eslint-disable-next-line no-use-before-define
  mainFooter();

  const card = document.querySelectorAll('div.cards');

    Array.from(card).forEach((elem) => {
        elem.addEventListener('click', () => {
            const number = elem?.dataset?.number;
            const type = elem?.dataset?.type;
            console.log(`${type} - ${number}`);
        });
    })
};

const createBody = () => {
  // create a new div element 
	const game = document.createElement("div");
	// eslint-disable-next-line camelcase
	const carduser = document.createElement("div"); 
	const cardback = document.createElement("div"); 
	const cardvisible = document.createElement("div"); 
  const cardhand = document.createElement("div"); 

  // assigning class name to the new div
  game.id = "game";
  carduser.className = "card-user";
  cardback.className = "card-back";
  cardvisible.className = "card-visible";
  cardhand.className = "card-hand";
  cardhand.id = "card-hand";
  cardback.id = "card-back";
  cardvisible.id = "card-visible";

  const main = document.querySelector('main');
  main.appendChild(game);
  game.appendChild(carduser);
  carduser.appendChild(cardhand)
  game.appendChild(cardback);
  game.appendChild(cardvisible);

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
