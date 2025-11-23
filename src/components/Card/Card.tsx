type typeSuit = 'diams' | 'hearts' | 'clubs' | 'spades'
type typeRank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'

interface Props {
    rank: typeRank;
    suit: typeSuit;
}

const Card: React.FC<Props> = ({rank, suit}) => {
    const suitsObject = {
        diams: '♦️',
        hearts: '♥️',
        clubs: '♣️',
        spades: '♠️',
    }
    return (
        <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suitsObject[suit]}</span>
        </span>
    );
};

export default Card;