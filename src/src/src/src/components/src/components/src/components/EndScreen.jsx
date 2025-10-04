import React from 'react'

const EndScreen = ({ score, setScreen, questions }) => {
  const total = questions.length
  const perfect = score === total

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center">
        {perfect ? (
          <>
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">YOU PROVED THAT YOU ARE A REAL NAD</h2>
          </>
        ) : (
          <>
            <div className="text-6xl mb-4">📊</div>
            <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
            <div className="text-5xl font-bold text-blue-600 mb-4">{score}/{total}</div>
          </>
        )}
        <button
          onClick={() => setScreen('landing')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  )
}

export default EndScreen
