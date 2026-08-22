# Memory Card Game

A polished and beginner-friendly memory card game built with React and Vite. Flip the cards, find all matching emoji pairs, and complete the game using as few moves as possible.

## Features

- 4×4 card grid with 8 matching pairs
- Cards are shuffled when a new game starts
- Flip two cards to find matching pairs
- Matched cards remain visible
- Unmatched cards automatically flip back
- Move counter
- Congratulations message after completing the game
- Restart Game button
- Smooth card-flip animations
- Responsive layout for different screen sizes
- Clean gradient-based user interface

## Built With

- React
- Vite
- JavaScript
- CSS
- Emoji icons

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your computer.

### Installation

Clone the repository:

```bash
git clone https://github.com/paingzinyemaung/memory-card-game-react.git
```

Go to the project directory:

```bash
cd memory-card-game-react
```

Install the dependencies:

```bash
npm install
```

### Run the App

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal. It is usually:

```text
http://localhost:5173
```

## How to Play

1. Click any card to reveal its emoji.
2. Click a second card to reveal another emoji.
3. If the two cards match, they remain visible.
4. If they do not match, both cards flip back.
5. Continue until all pairs are matched.
6. Try to complete the game in as few moves as possible.

## Project Structure

```text
memory-card-game/
├── public/
│   └── vite.svg              # Public static asset
├── src/
│   ├── App.jsx               # Main game logic and user interface
│   ├── index.css             # Global styles and card animations
│   └── main.jsx              # React application entry point
├── .gitignore                # Files excluded from Git
├── index.html                # Main HTML entry file
├── package.json              # Project scripts and dependencies
├── package-lock.json         # Locked dependency versions
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

## Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Future Improvements

- Add a timer
- Add difficulty levels
- Save the best score with localStorage
- Add sound effects
- Add different card themes
- Add a dark mode

## Author

Created as a beginner-friendly React project to practice components, state management, event handling, and responsive CSS.
