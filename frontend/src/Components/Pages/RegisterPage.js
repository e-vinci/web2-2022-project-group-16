import { setAuthenticatedUser } from '../../utils/auths';
import Navigate from '../Router/Navigate';
import backBtn from '../../img/back.png';
import Button from '../Buttons/Button';
import GetButtons from '../Router/GetButtons';

const RegisterPage = () => {
  // eslint-disable-next-line no-const-assign
  const main = document.querySelector('main');
  main.innerHTML = `
  <header class="px-3 pt-3 d-flex justify-content-between align-items-center">
  <div id="back">
  ${Button('login page','/',backBtn)}
  </div>
  </header>
  <div id="game" class="d-flex justify-content-center align-items-center">
  <div>
    <div id="main-menu d-flex">
    <div class="row">
        <div class="col-12 text-center"><h2>Register account</h2></div></div>
      <button id="register-btn" data-uri="/login" class="mt-3">Already have an account? Log In.</button>
    </div>
  </div>
  </div>
  <footer class="px-3 pb-3 d-flex justify-content-between align-items-center"></footer>`;
  renderRegisterForm();

  GetButtons();
};

function renderRegisterForm() {
  const Realmain = document.querySelector('main');
  const main = document.querySelector('div.row');
  const form = document.createElement('form');
  const x = document.createElement("input");
  const labelx = document.createElement("label");
  x.setAttribute("type", "text");
  x.setAttribute('id','username');
  labelx.innerHTML = "Username";
  x.className = "username-input";
  const y = document.createElement("input");
  const labely = document.createElement("label");
  y.setAttribute("type", "password");
  y.setAttribute('id','password');
  labely.innerHTML = "Password";
  y.className = "password-input";
  form.className = "form-danish";
  Realmain.className = "form-page";
  
  const z = document.createElement("input");
  z.setAttribute("type", "submit");
  z.className = "btn-submit";
  z.value = "Register"
  
  main.appendChild(form)
  form.appendChild(labelx)
  form.appendChild(x)
  form.appendChild(labely)
  form.appendChild(y)
  form.appendChild(z)
  form.addEventListener('submit', onRegister);
}

async function onRegister(e) {
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
  const response = await fetch(`${process.env.API_BASE_URL}/auths/register`, options);
  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  const authenticatedUser = await response.json();
  setAuthenticatedUser(authenticatedUser);
  Navigate('/');
}

export default RegisterPage;
