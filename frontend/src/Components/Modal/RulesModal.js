const RulesModal = () => {
    document.querySelector('footer').innerHTML += `<div id="modal" class="modal" tabindex="-1" role="dialog" style="display:none;z-index:0">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" id="close-modal" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h3>Game Presentation</h3>
          <p>This card game, which is a variation of the traditional battle, is played with 2 or more players with 1 deck of 52 cards per 5 players. The game also includes "special" cards. The goal of the game is to be the first to get rid of all your cards.</p>
          <h3>Special cards</h3>
          <ol>
          <li>The 2s : They can be placed on any card. The next player must place a card higher than the 2.</li>
          <li>The 7 : When a player plays a 7, the next player must play a card less than or equal to the 7. If not, he/she collects the cards from the discard pile.</li>
          <li>The 8 : Eights cause the next player to take a turn. If a player lays down two 8s, the next two players pass their turn; three 8s, the next three players.</li>
          <li>The 10s : Ten's remove the discard pile from the game, with no return. The player who placed a 10 takes the hand again. He restarts the discard pile with the card (or cards) he wants.</li>
          </ol>
        </div>
      </div>
    </div>
  </div>`;
};

export default RulesModal;