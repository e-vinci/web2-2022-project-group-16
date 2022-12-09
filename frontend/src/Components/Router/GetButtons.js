/**
 * Navigate to a URI by triggering the popstate event in order for the router to deal with
 * a change of browser history.
 * NB : this solution is to avoid circular depedencies : if Navigate() had to import, directly or
 * indirectly, the pages, then there would be a circular reference because the router
 * has to import all the pages to render them.
 */
 import Navigate from './Navigate';

 const GetButtons = () => {
    const buttons = document.querySelectorAll('button');
    Array.from(buttons).forEach((elem) => {
      elem.addEventListener('mousedown', () => {
        const audio = document.getElementsByTagName("audio")[0];
        audio.play();
      })
      elem.addEventListener('click', () => {
        const uri = elem?.dataset?.uri;
        Navigate(uri);
      })
    })
 };
 
 export default GetButtons;
 