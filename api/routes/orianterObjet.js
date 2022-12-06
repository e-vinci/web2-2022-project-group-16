class Cards {

    constructor(color, value) {
        this.color = color;
        this.value = value;
    };
};

class Player {

    constructor(id_player, pseudo, tableCards, table3Cards, table3CardsHidden) {
        this.idPlayer = id_player;
        this.pseudoPlayer = pseudo;
        this.tableHands = tableCards;
        this.table3CardsVisiblePlayer = table3Cards;
        this.table3carteHiddenPlayer = table3CardsHidden;
    };

    playbleCardsInHands(discardPile) {
        let playbleCards = cardsPlayable(discardPile[0].value);
        let cardsPlayableInHands = [];
        this.tableHands.forEach(card => {
            if (playbleCards.contains(card.value)) {
                cardsPlayableInHands.push(card);
            }
        });
        return cardsPlayableInHands;
    }

};

class Deck {

    constructor() {
        let colors = ["pique", "carreau", "coeur", "trefle"];
        this.game = [];
        let cmp = 0;
        for (var i = 0; i <= 3; i++) {
            for (var j = 1; j <= 13; j++) {
                this.game[cmp] = new Cards(colors[i], j);
                cmp++;
            }
        }
    };


    shuffle() {
        console.log("sort");
        this.game.sort(() => Math.random() - 0.5);
    };

    picksCards = (qty) => {
        console.log("rentrer");
        console.log(this.game.length);

        let cardsTake = [];
        for (let i = 0; i < qty; i++) {
            let card = this.game.pop();
            cardsTake.push(card);
        }/*
        for (let i = 0; i < this.game.length; i++) {
            this.game[i] = this.game[i + qty];
        }
        this.game.length = this.game.length - qty;
        */
       // console.log(cardsTake);
       console.log(cardsTake);
       console.log(this.game.length);
       console.log("sorti");
        return cardsTake;
    };

    cardsPlayable(cardsValue) {
        playbleCards = {
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
        return playbleCards[cardsValue];
    };
};

class Danish {

    constructor(nbrPlayer) {
        this.deck = new Deck();
        for (let i = 0; i < 3; i++) {
        this.deck.shuffle();
        }
        this.discardPile = new Cards(null, 2);
        this.tablePlayerGame = [];
        this.indexOfActualPlayer = 0;
        for (let i = 0; i < nbrPlayer; i++) {
            let player = new Player(i, "test", this.deck.picksCards(3), this.deck.picksCards(3), this.deck.picksCards(3));
            this.tablePlayerGame.push(player);
        };
        
    };
};

module.exports = { Cards, Danish, Deck, Player }
