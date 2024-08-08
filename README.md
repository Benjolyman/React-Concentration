# Concentration Game

The Concentration game, also known as Memory or Matching Pairs, is a simple card-matching game where the objective is to find all the pairs of matching cards. The game is designed to test and improve your memory skills by challenging you to remember the locations of cards and find all the matching pairs with the fewest number of attempts.

![alt text](image.png)

## How the Game Works

- The game starts with a grid of cards laid out face down.
- Each card has a matching pair hidden somewhere on the board.
- You can flip two cards at a time by clicking on them.
- If the two cards match, they remain face up.
- If they don’t match, they flip back over after a brief delay.
- The game continues until all pairs have been matched.
- The game tracks the number of pairs you’ve matched, and the goal is to match all pairs in the fewest number of moves.

## Installation

1. Clone this repository: 

```
git clone https://github.com/Benjolyman/React-Concentration
```
2. Install dependencies: 

```
npm i
```

## Usage

1. Start server 

```
npm run dev
```

2. access the application, typically through 

```
 http://localhost:5173
```

## Technologies/Frameworks Used

    React: A JavaScript library for building user interfaces.
    JavaScript: The programming language used to build the game logic.
    CSS: For styling the application and creating a responsive layout.
    Node.js: JavaScript runtime environment to run the project.
    npm: Node package manager used to manage project dependencies.

## Features

    Interactive UI: Flip cards to reveal their values and try to find matching pairs.
    Randomized Card Layout: Cards are shuffled each time the game is initialized, ensuring a new challenge every time you play.
    Progress Tracking: The game keeps track of how many pairs you've matched.
    Instruction Modal: A modal explaining how to play the game is accessible within the game.
    Restart Game: Ability to restart the game at any time.

## Future Features

    Score Tracking: Implement a scoring system based on the number of moves or time taken to complete the game.
    Difficulty Levels: Offer multiple difficulty levels with varying numbers of cards and grid sizes.
    Timer: Include a timer to challenge players to complete the game as quickly as possible.