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

  const rule = document.querySelector('div#rules');
  const modal = document.getElementById("myModal");
  rule.addEventListener("click", (event)=> {
    event.preventDefault();
    modal.style.display = "flex";
    console.log("clicckkkkk")
  });
  const closeModal = document.querySelector("div#myModal .close");
  closeModal.onclick = function() {
    modal.style.display = "none";
  }
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
  
//   function listClassement (classement){
//     let tableclassement = '';
//     let position = 0;
//     classement.forEach((player) => {
//         const victoire = player.scoreWin + player.scoreLose;
//       tableclassement += `<tr>
//         <td>${position}. </td>
//         <td>${player.username}</td>
//         <td>${player.scoreWin}</td>
//         <td> ${victoire}</td>
//       </tr>`;
//       position += 1;
//     });
//     return tableclassement
//   }
function listClassement (classement){
         let tableclassement = '';
        classement.forEach((player) => {
            const victoire = player.scoreWin + player.scoreLose;
          tableclassement += `
             <li class ="collection-item list-group-item-warning"> pseudo : ${player.username}, nombre de victoire : ${player.scoreWin}, nombre de partie gagné : ${victoire} </li>
             
          `;
     });
        return tableclassement
    }
  
 
//   function addplayerClassement(tableLines) {
//     const classement = `
    
//       <table class="table-dark ">
//       <tr>
//       <th><p>Position</p></th>
//        <th><p>Pseudo</p></th>
//       <th><p>nombre Partie Gagné</p></th>
//        <th><p>total victoire</p></th>
//      </tr>
//         ${tableLines}    
//       </table>
//     </div>
//     `;
//     return classement;
//   }
function addplayerClassement(tableLines) {
    const classement = `
    
    <ol class="collection white">
        ${tableLines}    
    </ol>
    `;
    return classement;
  }

export default ScorePage;