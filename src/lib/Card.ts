import type {typeSuit, typeRank} from "../types";

export default class Card {
    public rank: typeRank;
    public suit: typeSuit;
    constructor(rank: typeRank, suit: typeSuit) {
        this.rank = rank;
        this.suit = suit;
    }
}