import Card from './Card.ts'

class CardDesk {
    ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    suits = ['diams', 'hearts', 'clubs', 'spades']
    public cardDesk: Card[] = [];

    constructor() {
        // логика генерации колоды
        this.cardDesk = [new Card('2', 'hearts')] //52
    }

    getCard(): Card {

    }

    getCards(howMany: number=5): Card[] {
        // for + getCard (howmany)
    }
}

export default CardDesk;