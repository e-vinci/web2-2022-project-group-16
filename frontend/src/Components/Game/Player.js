// eslint-disable-next-line import/no-cycle
import Danish from './Danish';

class Player{

    constructor(id, name, hand, visibleCards, hiddenCards) {
        this.id = id;
        this.name = name;
        this.hand = hand;
        this.visibleCards = visibleCards;
        this.hiddenCards = hiddenCards;
        this.hasWon = false;
    };

    playbleCardsInHands(discardPile) {
        const playbleCards = Danish.cardsPlayable(discardPile[0].value);
        const cardsPlayableInHands = [];
        this.tableHands.forEach(card => {
            if (playbleCards.contains(card.value)) {
                cardsPlayableInHands.push(card);
            }
        });
        return cardsPlayableInHands;
    }

};

export default Player;