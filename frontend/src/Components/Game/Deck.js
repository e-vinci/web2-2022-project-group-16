/* eslint-disable no-plusplus */
import Card from './Card';

class Deck {

    constructor() {
        const colors = ["spades", "diamonds", "hearts", "clubs"];
        this.game = [];
        let cmp = 0;
        for (let i = 0; i <= 3; i++) {
            for (let j = 1; j <= 13; j++) {
                this.game[cmp] = new Card(colors[i], j);
                cmp++;
            }
        }
    };


    shuffle() {
        this.game.sort(() => Math.random() - 0.5);
    };

    picksCards = (qty) => {

        const cardsTake = [];
        for (let i = 0; i < qty; i++) {
            const card = this.game.pop();
            cardsTake.push(card);
        }
        return cardsTake;
    };

};

export default Deck;