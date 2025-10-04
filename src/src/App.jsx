import React, { useState } from 'react'
import Landing from './components/Landing'
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'

function App() {
  const [screen, setScreen] = useState('landing')
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      {screen === 'landing' && <Landing onStart={setQuestions} setScreen={setScreen} />}
      {screen === 'quiz' && <Quiz questions={questions} setScreen={setScreen} setScore={setScore} />}
      {screen === 'end' && <EndScreen score={score} setScreen={setScreen} questions={questions} />}
    </div>
  )
}

export default App
