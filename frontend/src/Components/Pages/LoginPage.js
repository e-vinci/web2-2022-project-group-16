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
  <div id="game" class="d-flex justify-content-center align-items-center">
    <div id="main-menu d-flex">
    <div class="row">
        <div class="col-12 text-center"><h2>Log In</h2></div>
        <form>
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
  <footer class="px-3 pb-3 d-flex justify-content-end align-items-center"></footer>`;

  GetButtons();
};

// const LoginPage = () => {
//   clearPage();
//   renderPageTitle('Login');
//   renderRegisterForm();
// };

// function renderRegisterForm() {
//   const main = document.querySelector('main');

//   form.className = 'p-5';
//   const username = document.createElement('input');
//   username.type = 'text';
//   username.id = 'username';
//   username.placeholder = 'username';
//   username.required = true;
//   username.className = 'form-control mb-3';
//   const password = document.createElement('input');
//   password.type = 'password';
//   password.id = 'password';
//   password.required = true;
//   password.placeholder = 'password';
//   password.className = 'form-control mb-3';
//   const submit = document.createElement('input');
//   submit.value = 'Login';
//   submit.type = 'submit';
//   submit.className = 'btn btn-info';

//   const formCheckWrapper = document.createElement('div');
//   formCheckWrapper.className = 'mb-3 form-check';

//   const rememberme = document.createElement('input');
//   rememberme.type = 'checkbox';
//   rememberme.className = 'form-check-input';
//   rememberme.id = 'rememberme';
//   const remembered = getRememberMe();
//   rememberme.checked = remembered;
//   rememberme.addEventListener('click', onCheckboxClicked);

//   const checkLabel = document.createElement('label');
//   checkLabel.htmlFor = 'rememberme';
//   checkLabel.className = 'form-check-label';
//   checkLabel.textContent = 'Remember me';

//   formCheckWrapper.appendChild(rememberme);
//   formCheckWrapper.appendChild(checkLabel);

//   form.appendChild(username);
//   form.appendChild(password);
//   form.appendChild(formCheckWrapper);
//   form.appendChild(submit);
//   main.appendChild(form);

// }

// function onCheckboxClicked(e) {
//   setRememberMe(e.target.checked);
// }

const form = document.createElement('form');
form.addEventListener('submit', onLogin);
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

  // console.log('Authenticated user : ', authenticatedUser);

  setAuthenticatedUser(authenticatedUser);  

  Navigate('/');
}

export default LoginPage;
