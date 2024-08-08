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
        // Create a deck of 16 cards (8 pairs). Each card has a unique id and a value between 1 and 8.
        const deck = Array.from({ length: 16 }, (_, i) => ({
            id: i, // Assign a unique id to each card, using the index (i) as the id.
            value: (i % 8) + 1, // Assign values 1 to 8, repeating twice.
            isFlipped: false, // Initialize all cards with isFlipped set to false (not flipped).
        })).sort(() => Math.random() - 0.5); // Shuffle the deck randomly.

        // Update the state with the shuffled deck of cards.
        setCards(deck);

        // Reset the state for flipped cards to an empty array (no cards are flipped at the start).
        setFlippedCards([]);

        // Reset the matched pairs count to 0 (no pairs are matched at the start).
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
