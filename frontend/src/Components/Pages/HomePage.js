import logo from '../../img/logo.svg';
import rulesBtn from '../../img/rules.png';
import menuBtn from '../../img/menu.png';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <header class="px-3 pt-3 d-flex justify-content-end align-items-center"><div id="rules"><a href=""><img id="rules-btn" class="ms-2" src="${menuBtn}" alt="rules button"></a></div></header>
  <div id="game" class="d-flex justify-content-center align-items-center">
    <div id="main-menu d-flex">
    <div class="row text-center">
        <img id="logo" class="col-12" src="${logo}" alt="8bit danish logo">
        <div class="col-12"><a href="/FirstMenu">New Game</a></div>
        <div class="col-12"><a href="">Credits</a></div>
        <div class="col-12"><a href="">Exit</a></div>
    </div>
    </div>
  </div>
  <footer class="px-3 pb-3 d-flex justify-content-end align-items-center"><div id="rules"><a href="#">rules</a><img id="rules-btn" class="ms-2" src="${rulesBtn}" alt="rules button"></div></footer>`;
};

export default HomePage;
