# Memory Card Game

A polished and responsive memory card game built with React and Vite. Test your memory by matching emoji pairs across multiple difficulty levels.

## Live Demo

```text
hhttps://memo-cd-game.vercel.app/
```

Replace the URL above with your deployed project link.

## Features

- Three difficulty levels:
  - Easy: 4 matching pairs
  - Medium: 8 matching pairs
  - Hard: 12 matching pairs
- Cards are shuffled when a new game starts
- Flip two cards to find matching pairs
- Matched cards remain visible
- Unmatched cards flip back automatically
- Move counter
- Game timer
- Best score tracking
- Best scores saved separately for each difficulty
- Best scores stored in localStorage
- Dark Mode and Light Mode
- Theme preference saved after refreshing the page
- Responsive card grid
- Mobile-friendly touch controls
- Responsive layouts for phones, tablets, and laptops
- Smooth card-flip animations
- Restart Game button
- Congratulations message after completing a game
- Accessible focus states for buttons
- No backend or database required

## Built With

- React
- Vite
- JavaScript
- CSS
- CSS Grid
- localStorage
- Emoji icons

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/paingzinyemaung/memory-card-game.git
```

Move into the project directory:

```bash
cd memory-card-game
```

Install the project dependencies:

```bash
npm install
```

### Run the Development Server

Start the local development server:

```bash
npm run dev
```

Open the URL shown in the terminal. It is usually:

```text
http://localhost:5173
```

## How to Play

1. Select a difficulty level.
2. Click a card to reveal its emoji.
3. Click a second card to reveal another emoji.
4. If both cards match, they remain visible.
5. If they do not match, they flip back automatically.
6. Continue until every pair has been matched.
7. Try to complete the game with fewer moves and a faster time.
8. Use the Restart Game button to start again.

## Difficulty Levels

### Easy

- 4 matching pairs
- 8 cards total
- Compact layout for smaller screens

### Medium

- 8 matching pairs
- 16 cards total
- Balanced grid layout

### Hard

- 12 matching pairs
- 24 cards total
- More cards and a larger responsive grid

## Scoring

The game tracks:

- Number of moves
- Elapsed time
- Best score

A best score is saved when you complete a difficulty level with a better result than your previous score. Scores are stored separately for Easy, Medium, and Hard modes.

The saved score uses browser `localStorage`, so it remains available after refreshing the page.

## Theme Modes

The game includes:

- Light Mode
- Dark Mode

The selected theme is saved in the browser and restored automatically when the game is opened again.

## Responsive Design

The interface is designed to work across different screen sizes:

- Mobile phones
- Tablets
- Laptops
- Desktop monitors

The card grid adjusts automatically to keep cards aligned, square, and comfortable to tap. The layout also prevents unnecessary horizontal scrolling and avoids overlapping cards.

## Project Structure

```text
memory-card-game/
├── public/
│   └── vite.svg              # Public static asset
├── src/
│   ├── App.jsx               # Game logic and main user interface
│   ├── index.css             # Global styles, themes, grid, and animations
│   └── main.jsx              # React application entry point
├── .gitignore                # Files excluded from Git
├── index.html                # Main HTML entry file
├── package.json              # Project scripts and dependencies
├── package-lock.json         # Locked dependency versions
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

## Available Scripts

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run the linter

```bash
npm run lint
```

## Testing Checklist

Before publishing the app, test the following:

- [ ] Easy mode starts correctly
- [ ] Medium mode starts correctly
- [ ] Hard mode starts correctly
- [ ] Cards are shuffled after restarting
- [ ] Matching cards remain visible
- [ ] Non-matching cards flip back
- [ ] Moves are counted correctly
- [ ] Timer starts when the first card is clicked
- [ ] Timer stops when the game is completed
- [ ] Best score is saved correctly
- [ ] Best score is different for each difficulty
- [ ] Restart Game resets the board
- [ ] Light Mode works correctly
- [ ] Dark Mode works correctly
- [ ] Theme remains after refreshing the browser
- [ ] Cards do not overlap
- [ ] Easy layout works on mobile
- [ ] Medium layout works on mobile and desktop
- [ ] Hard layout works on mobile and desktop
- [ ] No horizontal scrolling appears
- [ ] Buttons are easy to tap on a phone
- [ ] The layout works on phone, tablet, and laptop screens

## Future Improvements

- Add sound effects
- Add multiple card themes
- Add a pause button
- Add a leaderboard
- Add player names
- Add additional difficulty levels
- Add keyboard-based card navigation
- Add a celebration animation when the player wins
- Add an option to reset saved best scores

## License

This project is open source and available under the MIT License.
