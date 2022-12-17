import menuBtn from '../../img/menu.png';
import backBtn from '../../img/back.png';
import GetButtons from '../Router/GetButtons';
import Button from '../Buttons/Button';


const NewGamePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <header class="px-3 pt-3 d-flex justify-content-between align-items-center">
  ${Button('login page','/',backBtn)}
  <div id="rules"><button data-uri="/login"><img class="button ms-2" src="${menuBtn}" alt="rules button"></button></div>
  </header>
  <div id="game" class="d-flex justify-content-center align-items-center">
    <div id="main-menu d-flex">
    <div class="row text-center">
        <div class="col-12"><h2>Choose Game Mode</h2></div>
        <div class="col-12"><button data-uri="/play" class="">Player VS A.I.</button></div>
        <div class="col-12"><a class="disabled" href="#">Player VS Players</a></div>
    </div>
    </div>
  </div>
  <footer class="px-3 pb-3 d-flex justify-content-between align-items-center"></footer>`;
  GetButtons();
};

export default NewGamePage;