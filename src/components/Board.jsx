import Card from './Card';
import '../App.css';

const Board = ({ cards, onCardClick }) => {
    return (
        <div className="board">
            {cards.map((card) => (
                <Card 
                    key={card.id}
                    id={card.id}
                    value={card.value}
                    isFlipped={card.isFlipped}
                    onClick={onCardClick}
                />
            ))}
        </div>
    );
};

export default Board;