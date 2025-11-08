'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Calendar, DollarSign, ChevronRight } from 'lucide-react'
import Button from '../ui/Button'

interface QuestionnaireData {
  vibe: string
  timing: string
  budget: number
}

interface InspireMeQuestionnaireProps {
  onComplete: (data: QuestionnaireData) => void
  onBack: () => void
}

const vibeOptions = [
  { id: 'adventure', label: 'Adventure', emoji: '🏔️', gradient: 'from-orange-400 to-red-500' },
  { id: 'relaxation', label: 'Relaxation', emoji: '🧘', gradient: 'from-blue-400 to-cyan-500' },
  { id: 'romance', label: 'Romance', emoji: '💕', gradient: 'from-pink-400 to-rose-500' },
  { id: 'party', label: 'Party', emoji: '🎉', gradient: 'from-purple-400 to-pink-500' },
  { id: 'culture', label: 'Culture', emoji: '🎭', gradient: 'from-indigo-400 to-purple-500' },
  { id: 'tropical', label: 'Tropical', emoji: '🌴', gradient: 'from-green-400 to-emerald-500' },
]

const timingOptions = [
  { id: 'this-month', label: 'This Month', icon: '⚡' },
  { id: 'summer', label: 'Summer', icon: '☀️' },
  { id: 'fall', label: 'Fall', icon: '🍂' },
  { id: 'winter', label: 'Winter', icon: '❄️' },
  { id: 'flexible', label: 'Flexible', icon: '🗓️' },
]

const budgetRanges = [
  { value: 1000, label: 'Budget', emoji: '💰', description: 'Under $1,000' },
  { value: 2500, label: 'Moderate', emoji: '💵', description: '$1,000 - $3,000' },
  { value: 5000, label: 'Comfortable', emoji: '💳', description: '$3,000 - $7,000' },
  { value: 10000, label: 'Luxury', emoji: '💎', description: '$7,000+' },
]

export default function InspireMeQuestionnaire({ onComplete, onBack }: InspireMeQuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [vibe, setVibe] = useState('')
  const [timing, setTiming] = useState('')
  const [budget, setBudget] = useState(2500)

  const totalQuestions = 3
  const progress = (currentQuestion / totalQuestions) * 100

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      onComplete({ vibe, timing, budget })
    }
  }

  const handleBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
    } else {
      onBack()
    }
  }

  const canProceed = () => {
    if (currentQuestion === 1) return vibe !== ''
    if (currentQuestion === 2) return timing !== ''
    if (currentQuestion === 3) return true
    return false
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-sunset text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Discovery
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Let's find your perfect escape
          </h1>
          <p className="text-xl text-gray-600">
            Answer 3 quick questions
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-primary-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Question Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-4xl shadow-float-lg p-8 md:p-12 min-h-[500px] flex flex-col"
        >
          <AnimatePresence mode="wait">
            {/* Question 1: Vibe */}
            {currentQuestion === 1 && (
              <motion.div
                key="question-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-sunset p-3 rounded-xl">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    What kind of vibe?
                  </h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Choose the experience that excites you most
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
                  {vibeOptions.map((option) => (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setVibe(option.id)}
                      className={`relative overflow-hidden rounded-2xl p-6 transition-all ${
                        vibe === option.id
                          ? 'ring-4 ring-primary-400 shadow-glow-purple'
                          : 'shadow-soft hover:shadow-soft-lg'
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-${vibe === option.id ? '20' : '5'} transition-opacity`} />
                      <div className="relative z-10 text-center">
                        <div className="text-5xl mb-3">{option.emoji}</div>
                        <div className="font-bold text-gray-900">{option.label}</div>
                      </div>
                      {vibe === option.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-3 right-3 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center"
                        >
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Question 2: Timing */}
            {currentQuestion === 2 && (
              <motion.div
                key="question-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-ocean p-3 rounded-xl">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    When are you thinking?
                  </h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Pick your preferred travel timeframe
                </p>

                <div className="space-y-3 flex-1">
                  {timingOptions.map((option) => (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setTiming(option.id)}
                      className={`w-full flex items-center gap-4 p-6 rounded-2xl transition-all ${
                        timing === option.id
                          ? 'bg-gradient-primary text-white shadow-glow-purple'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                      }`}
                    >
                      <div className="text-3xl">{option.icon}</div>
                      <div className="flex-1 text-left">
                        <div className="font-bold text-lg">{option.label}</div>
                      </div>
                      {timing === option.id && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                        >
                          <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Question 3: Budget */}
            {currentQuestion === 3 && (
              <motion.div
                key="question-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-mint p-3 rounded-xl">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    What's your budget?
                  </h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Per person, all-inclusive estimate
                </p>

                <div className="flex-1 flex flex-col justify-center">
                  {/* Selected Budget Display */}
                  <div className="text-center mb-12">
                    <motion.div
                      key={budget}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-7xl mb-4"
                    >
                      {budgetRanges.find(r => r.value === budget)?.emoji || '💰'}
                    </motion.div>
                    <div className="text-5xl font-bold text-gradient mb-2">
                      ${budget.toLocaleString()}
                    </div>
                    <div className="text-xl text-gray-600">
                      {budgetRanges.find(r => r.value === budget)?.label || 'Custom'}
                    </div>
                  </div>

                  {/* Budget Range Buttons */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {budgetRanges.map((range) => (
                      <motion.button
                        key={range.value}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setBudget(range.value)}
                        className={`p-4 rounded-2xl transition-all ${
                          budget === range.value
                            ? 'bg-gradient-primary text-white shadow-glow-purple'
                            : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <div className="text-3xl mb-2">{range.emoji}</div>
                        <div className="font-bold text-sm">{range.label}</div>
                        <div className={`text-xs mt-1 ${budget === range.value ? 'text-white/80' : 'text-gray-500'}`}>
                          {range.description}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Custom Slider */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600">Custom Amount</span>
                      <span className="text-sm font-medium text-primary-600">${budget.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="15000"
                      step="500"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #667eea 0%, #764ba2 ${((budget - 500) / 14500) * 100}%, #e5e7eb ${((budget - 500) / 14500) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>$500</span>
                      <span>$15,000</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleBack}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              variant="gradient"
              size="lg"
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex-1 flex items-center justify-center gap-2"
            >
              {currentQuestion === totalQuestions ? (
                <>
                  <Sparkles className="w-5 h-5" />
                  Discover Destinations
                </>
              ) : (
                <>
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        </motion.div>

        {/* Bottom Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-6 text-gray-500 text-sm"
        >
          AI will analyze your preferences and suggest perfect destinations
        </motion.div>
      </div>
    </div>
  )
}
