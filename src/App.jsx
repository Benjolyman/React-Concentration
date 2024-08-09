import React, { useState, useEffect } from "react";
import Board from "./components/Board";

const App = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        const deck = Array.from({ length: 16 }, (_, i) => ({
            id: i, 
            value: (i % 8) + 1, 
            isFlipped: false, 
        })).sort(() => Math.random() - 0.5); 

        setCards(deck);

        setFlippedCards([]);

        setMatchedPairs(0);
    };

    const handleCardClick = (id) => {
        if (flippedCards.includes(id)) {
            return;
        }
    
        const newFlippedCards = [...flippedCards, id];
    
        const newCards = cards.map((card) =>
            card.id === id ? { ...card, isFlipped: true } : card
        );
    
        setCards(newCards);
    
        if (newFlippedCards.length === 2) {
            const [firstId, secondId] = newFlippedCards;
            
            const firstCard = newCards.find((card) => card.id === firstId);
            const secondCard = newCards.find((card) => card.id === secondId);
    
            if (firstCard.value === secondCard.value) {
                setMatchedPairs((prev) => prev + 1);
                setFlippedCards([]);
            } else {
                setTimeout(() => {
                    setCards((prevCards) =>
                        prevCards.map((card) =>
                            card.id === firstId || card.id === secondId
                                ? { ...card, isFlipped: false }
                                : card
                        )
                    );
                    setFlippedCards([]);
                }, 1000); 
            }
        } else {
           
            setFlippedCards(newFlippedCards);
        }
    };
    

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <div className="game">
            <h1>Concentration</h1>
            <Board cards={cards} onCardClick={handleCardClick} />
            <div>
                <button onClick={initializeGame}>Restart Game</button>
            </div>
            <div>Matched Pairs: {matchedPairs}</div>
            <div>
                <button onClick={toggleModal}>How to Play</button>
            </div>
            <div className={`modal-backdrop ${isModalVisible ? "show" : ""}`}>
                <div className="modal-content">
                    <span className="close-button" onClick={toggleModal}>
                        &times;
                    </span>
                    <h2>How to Play</h2>
                    <div className="instruction-box">
                        <p>
                            Click on a card to flip it over and reveal its
                            value. Then click on another card to find a matching
                            pair. If the cards match, they will stay flipped. If
                            not, they will flip back over. The game ends when
                            all pairs are matched. Have fun!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
