import backBtn from '../../img/back.png';
import GetButtons from '../Router/GetButtons';
import Button from '../Buttons/Button';

import run from '../../utils/front-script'; 

const GamePage = () => {
  // eslint-disable-next-line no-use-before-define
  const main = document.querySelector('main');

  main.innerHTML = `
  <header class="px-3 pt-3 d-flex justify-content-between align-items-center">
  ${Button('back','/',backBtn)}
  </header>
  <div id="game" class="d-flex justify-content-center align-items-center">
    <div id="game-mat" class="d-flex justify-content-center align-items-center"><div id="inner-mat"></div></div>
    <div data-player="1" id="playerGame" class="hand-player">
      <div class="card-user">
          <div class="card-hand" id="card-hand"></div>
      </div>
        <div class="card-back" id="card-back"></div>
        <div class="card-visible" id="card-visible"></div>
    </div>
    <div id="pile"></div>
    <div data-player="0" id="iaGame" class="hand-player">
      <div class="card-user">
          <div class="card-hand" id="card-hand"></div>
      </div>
        <div class="card-back" id="card-back"></div>
        <div class="card-visible" id="card-visible"></div>
    </div>
  </div>
  <footer class="px-3 pb-3 d-flex justify-content-between align-items-center"></footer>`;
  
  run();
  GetButtons();
  // clickOnCard();
  
};

export default GamePage;

