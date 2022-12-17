/* eslint-disable no-plusplus */
import Deck from './Deck';
// eslint-disable-next-line import/no-cycle
import Player from './Player';
import Card from './Card';

class Danish {

    constructor(nbrPlayer) {
        this.deck = new Deck();
        for (let i = 0; i < 3; i++) {
        this.deck.shuffle();
        }
        this.discardPile = [] ;
        this.discardPile.push(new Card(null, null));
        this.tablePlayerGame = [];
        this.indexOfActualPlayer = 0;
        for (let i = 0; i < nbrPlayer; i++) {
            const player = new Player(i, "test", this.deck.picksCards(3), this.deck.picksCards(3), this.deck.picksCards(3));
            this.tablePlayerGame.push(player);
        };

    };


    nextPlayer(){
        if(this.indexOfActualPlayer+1 < this.tablePlayerGame.length){

            this.indexOfActualPlayer++;
        }else{
            this.indexOfActualPlayer=0;
        }
    };

    getNewCard(){
        if(this.tablePlayerGame[this.indexOfActualPlayer].hand.length < 3){
            if(this.deck.length !== 1){
                const card = this.deck.picksCards(1)[0];
                if(card !== undefined){
                    this.tablePlayerGame[this.indexOfActualPlayer].hand.push(card);
                }
            
            }
        }
    }

    cardsPlayable(cardsValue) {
        if (cardsValue.value === 3){
            return this.cardsPlayableBis(cardsValue,-1);
        }
        const playbleCards = {
            null: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            1: [1, 2, 3],
            2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            3: [],
            4: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3],
            5: [5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3],
            6: [6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3],
            7: [4, 5, 6, 7, 2, 3],
            8: [8, 9, 10, 11, 12, 13, 1, 2, 3],
            9: [9, 10, 11, 12, 13, 1, 2, 3],
            10: [],
            11: [11, 12, 13, 1, 2, 3],
            12: [12, 13, 1, 2, 3],
            13: [13, 1, 2, 3]
        };
        return playbleCards[cardsValue.value];
    };
    

    cardsPlayableBis(cardsValue, numPile) {
        if (cardsValue.value === 3){
            return this.cardsPlayableBis(this.discardPile[this.discardPile.length + numPile], numPile -1);
        }
        const playbleCards = {
            null: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            1: [1, 2, 3],
            2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            3: [],
            4: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3],
            5: [5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3],
            6: [6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3],
            7: [4, 5, 6, 7, 2, 3],
            8: [8, 9, 10, 11, 12, 13, 1, 2, 3],
            9: [9, 10, 11, 12, 13, 1, 2, 3],
            10: [10, 11, 12, 13, 2, 3],
            11: [11, 12, 13, 1, 2, 3],
            12: [12, 13, 1, 2, 3],
            13: [13, 1, 2, 3]
        };
        return playbleCards[cardsValue.value];
    };
};

export default Danish;