import rulesBtn from '../../img/rules.png';
import menuBtn from '../../img/menu.png';
import backBtn from '../../img/back.png';
import GetButtons from '../Router/GetButtons';


const NewGamePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <header class="px-3 pt-3 d-flex justify-content-between align-items-center">
  <div id="back">
    <button id="back" data-uri="/">
      <img id="back-btn" class="ms-2" src="${backBtn}" alt="back button">
    </button>
  </div>
  <div id="rules"><a href=""><img id="rules-btn" class="ms-2" src="${menuBtn}" alt="rules button"></a></div>
  </header>
  <div id="game" class="d-flex justify-content-center align-items-center">
    <div id="main-menu d-flex">
    <div class="row text-center">
        <div class="col-12"><h2>Choose Game Mode</h2></div>
        <div class="col-12"><button id="game-ia" data-uri="/game-ia">Player VS A.I.</button></div>
        <div class="col-12"><button id="game-player" data-uri="/game-player">Player VS Players</button></div>
    </div>
    </div>
  </div>
  <footer class="px-3 pb-3 d-flex justify-content-end align-items-center"><div id="rules"><a href="#">rules</a><img id="rules-btn" class="ms-2" src="${rulesBtn}" alt="rules button"></div></footer>`;

  GetButtons();
};

export default NewGamePage;