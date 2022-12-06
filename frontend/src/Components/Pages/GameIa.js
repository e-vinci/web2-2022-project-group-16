import menuBtn from '../../img/menu.png';
import backBtn from '../../img/back.png';
import GetButtons from '../Router/GetButtons';
import rulesBtn from '../../img/rules.png';
import GetCard from '../../utils/front-script';

const translateCard = (num) => {

  const arrayTranslate = ["card","ace","two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];

  return arrayTranslate[num];

}

const CreditsPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <header class="px-3 pt-3 d-flex justify-content-between align-items-center">
  <button data-uri="/" class="navigation-btn"><img id="rules-btn" class="ms-2" src="${backBtn}" alt="rules button"></button>
  <a href="#"><img id="rules-btn" class="ms-2" src="${menuBtn}" alt="rules button"></a>
  </header>
  <div id="game" class="">

    <div class="card-user">
      <div class="card-hand">
        <div class="card-content three">
          <div class="cards spades ${translateCard(3)}" data-number="three" data-type="spades" ></div>
        </div>
        <div class="card-content nine">
          <div class="cards clubs nine"></div>
        </div>
        <div class="card-content two">
          <div class="cards diamonds two"></div>
        </div>
        <div class="card-content king">
          <div class="cards hearts king"></div>
        </div>
        <div class="card-content jack">
          <div class="cards clubs jack"></div>
        </div>
        <div class="card-content three">
          <div class="cards clubs three"></div>
        </div>
      </div>

      <div class="card-back">
        <div class="card-content">
          <div class="cards"></div>
        </div>
        <div class="card-content">
          <div class="cards"></div>
        </div>
        <div class="card-content">
          <div class="cards"></div>
        </div>
      </div>

      <div class="card-visible">
        <div class="card-content king">
          <div class="cards hearts king"></div>
        </div>
        <div class="card-content jack">
          <div class="cards clubs jack"></div>
        </div>
        <div class="card-content three">
          <div class="cards clubs three"></div>
        </div>
      </div>

    </div>

  </div>
  <footer class="px-3 pb-3 d-flex justify-content-end align-items-center"><div id="rules"><a href="#">rules</a><img id="rules-btn" class="ms-2" src="${rulesBtn}" alt="rules button"></div></footer>`;

  GetButtons();
  GetCard();
};

export default CreditsPage;
