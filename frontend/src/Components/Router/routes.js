import HomePage from '../Pages/HomePage';
import NewGamePage from '../Pages/NewGamePage';
import Logout from '../Logout/Logout';
import LoginPage from '../Pages/LoginPage';
import CreditsPage from '../Pages/CreditsPage';
import RegisterPage from '../Pages/RegisterPage';
import GamePage from '../Pages/GamePage';

const routes = {
  '/': HomePage,
  '/login': LoginPage,
  '/credits': CreditsPage,
  '/register': RegisterPage,
  '/logout': Logout,
  '/new-game': NewGamePage,
  '/play': GamePage
};

export default routes;
