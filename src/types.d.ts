export type typeSuit = 'diams' | 'hearts' | 'clubs' | 'spades'
export type typeRank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'

export interface ICard {
    rank: typeRank;
    suit: typeSuit;
}