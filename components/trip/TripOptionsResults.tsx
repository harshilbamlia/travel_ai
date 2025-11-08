'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Calendar, Users, MapPin, Check, SlidersHorizontal, Plane, Hotel, MapPinned } from 'lucide-react'
import { Card } from '../ui/Card'
import Button from '../ui/Button'
import { CompactFlightCard } from '../ui/FlightCard'

interface TripOption {
  id: string
  name: string
  tagline: string
  totalPrice: number
  pricePerPerson: number
  duration: string
  highlights: string[]
  savings?: number
  recommended?: boolean
  flightSummary: {
    airline: string
    departure: string
    arrival: string
    duration: string
    price: number
    stops: number
  }
  hotelSummary: {
    name: string
    rating: number
    nights: number
    pricePerNight: number
  }
  activities: {
    count: number
    preview: string[]
  }
}

interface TripOptionsResultsProps {
  destination: string
  dates: string
  travelers: number
  budget: number
  onSelectOption: (optionId: string) => void
  onOpenFilters: () => void
  onBack: () => void
}

export default function TripOptionsResults({
  destination,
  dates,
  travelers,
  budget,
  onSelectOption,
  onOpenFilters,
  onBack,
}: TripOptionsResultsProps) {
  const [selectedOption, setSelectedOption] = useState<string>('comfort')

  // Generate trip options based on budget
  const tripOptions: TripOption[] = [
    {
      id: 'budget',
      name: 'Budget Explorer',
      tagline: 'Smart savings without compromise',
      totalPrice: Math.round(budget * travelers * 0.7),
      pricePerPerson: Math.round(budget * 0.7),
      duration: '7 days, 6 nights',
      highlights: ['Direct flights', '3-star hotel in central area', 'Free breakfast included', '3 guided tours'],
      savings: Math.round(budget * travelers * 0.3),
      flightSummary: {
        airline: 'United Airlines',
        departure: '10:30 AM',
        arrival: '6:45 PM',
        duration: '14h 15m',
        price: Math.round(budget * 0.4),
        stops: 0,
      },
      hotelSummary: {
        name: 'Downtown Plaza Hotel',
        rating: 4.3,
        nights: 6,
        pricePerNight: Math.round((budget * 0.3) / 6),
      },
      activities: {
        count: 8,
        preview: ['City Walking Tour', 'Museum Pass', 'Local Food Market'],
      },
    },
    {
      id: 'comfort',
      name: 'Comfort Plus',
      tagline: 'Perfect balance of comfort and value',
      totalPrice: Math.round(budget * travelers),
      pricePerPerson: budget,
      duration: '7 days, 6 nights',
      highlights: ['Premium economy flights', '4-star boutique hotel', 'Breakfast & dinner', '5 premium experiences'],
      recommended: true,
      flightSummary: {
        airline: 'Delta Airlines',
        departure: '2:00 PM',
        arrival: '5:30 PM',
        duration: '13h 30m',
        price: Math.round(budget * 0.45),
        stops: 0,
      },
      hotelSummary: {
        name: 'Grand Boutique Hotel',
        rating: 4.7,
        nights: 6,
        pricePerNight: Math.round((budget * 0.35) / 6),
      },
      activities: {
        count: 12,
        preview: ['Private City Tour', 'Cooking Class', 'Spa Day', 'Sunset Cruise'],
      },
    },
    {
      id: 'luxury',
      name: 'Ultimate Experience',
      tagline: 'VIP treatment all the way',
      totalPrice: Math.round(budget * travelers * 1.4),
      pricePerPerson: Math.round(budget * 1.4),
      duration: '7 days, 6 nights',
      highlights: ['Business class flights', '5-star luxury resort', 'All meals & drinks', 'VIP experiences & concierge'],
      flightSummary: {
        airline: 'Emirates',
        departure: '11:00 AM',
        arrival: '3:00 PM',
        duration: '13h 00m',
        price: Math.round(budget * 0.7),
        stops: 0,
      },
      hotelSummary: {
        name: 'Ritz-Carlton Grand',
        rating: 5.0,
        nights: 6,
        pricePerNight: Math.round((budget * 0.5) / 6),
      },
      activities: {
        count: 15,
        preview: ['Helicopter Tour', 'Michelin Dining', 'Private Yacht', 'Luxury Spa Package'],
      },
    },
  ]

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId)
  }

  const handleViewDetails = () => {
    onSelectOption(selectedOption)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Generated in 3.2 seconds
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Your Perfect {destination} Trip
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Compare AI-curated packages and choose your favorite
          </p>

          {/* Trip Summary */}
          <div className="flex items-center justify-center gap-8 text-gray-600 flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">{dates}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">{travelers} {travelers === 1 ? 'Traveler' : 'Travelers'}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{destination}</span>
            </div>
          </div>

          {/* Filter Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <Button
              variant="secondary"
              size="md"
              icon={<SlidersHorizontal className="w-5 h-5" />}
              onClick={onOpenFilters}
            >
              Advanced Filters
            </Button>
          </motion.div>
        </motion.div>

        {/* Trip Options Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {tripOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TripOptionCard
                option={option}
                selected={selectedOption === option.id}
                onSelect={() => handleSelectOption(option.id)}
                travelers={travelers}
              />
            </motion.div>
          ))}
        </div>

        {/* View Details Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={onBack}
          >
            ← Back to Search
          </Button>
          <Button
            variant="gradient"
            size="lg"
            icon={<Sparkles className="w-5 h-5" />}
            onClick={handleViewDetails}
          >
            View Detailed Itinerary →
          </Button>
        </motion.div>

        {/* AI Insight Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <Card variant="premium" className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-primary-200">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-primary p-3 rounded-xl flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Recommendation</h3>
                <p className="text-gray-700">
                  Based on your budget of ${budget}/person and preferences, we recommend the <strong>Comfort Plus</strong> package.
                  It offers the best value with premium experiences while staying within your budget. The 4-star boutique hotel
                  has excellent reviews and is perfectly located for exploring {destination}.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

function TripOptionCard({ option, selected, onSelect, travelers }: {
  option: TripOption
  selected: boolean
  onSelect: () => void
  travelers: number
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onSelect}
      className={`
        relative cursor-pointer rounded-3xl p-6 transition-all h-full flex flex-col
        ${selected
          ? 'bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-500 shadow-glow-purple'
          : 'bg-white border-2 border-gray-200 hover:border-gray-300 shadow-soft hover:shadow-soft-lg'
        }
      `}
    >
      {/* Recommended Badge */}
      {option.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-sunset text-white px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
          <Sparkles className="w-3 h-3" />
          AI Recommended
        </div>
      )}

      {/* Selected Checkmark */}
      {selected && (
        <div className="absolute top-4 right-4 bg-gradient-primary text-white p-1.5 rounded-full shadow-lg">
          <Check className="w-5 h-5" />
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{option.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{option.tagline}</p>
        <div className="text-4xl font-bold text-gradient mb-1">
          ${option.totalPrice.toLocaleString()}
        </div>
        <div className="text-sm text-gray-600">
          ${option.pricePerPerson.toLocaleString()}/person • {option.duration}
        </div>
        {option.savings && (
          <div className="mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
            Save ${option.savings.toLocaleString()}
          </div>
        )}
      </div>

      {/* Flight Summary */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
          <Plane className="w-4 h-4" />
          Flight
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-sm">
          <div className="font-semibold text-gray-900">{option.flightSummary.airline}</div>
          <div className="text-gray-600 text-xs mt-1">
            {option.flightSummary.departure} → {option.flightSummary.arrival} • {option.flightSummary.duration}
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-500">
              {option.flightSummary.stops === 0 ? 'Direct' : `${option.flightSummary.stops} stop(s)`}
            </span>
            <span className="font-semibold text-gray-900">${option.flightSummary.price * travelers}</span>
          </div>
        </div>
      </div>

      {/* Hotel Summary */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
          <Hotel className="w-4 h-4" />
          Hotel
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-sm">
          <div className="font-semibold text-gray-900">{option.hotelSummary.name}</div>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center">
              {[...Array(Math.floor(option.hotelSummary.rating))].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">★</span>
              ))}
            </div>
            <span className="text-xs text-gray-600">{option.hotelSummary.rating}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-500">{option.hotelSummary.nights} nights</span>
            <span className="font-semibold text-gray-900">
              ${(option.hotelSummary.pricePerNight * option.hotelSummary.nights).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
          <MapPinned className="w-4 h-4" />
          {option.activities.count} Activities & Experiences
        </div>
        <div className="space-y-1.5">
          {option.activities.preview.map((activity, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-1 h-1 bg-primary-500 rounded-full" />
              {activity}
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="flex-1 mb-6">
        <div className="text-sm font-semibold text-gray-700 mb-3">What's Included</div>
        <ul className="space-y-2">
          {option.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Select Button */}
      <Button
        variant={selected ? 'primary' : 'secondary'}
        size="md"
        fullWidth
        onClick={(e) => {
          e.stopPropagation()
          onSelect()
        }}
      >
        {selected ? '✓ Selected' : 'Select This Plan'}
      </Button>
    </motion.div>
  )
}
