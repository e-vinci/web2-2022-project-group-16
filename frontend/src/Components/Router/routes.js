import HomePage from '../Pages/HomePage';
import Logout from '../Logout/Logout';
import LoginPage from '../Pages/LoginPage';
import CreditsPage from '../Pages/CreditsPage';
import RegisterPage from '../Pages/RegisterPage';
import NewGamePage from '../Pages/NewGamePage';
import GamePage from '../Pages/GameIa';

const routes = {
  '/': HomePage,
  '/login': LoginPage,
  '/credits': CreditsPage,
  '/register': RegisterPage,
  '/logout': Logout,
  '/new-game': NewGamePage,
  '/game-ia': GamePage
};

export default routes;
