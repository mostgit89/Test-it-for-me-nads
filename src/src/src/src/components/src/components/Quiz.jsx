import React, { useState, useEffect } from 'react'

const Quiz = ({ questions, setScreen, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeLeft, setTimeLeft] = useState(10)

  const question = questions[currentIndex]

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      handleAnswer(null)
    }
  }, [timeLeft])

  const handleAnswer = (answer) => {
    setSelected(answer)
    setShowFeedback(true)
    
    if (answer === question.correct) {
      setScore(prev => prev + 1)
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1)
        setSelected(null)
        setShowFeedback(false)
        setTimeLeft(10)
      } else {
        setScreen('end')
      }
    }, 2000)
  }

  if (!question) return <div>Loading...</div>

  return (
    <div className="min-h-screen p-4 max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Question {currentIndex + 1}/{questions.length}</h2>
          <div className="text-lg font-bold">Time: {timeLeft}s</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(timeLeft/10)*100}%` }}></div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-6">{question.text}</h3>
        <div className="grid gap-4">
          {['A','B','C','D'].map(option => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={showFeedback}
              className={`p-4 rounded-xl text-left border-2 ${
                showFeedback 
                  ? option === question.correct 
                    ? 'bg-green-500 text-white border-green-500' 
                    : option === selected 
                    ? 'bg-red-500 text-white border-red-500'
                    : 'bg-gray-100 border-gray-300'
                  : 'bg-gray-100 hover:bg-gray-200 border-gray-300'
              }`}
            >
              <strong>{option}.</strong> {question.options[option]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Quiz
