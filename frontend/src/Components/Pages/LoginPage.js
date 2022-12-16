import { setAuthenticatedUser } from '../../utils/auths';
// import { clearPage, renderPageTitle } from '../../utils/render';
import Navigate from '../Router/Navigate';
import backBtn from '../../img/back.png';
import GetButtons from '../Router/GetButtons';
import Button from '../Buttons/Button';

const LoginPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <header class="px-3 pt-3 d-flex justify-content-between align-items-center">
  <div id="back">
  ${Button('login page','/',backBtn)}
  </div>
  </header>
  <div class="d-flex justify-content-center align-items-center">
    <div id="main-menu d-flex">
    <div class="row">
        <div class="col-12 text-center"><h2>Log In</h2></div>
        <form method="POST">
        <div class="form-group pb-2">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="username" aria-describedby="emailHelp">
        </div>
        <div class="form-group pb-2">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  </div>
  <footer class="px-3 pb-3 d-flex justify-content-between align-items-center"></footer>`;

  // eslint-disable-next-line no-use-before-define
  createBodyLogin();

  GetButtons();
};

const createBodyLogin = () => {
const main = document.querySelector('main');
const form = document.createElement('form');
const x = document.createElement("input");
const labelx = document.createElement("label");
x.setAttribute("type", "text");
labelx.innerHTML = "Entrez votre pseudo";
x.className = "email-input";
const y = document.createElement("input");
const labely = document.createElement("label");
y.setAttribute("type", "password");
labely.innerHTML = "Entrez votre mot de passe";
y.className = "password-input";

const z = document.createElement("input");
z.setAttribute("type", "submit");
z.className = "btn-submit";

main.appendChild(form)
form.appendChild(labelx)
form.appendChild(x)
form.appendChild(labely)
form.appendChild(y)
form.appendChild(z)

console.log(form);
form.addEventListener('submit', onLogin);

}

async function onLogin(e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`${process.env.API_BASE_URL}/auths/login`, options);

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const authenticatedUser = await response.json();

  console.log('Authenticated user : ', authenticatedUser);

  setAuthenticatedUser(authenticatedUser);  

  Navigate('/');
}

export default LoginPage;
