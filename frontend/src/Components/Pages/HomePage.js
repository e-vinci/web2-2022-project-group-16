import logo from '../../img/logo.png';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <nav></nav>
  <div id="game" class="d-flex justify-content-center align-items-center">
    <div id="main-menu">
      <img src="${logo}" alt="8bit danish logo">
    </div>
  </div>
  <footer></footer>`;
};

export default HomePage;
