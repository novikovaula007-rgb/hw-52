import type {ICard} from '../types';

const rankToNumbers = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8,
    '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14, 'T': 10
};

class PokerHand {
    public myHand: ICard[];
    public numberRanks: number[];
    public countRanks: {[key: number]: number} = {};
    public countSuits: {[key: string]: number} = {};
    constructor(myHand: ICard[]) {
        this.myHand = myHand;
        this.numberRanks = this.myHand.map(card => {
            return rankToNumbers[card.rank];
        })

        this.numberRanks.forEach(rank => {
            if (this.countRanks[rank]) {
                this.countRanks[rank] ++;
            } else {
                this.countRanks[rank] = 1;
            }
        })

        this.myHand.forEach(card => {
            if (this.countSuits[card.suit]) {
                this.countSuits[card.suit] ++;
            } else {
                this.countSuits[card.suit] = 1;
            }
        })
    }

    getOutcome() {
        if (this.numberRanks.length !== 5) {
            throw new Error('A combination can only consist of 5 cards.');
        }

        const cardsDescending = this.numberRanks.sort((a, b) => b - a);
        const countRanksDescending = Object.values(this.countRanks).sort((a, b) => b - a);

        let isCardsOneSuit = true;
        if (!Object.values(this.countSuits).includes(5)) {
            isCardsOneSuit = false;
        }

        let isCardsInOrder = true;

        for (let i = 0; i < 4; i++) {
            if (cardsDescending[i] !== cardsDescending[i+1] + 1) {
                isCardsInOrder = false;
                break;
            }
        }

        if (isCardsInOrder && isCardsOneSuit) {
            if (cardsDescending[0] == 14) {
                return 'Royal flush';
            } else {
                return 'Straight flush';
            }
        }

        if (countRanksDescending[0] == 4) {
            return 'Four of a kind';
        }

        if (countRanksDescending[0] == 3 && countRanksDescending[1] == 2) {
            return 'Full house';
        }

        if (isCardsOneSuit) {
            return 'Flush';
        }

        let IsStraight = false;
        if (cardsDescending[0] == 14) {
            if ([5, 4, 3, 2].every(rank => cardsDescending.includes(rank))) {
                IsStraight = true;
            }
        }

        if (IsStraight || isCardsInOrder) {
            return 'Straight';
        }

        if (countRanksDescending[0] == 3) {
            return 'Three of a kind';
        }

        if (countRanksDescending[0] == 2 && countRanksDescending[1] == 2) {
            return 'Two pairs';
        }

        if (countRanksDescending[0] == 2) {
            return 'One pair';
        }

        return 'High card';
    }
}

export default PokerHand;