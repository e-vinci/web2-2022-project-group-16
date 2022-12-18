import menuBtn from '../../img/menu.png';
import backBtn from '../../img/back.png';
import GetButtons from '../Router/GetButtons';
import Button from '../Buttons/Button';

const ScorePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <header class="px-3 pt-3 d-flex justify-content-between align-items-center">
  ${Button('login page','/',backBtn)}
  ${Button('login page','/login',menuBtn)}
  </header>
  <div id="game" class="d-flex justify-content-center align-items-center">
  </div>
  <footer class="px-3 pb-3 d-flex justify-content-between align-items-center"><div id="rules"></div></footer>`;
  GetButtons();
  list();
};

async function list(){
    const response = await fetch(`${process.env.API_BASE_URL}/score/listOrder`);
    const responseFinal = await response.json();
    getClassement(responseFinal)
  
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  }
  
  function getClassement(responsePlayer) {
    const playerLine = listClassement(responsePlayer);
    const playerClassement = addplayerClassement(playerLine);
  
    
    const main = document.querySelector('div#game');
    main.innerHTML += playerClassement
    return playerClassement;
  }

function listClassement (classement){
         let tableclassement = '';
        classement.forEach((player) => {
            const totalGames = player.scoreWin + player.scoreLose;
          tableclassement += `
          <tr>
          <td>${player.username}</td>
          <td>${totalGames}</td>
          <td>${player.scoreWin}</td>
        </tr>`;
     });
        return tableclassement
    }
function addplayerClassement(tableLines) {
    const classement = `
    <table>
      <tr>
        <th>Username</th>
        <th>Games Played</th>
        <th>Victories</th>
      </tr>
      ${tableLines}
  </table>
    `;
    return classement;
  }

export default ScorePage;