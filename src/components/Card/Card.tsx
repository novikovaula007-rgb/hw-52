import type {ICard} from "../../types";

const Card: React.FC<ICard> = ({rank, suit}) => {
    const suitsObject = {
        diams: '♦',
        hearts: '♥',
        clubs: '♣',
        spades: '♠',
    }
    return (
        <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suitsObject[suit]}</span>
        </span>
    );
};

export default Card;