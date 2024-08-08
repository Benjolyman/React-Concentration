import '../App.css';

const Card = ({ id, isFlipped, onClick, value }) => {
    return (
        <div className="card" onClick={() => onClick(id)}>
            {isFlipped ? value : "?"}
        </div>
    );
};

export default Card;
