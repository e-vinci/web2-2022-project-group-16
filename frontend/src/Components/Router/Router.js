import { removePathPrefix } from '../../utils/path-prefix';
import routes from './routes';
import Footer from '../Footer/Footer';

const Router = (audio) => {
  onFrontendLoad(audio);
  onHistoryChange(audio);
};


function onHistoryChange(audio) {
  window.addEventListener('popstate', () => {
    const uri = removePathPrefix(window.location.pathname);
    const componentToRender = routes[uri];
    componentToRender();
    Footer(audio);
  });
}

function onFrontendLoad(audio) {
  window.addEventListener('load', () => {
    const uri = removePathPrefix(window.location.pathname);
    const componentToRender = routes[uri];
    if (!componentToRender) throw Error(`The ${uri} ressource does not exist.`);

    componentToRender();
    Footer(audio);
  });
}

export default Router;
