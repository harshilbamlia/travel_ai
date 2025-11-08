'use client'

import { Search, MapPin, Calendar, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface SearchBarProps {
  variant?: 'default' | 'hero'
  onSearch?: (query: string) => void
}

export default function SearchBar({ variant = 'default', onSearch }: SearchBarProps) {
  const [destination, setDestination] = useState('')
  const [dates, setDates] = useState('')
  const [guests, setGuests] = useState('1')

  const handleSearch = () => {
    onSearch?.(destination)
  }

  if (variant === 'hero') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="search-float max-w-5xl w-full"
      >
        <div className="flex items-center gap-6 w-full flex-wrap lg:flex-nowrap">
          {/* Destination */}
          <div className="flex items-center gap-3 flex-1 min-w-[200px]">
            <MapPin className="w-5 h-5 text-primary-500" />
            <div className="flex-1">
              <label className="text-xs font-medium text-gray-500 block">Where to?</label>
              <input
                type="text"
                placeholder="Search destinations"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-gray-900 font-medium text-lg placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="w-px h-12 bg-gray-200 hidden lg:block" />

          {/* Dates */}
          <div className="flex items-center gap-3 flex-1 min-w-[200px]">
            <Calendar className="w-5 h-5 text-primary-500" />
            <div className="flex-1">
              <label className="text-xs font-medium text-gray-500 block">When?</label>
              <input
                type="text"
                placeholder="Add dates"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-gray-900 font-medium text-lg placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="w-px h-12 bg-gray-200 hidden lg:block" />

          {/* Guests */}
          <div className="flex items-center gap-3 flex-1 min-w-[150px]">
            <Users className="w-5 h-5 text-primary-500" />
            <div className="flex-1">
              <label className="text-xs font-medium text-gray-500 block">Travelers</label>
              <input
                type="text"
                placeholder="Add guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-gray-900 font-medium text-lg placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSearch}
            className="bg-gradient-primary text-white p-4 rounded-full shadow-glow-purple transition-all duration-300 hover:shadow-glow-purple"
          >
            <Search className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="glass rounded-2xl px-6 py-3 shadow-soft flex items-center gap-4 max-w-2xl">
      <Search className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search destinations, hotels, flights..."
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400"
      />
    </div>
  )
}
