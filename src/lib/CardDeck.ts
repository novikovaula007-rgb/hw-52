import type {typeSuit, typeRank} from "../types";
import Card from "./Card.ts"

class CardDeck {
    ranks: typeRank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    suits: typeSuit[] = ['diams', 'hearts', 'clubs', 'spades']
    public cardDeck: Card[] = [];

    constructor() {
        for (const rank of this.ranks) {
            for (const suit of this.suits) {
                this.cardDeck.push(new Card(rank, suit));
            }
        }
    }

    getCard(): Card {
        const randomCardIndex = Math.floor(Math.random() * this.cardDeck.length);
        const randomCard = this.cardDeck[randomCardIndex];
        this.cardDeck.splice(randomCardIndex, 1);
        return randomCard;
    }

    getCards(howMany: number = 5): Card[] {
        const randomCards: Card[] = [];

        for (let i = 0; i < howMany; i++) {
            if (this.cardDeck.length === 0) {
                console.log(`Колода пуста.`);
                break;
            }
            randomCards.push(this.getCard());
        }

        return randomCards;
    }
}

export default CardDeck;