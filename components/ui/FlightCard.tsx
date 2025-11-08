'use client'

import { motion } from 'framer-motion'
import { Plane, Clock, TrendingDown, Wifi, Coffee, Luggage } from 'lucide-react'

interface FlightCardProps {
  airline: string
  logo: string
  departure: {
    time: string
    airport: string
    code: string
  }
  arrival: {
    time: string
    airport: string
    code: string
  }
  duration: string
  price: number
  priceChange?: number
  stops: number
  amenities?: string[]
  class?: 'economy' | 'business' | 'first'
  onSelect?: () => void
}

export default function FlightCard({
  airline,
  logo,
  departure,
  arrival,
  duration,
  price,
  priceChange,
  stops,
  amenities = [],
  class: flightClass = 'economy',
  onSelect,
}: FlightCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all p-6 cursor-pointer border border-gray-50"
      onClick={onSelect}
    >
      <div className="flex items-center justify-between mb-6">
        {/* Airline */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
            <Plane className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{airline}</h4>
            <p className="text-sm text-gray-500 capitalize">{flightClass} class</p>
          </div>
        </div>

        {/* Price */}
        <div className="text-right">
          <div className="text-3xl font-bold text-gray-900">${price}</div>
          {priceChange && (
            <div className="flex items-center gap-1 text-green-600 text-sm font-medium mt-1">
              <TrendingDown className="w-4 h-4" />
              ${Math.abs(priceChange)} less
            </div>
          )}
        </div>
      </div>

      {/* Flight Route */}
      <div className="flex items-center gap-4 mb-6">
        {/* Departure */}
        <div className="flex-1">
          <div className="text-3xl font-bold text-gray-900">{departure.time}</div>
          <div className="text-sm text-gray-500 mt-1">{departure.code}</div>
          <div className="text-xs text-gray-400">{departure.airport}</div>
        </div>

        {/* Flight Path */}
        <div className="flex-1 flex flex-col items-center">
          <div className="text-xs text-gray-500 mb-2">{duration}</div>
          <div className="w-full relative">
            <div className="h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full" />
            <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-primary-600 rotate-90" />
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {stops === 0 ? 'Direct' : `${stops} stop${stops > 1 ? 's' : ''}`}
          </div>
        </div>

        {/* Arrival */}
        <div className="flex-1 text-right">
          <div className="text-3xl font-bold text-gray-900">{arrival.time}</div>
          <div className="text-sm text-gray-500 mt-1">{arrival.code}</div>
          <div className="text-xs text-gray-400">{arrival.airport}</div>
        </div>
      </div>

      {/* Amenities */}
      {amenities.length > 0 && (
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-gray-600">
            {amenities.includes('wifi') && <Wifi className="w-4 h-4" />}
            {amenities.includes('meal') && <Coffee className="w-4 h-4" />}
            {amenities.includes('luggage') && <Luggage className="w-4 h-4" />}
          </div>
          <div className="flex-1" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-primary text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-soft hover:shadow-glow-purple transition-all"
            onClick={(e) => {
              e.stopPropagation()
              onSelect?.()
            }}
          >
            Select Flight
          </motion.button>
        </div>
      )}
    </motion.div>
  )
}

interface CompactFlightCardProps {
  airline: string
  departure: string
  arrival: string
  duration: string
  price: number
  stops: number
}

export function CompactFlightCard({
  airline,
  departure,
  arrival,
  duration,
  price,
  stops,
}: CompactFlightCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft">
      <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <Plane className="w-5 h-5 text-primary-600" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-gray-900 truncate">{airline}</div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{departure}</span>
          <span>→</span>
          <span>{arrival}</span>
          <span>•</span>
          <Clock className="w-3 h-3" />
          <span>{duration}</span>
        </div>
      </div>
      <div className="text-right flex-shrink-0">
        <div className="text-xl font-bold text-gray-900">${price}</div>
        <div className="text-xs text-gray-500">{stops === 0 ? 'Direct' : `${stops} stop${stops > 1 ? 's' : ''}`}</div>
      </div>
    </div>
  )
}
