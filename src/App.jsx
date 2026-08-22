import { useState } from 'react'

const EMOJIS = ['🐶', '🐱', '🦊', '🐼', '🦁', '🐸', '🐵', '🐷']

function shuffle(list) {
  const result = [...list]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function createDeck() {
  const cards = [...EMOJIS, ...EMOJIS].map((emoji, id) => ({
    id,
    emoji,
    flipped: false,
    matched: false,
  }))
  return shuffle(cards)
}

export default function App() {
  const [cards, setCards] = useState(createDeck)
  const [flipped, setFlipped] = useState([])
  const [moves, setMoves] = useState(0)
  const [lock, setLock] = useState(false)

  const hasWon = cards.every((card) => card.matched)

  function handleCardClick(index) {
    if (lock) return
    if (cards[index].flipped || cards[index].matched) return
    if (flipped.length === 2) return

    const nextFlipped = [...flipped, index]
    setCards((prev) =>
      prev.map((card, i) => (i === index ? { ...card, flipped: true } : card))
    )

    if (nextFlipped.length < 2) {
      setFlipped(nextFlipped)
      return
    }

    setMoves((prev) => prev + 1)
    setLock(true)

    const [first, second] = nextFlipped

    if (cards[first].emoji === cards[second].emoji) {
      setCards((prev) =>
        prev.map((card, i) =>
          i === first || i === second ? { ...card, matched: true } : card
        )
      )
      setFlipped([])
      setLock(false)
    } else {
      setTimeout(() => {
        setCards((prev) =>
          prev.map((card, i) =>
            i === first || i === second ? { ...card, flipped: false } : card
          )
        )
        setFlipped([])
        setLock(false)
      }, 800)
    }
  }

  function restart() {
    setCards(createDeck())
    setFlipped([])
    setMoves(0)
    setLock(false)
  }

  return (
    <div className="app">
      <h1>Memory Card Game</h1>
      <p className="moves">Moves: {moves}</p>

      {hasWon && (
        <div className="congrats">
          🎉 Congratulations! You won in {moves} moves!
        </div>
      )}

      <div className="board">
        {cards.map((card, index) => (
          <button
            key={card.id}
            className={`card ${card.flipped || card.matched ? 'flipped' : ''} ${
              card.matched ? 'matched' : ''
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-face card-back" />
              <div className="card-face card-front">{card.emoji}</div>
            </div>
          </button>
        ))}
      </div>

      <button className="restart" onClick={restart}>
        Restart Game
      </button>
    </div>
  )
}
