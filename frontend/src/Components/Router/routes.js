import HomePage from '../Pages/HomePage';
import FirstMenu from '../Pages/FirstMenu';
import Logout from '../Logout/Logout';
import LoginPage from '../Pages/LoginPage';
import CreditsPage from '../Pages/CreditsPage';
import RegisterPage from '../Pages/RegisterPage';

const routes = {
  '/': HomePage,
  '/login': LoginPage,
  '/credits': CreditsPage,
  '/register': RegisterPage,
  '/logout': Logout,
  '/newGame': FirstMenu
};

export default routes;
