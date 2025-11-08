'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, DollarSign, Users } from 'lucide-react'
import Button from '../ui/Button'

interface DateBudgetSelectorProps {
  destination: string
  onContinue: (data: { dates: string; budget: number; travelers: number }) => void
  onBack: () => void
}

export default function DateBudgetSelector({ destination, onContinue, onBack }: DateBudgetSelectorProps) {
  const [dates, setDates] = useState('')
  const [budget, setBudget] = useState(3000)
  const [travelers, setTravelers] = useState(2)

  const budgetLabels = {
    500: 'Budget',
    1500: 'Moderate',
    3000: 'Comfortable',
    5000: 'Luxury',
    10000: 'Ultra Luxury'
  }

  const getBudgetLabel = (value: number) => {
    if (value < 1000) return 'Budget'
    if (value < 2000) return 'Moderate'
    if (value < 4000) return 'Comfortable'
    if (value < 7500) return 'Luxury'
    return 'Ultra Luxury'
  }

  const handleContinue = () => {
    onContinue({ dates, budget, travelers })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Plan your trip to
          </h1>
          <div className="text-4xl font-display text-gradient mb-6">
            {destination}
          </div>
          <p className="text-xl text-gray-600">
            Let's customize your perfect itinerary
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-4xl shadow-float-lg p-8 md:p-12 space-y-8"
        >
          {/* When Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-ocean p-2 rounded-xl">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">When?</h3>
            </div>
            <input
              type="text"
              placeholder="e.g., Dec 15 - Dec 22, 2024"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-lg"
            />
            <p className="text-sm text-gray-500 mt-2">
              💡 Tip: Flexible dates can save you up to 30%
            </p>
          </div>

          {/* Budget Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-mint p-2 rounded-xl">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Budget per person</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gradient">${budget.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">{getBudgetLabel(budget)}</div>
                </div>
              </div>
            </div>

            {/* Budget Slider */}
            <div className="relative pt-6 pb-2">
              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #667eea 0%, #764ba2 ${((budget - 500) / 9500) * 100}%, #e5e7eb ${((budget - 500) / 9500) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$500</span>
                <span>$10,000</span>
              </div>
            </div>

            {/* Budget Categories */}
            <div className="grid grid-cols-5 gap-2 mt-4">
              {[500, 1500, 3000, 5000, 10000].map((value) => (
                <button
                  key={value}
                  onClick={() => setBudget(value)}
                  className={`py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                    budget === value
                      ? 'bg-gradient-primary text-white shadow-soft'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  ${value < 1000 ? value : `${value / 1000}k`}
                </button>
              ))}
            </div>
          </div>

          {/* Travelers Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-sunset p-2 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Travelers</h3>
            </div>

            <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-6">
              <button
                onClick={() => setTravelers(Math.max(1, travelers - 1))}
                disabled={travelers <= 1}
                className="w-12 h-12 rounded-xl bg-white shadow-soft hover:shadow-soft-lg disabled:opacity-50 disabled:cursor-not-allowed font-bold text-xl text-gray-700 transition-all"
              >
                −
              </button>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">{travelers}</div>
                <div className="text-sm text-gray-600">
                  {travelers === 1 ? 'traveler' : 'travelers'}
                </div>
              </div>
              <button
                onClick={() => setTravelers(Math.min(10, travelers + 1))}
                disabled={travelers >= 10}
                className="w-12 h-12 rounded-xl bg-white shadow-soft hover:shadow-soft-lg disabled:opacity-50 disabled:cursor-not-allowed font-bold text-xl text-gray-700 transition-all"
              >
                +
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 pt-6">
            <Button
              variant="secondary"
              size="lg"
              onClick={onBack}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              variant="gradient"
              size="lg"
              onClick={handleContinue}
              disabled={!dates}
              className="flex-1"
            >
              Find My Perfect Trip →
            </Button>
          </div>
        </motion.div>

        {/* Estimated Total */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-6 text-gray-600"
        >
          <span className="text-sm">Estimated total for {travelers} {travelers === 1 ? 'person' : 'people'}: </span>
          <span className="text-2xl font-bold text-gradient">
            ${(budget * travelers).toLocaleString()}
          </span>
        </motion.div>
      </div>
    </div>
  )
}
