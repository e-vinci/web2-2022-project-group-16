import HomePage from '../Pages/HomePage';
import FirstMenu from '../Pages/FirstMenu';
import Logout from '../Logout/Logout';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

const routes = {
  '/': HomePage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/logout': Logout,
  '/FirstMenu': FirstMenu
};

export default routes;
