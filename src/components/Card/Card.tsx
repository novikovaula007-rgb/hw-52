const ranksArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']


const Card = ({rank, suit}) => {
    const suitsObject = {
        'diams': '♦️',
        'hearts': '♥️',
        'clubs': '♣️',
        'spades': '♠️',
    }
    return (
        <span className="card rank-k diams">
            <span className="rank">{rank}</span>
            <span className="suit">{suitsObject[{suit}]}</span>
        </span>
    );
};

export default Card;