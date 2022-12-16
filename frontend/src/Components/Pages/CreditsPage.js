import menuBtn from '../../img/menu.png';
import backBtn from '../../img/back.png';
import GetButtons from '../Router/GetButtons';
import Button from '../Buttons/Button';

const CreditsPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <header class="px-3 pt-3 d-flex justify-content-between align-items-center">
  ${Button('login page','/',backBtn)}
  ${Button('login page','/login',menuBtn)}
  </header>
  <div id="game" class="d-flex justify-content-center align-items-center">
    <div class="d-flex">
    <div id="credits" class="row text-center">
        <div class="pb-4 mt-5 col-12">
          <h2>Developpers</h2>
          <p>Craps Dorian</p>
          <p>De Coen Julien</p>
          <p>Platiau Quentin</p>
          <p>Torres Silva Gabriel</p>
          <p>Quisquater Martin</p>
        </div>
        <div class="pb-4 col-12">
          <h2>Sound Design</h2>
          <p>Hove Tom</p>
        </div>
        <div class="pb-4 col-12">
          <h2>Graphical Assets</h2>
          <p>Myers Michael</p>
          <p>Kenney</p>
        </div>
    </div>
    </div>
  </div>
  <footer class="px-3 pb-3 d-flex justify-content-end align-items-center"><div id="rules"></div></footer>`;
  GetButtons();
};

export default CreditsPage;
