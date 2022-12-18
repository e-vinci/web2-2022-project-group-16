import logo from '../../img/logo.svg';
import menuBtn from '../../img/menu.png';
import GetButtons from '../Router/GetButtons';
import Button from '../Buttons/Button';
import RulesModal from '../Modal/RulesModal';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <header class="px-3 pt-3 d-flex justify-content-end align-items-center"><div id="rules">${Button('login page','/login',menuBtn)}</div>
  </header>
  <div id="game" class="d-flex justify-content-center align-items-center">
    <div id="main-menu d-flex">
    <div class="row text-center">
        <img id="logo" class="col-12" src="${logo}" alt="8bit danish logo">
        <div class="col-12"><button data-uri="/new-game">New Game</button></div>
        <div class="col-12"><button data-uri="/credits">Credits</button></div>
        <div class="col-12"><button data-uri="/score">Ranking</button></div>
    </div>
    </div>
  </div>
  <footer class="px-3 pb-3 d-flex justify-content-between align-items-center"></footer>`;
  RulesModal();
  GetButtons();
  // eslint-disable-next-line no-use-before-define
  classement();
};

const classement = async () => {
  const response = await fetch(`${process.env.API_BASE_URL}/score/listOrder`, {method: 'GET'});
  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  
}

export default HomePage;
