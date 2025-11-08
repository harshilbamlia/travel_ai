'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Clock, TrendingUp } from 'lucide-react'
import Button from '../ui/Button'

interface Destination {
  name: string
  country: string
  image: string
  popular?: boolean
}

interface SmartDestinationSearchProps {
  onSelect: (destination: string) => void
  onInspireInstead: () => void
}

export default function SmartDestinationSearch({ onSelect, onInspireInstead }: SmartDestinationSearchProps) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)

  const recentSearches = [
    'Paris, France',
    'Tokyo, Japan',
    'Bali, Indonesia'
  ]

  const popularDestinations: Destination[] = [
    { name: 'Santorini', country: 'Greece', image: '🏝️', popular: true },
    { name: 'Dubai', country: 'UAE', image: '🏙️', popular: true },
    { name: 'Maldives', country: 'Maldives', image: '🌴' },
    { name: 'Barcelona', country: 'Spain', image: '🎨' },
    { name: 'New York', country: 'USA', image: '🗽' },
    { name: 'Iceland', country: 'Iceland', image: '🏔️' },
  ]

  const handleSelect = (destination: string) => {
    setQuery(destination)
    onSelect(destination)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Where do you want to go?
          </h1>
          <p className="text-xl text-gray-600">
            Search for your dream destination
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mb-8"
        >
          <div className={`relative transition-all duration-300 ${focused ? 'scale-105' : ''}`}>
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 z-10" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
              placeholder="Search destinations..."
              className="w-full pl-16 pr-6 py-6 text-xl rounded-3xl border-2 border-gray-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition-all duration-200 shadow-soft"
            />
          </div>

          {/* Autocomplete Dropdown */}
          <AnimatePresence>
            {focused && query && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-float-lg overflow-hidden z-20"
              >
                {popularDestinations
                  .filter(d => d.name.toLowerCase().includes(query.toLowerCase()) || d.country.toLowerCase().includes(query.toLowerCase()))
                  .slice(0, 5)
                  .map((dest, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelect(`${dest.name}, ${dest.country}`)}
                      className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="text-3xl">{dest.image}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{dest.name}</div>
                        <div className="text-sm text-gray-600">{dest.country}</div>
                      </div>
                      {dest.popular && (
                        <div className="text-xs bg-gradient-sunset text-white px-2 py-1 rounded-full flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Popular
                        </div>
                      )}
                    </button>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Recent Searches */}
        {!query && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Recent Searches</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(search)}
                  className="px-6 py-3 bg-white rounded-full shadow-soft hover:shadow-soft-lg transition-all font-medium text-gray-700 hover:text-primary-600"
                >
                  {search}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Popular Destinations Grid */}
        {!query && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Popular Destinations</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {popularDestinations.map((dest, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, y: -4 }}
                  onClick={() => handleSelect(`${dest.name}, ${dest.country}`)}
                  className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all text-center"
                >
                  <div className="text-4xl mb-3">{dest.image}</div>
                  <div className="font-bold text-gray-900">{dest.name}</div>
                  <div className="text-sm text-gray-600">{dest.country}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Not Sure Link */}
        <div className="text-center">
          <button
            onClick={onInspireInstead}
            className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2 group"
          >
            <span>Not sure where to go?</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xl"
            >
              ✨
            </motion.span>
            <span className="underline">Get inspired</span>
          </button>
        </div>
      </div>
    </div>
  )
}
