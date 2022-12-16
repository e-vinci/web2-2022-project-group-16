import logo from '../../img/logo.svg';
import rulesBtn from '../../img/rules.png';
import menuBtn from '../../img/menu.png';
import GetButtons from '../Router/GetButtons';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <header class="px-3 pt-3 d-flex justify-content-end align-items-center"><div id="menu">
  <a href="">
    <img id="rules-btn" class="ms-2" src="${menuBtn}" alt="rules button">
  </a>
  </div>
  </header>
  <div id="game" class="d-flex justify-content-center align-items-center">
    <div id="main-menu d-flex">
    <div class="row text-center">
        <img id="logo" class="col-12" src="${logo}" alt="8bit danish logo">
        <div class="col-12"><button id="new-game" data-uri="/new-game">New Game</button></div>
        <div class="col-12"><button id="credits" data-uri="/credits">Credits</button></div>
    </div>
    </div>
  </div>
  <footer class="px-3 pb-3 d-flex justify-content-end align-items-center"><div id="rules"><a class="rule-btn">rules</a><img id="rules-btn" class="ms-2" src="${rulesBtn}" alt="rules button"></div></footer>`;

  GetButtons();

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


};

export default HomePage;
