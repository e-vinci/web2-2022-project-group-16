import logo from '../../img/logo.svg';
import menuBtn from '../../img/menu.png';
import GetButtons from '../Router/GetButtons';
import Button from '../Buttons/Button';
// import RulesModal from '../Modal/RulesModal';
import Footer from '../Footer/Footer';

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
    </div>
    </div>
  </div>
  <footer class="px-3 pb-3 d-flex justify-content-between align-items-center"></footer>`;

  GetButtons();
  // RulesModal();
  Footer();
};

export default HomePage;
