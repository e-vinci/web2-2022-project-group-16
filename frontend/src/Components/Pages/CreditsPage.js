import menuBtn from '../../img/menu.png';
import backBtn from '../../img/back.png';
import GetButtons from '../Router/GetButtons';
import rulesBtn from '../../img/rules.png';

const CreditsPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <header class="px-3 pt-3 d-flex justify-content-between align-items-center">
  <button data-uri="/" class="navigation-btn"><img id="rules-btn" class="ms-2" src="${backBtn}" alt="rules button"></button>
  <a href="#"><img id="rules-btn" class="ms-2" src="${menuBtn}" alt="rules button"></a>
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

export default CreditsPage;
