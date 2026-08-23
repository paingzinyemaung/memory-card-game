import { useEffect, useState } from 'react'

const EMOJIS = [
  '🐶',
  '🐱',
  '🦊',
  '🐼',
  '🦁',
  '🐸',
  '🐵',
  '🐷',
  '🐨',
  '🐰',
  '🦉',
  '🐢',
]

const DIFFICULTIES = {
  easy: { label: 'Easy', pairs: 4 },
  medium: { label: 'Medium', pairs: 8 },
  hard: { label: 'Hard', pairs: 12 },
}

function shuffle(list) {
  const result = [...list]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function createDeck(pairs) {
  const emojis = EMOJIS.slice(0, pairs)
  const cards = [...emojis, ...emojis].map((emoji, id) => ({
    id,
    emoji,
    flipped: false,
    matched: false,
  }))
  return shuffle(cards)
}

function loadBest(difficulty) {
  try {
    const raw = localStorage.getItem(`memory-best-${difficulty}`)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

export default function App() {
  const [difficulty, setDifficulty] = useState('easy')
  const [cards, setCards] = useState(() =>
    createDeck(DIFFICULTIES.easy.pairs)
  )
  const [flipped, setFlipped] = useState([])
  const [moves, setMoves] = useState(0)
  const [lock, setLock] = useState(false)
  const [started, setStarted] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [best, setBest] = useState(() => loadBest('easy'))
  const [newBest, setNewBest] = useState(false)

  const hasWon = cards.every((card) => card.matched)

  useEffect(() => {
    if (!started || hasWon) return
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(interval)
  }, [started, hasWon])

  function recordBest(finalMoves, finalSeconds) {
    const current = loadBest(difficulty)
    if (
      !current ||
      finalMoves < current.moves ||
      (finalMoves === current.moves && finalSeconds < current.seconds)
    ) {
      localStorage.setItem(
        `memory-best-${difficulty}`,
        JSON.stringify({ moves: finalMoves, seconds: finalSeconds })
      )
      setBest({ moves: finalMoves, seconds: finalSeconds })
      setNewBest(true)
    }
  }

  function handleCardClick(index) {
    if (lock) return
    if (cards[index].flipped || cards[index].matched) return
    if (flipped.length === 2) return

    setStarted(true)

    const nextFlipped = [...flipped, index]
    setCards((prev) =>
      prev.map((card, i) => (i === index ? { ...card, flipped: true } : card))
    )

    if (nextFlipped.length < 2) {
      setFlipped(nextFlipped)
      return
    }

    setMoves(moves + 1)
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
      if (cards.filter((card) => card.matched).length === cards.length - 2) {
        recordBest(moves + 1, seconds)
      }
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

  function startGame(selectedDifficulty) {
    setDifficulty(selectedDifficulty)
    setCards(createDeck(DIFFICULTIES[selectedDifficulty].pairs))
    setFlipped([])
    setMoves(0)
    setLock(false)
    setStarted(false)
    setSeconds(0)
    setNewBest(false)
    setBest(loadBest(selectedDifficulty))
  }

  return (
    <div className="app">
      <h1>Memory Card Game</h1>

      <div className="difficulty">
        {Object.entries(DIFFICULTIES).map(([key, { label }]) => (
          <button
            key={key}
            className={key === difficulty ? 'active' : ''}
            onClick={() => startGame(key)}
          >
            {label} ({DIFFICULTIES[key].pairs})
          </button>
        ))}
      </div>

      <div className="hud">
        <p className="moves">Moves: {moves}</p>
        <p className="moves time">Time: {formatTime(seconds)}</p>
        <p className="moves best">
          Best:{' '}
          {best
            ? `${best.moves} moves · ${formatTime(best.seconds)}`
            : '—'}
        </p>
      </div>

      {hasWon && (
        <div className="congrats">
          🎉 Congratulations! You won in {moves} moves (
          {formatTime(seconds)})!{newBest && ' New best score!'}
        </div>
      )}

      <div className={`board ${difficulty}`}>
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

      <button className="restart" onClick={() => startGame(difficulty)}>
        Restart Game
      </button>
    </div>
  )
}
