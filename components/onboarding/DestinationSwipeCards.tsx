'use client'

import { useState, useRef } from 'react'
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion'
import { Heart, X, MapPin, Plane, DollarSign, Clock, Sparkles } from 'lucide-react'
import Button from '../ui/Button'

interface Destination {
  id: string
  name: string
  country: string
  description: string
  image: string
  tags: string[]
  bestFor: string[]
  avgCost: string
  bestTime: string
}

interface DestinationSwipeCardsProps {
  preferences: {
    vibe: string
    timing: string
    budget: number
  }
  onComplete: (likedDestinations: Destination[]) => void
  onBack: () => void
}

// Sample destinations based on different vibes
const destinationsByVibe: Record<string, Destination[]> = {
  adventure: [
    {
      id: 'patagonia',
      name: 'Patagonia',
      country: 'Chile & Argentina',
      description: 'Trek through dramatic glaciers, towering peaks, and pristine wilderness in one of Earth\'s last frontiers.',
      image: '🏔️',
      tags: ['Hiking', 'Nature', 'Glaciers'],
      bestFor: ['Trekking', 'Photography', 'Wildlife'],
      avgCost: '$2,500 - $4,000',
      bestTime: 'Nov - Mar'
    },
    {
      id: 'nepal',
      name: 'Nepal',
      country: 'South Asia',
      description: 'Experience the Himalayas, ancient temples, and thrilling mountain adventures in the roof of the world.',
      image: '🏔️',
      tags: ['Mountains', 'Trekking', 'Culture'],
      bestFor: ['Hiking', 'Spirituality', 'Adventure'],
      avgCost: '$1,500 - $3,000',
      bestTime: 'Oct - Nov'
    },
    {
      id: 'new-zealand',
      name: 'New Zealand',
      country: 'Oceania',
      description: 'From bungee jumping to black water rafting, experience adrenaline in Middle Earth landscapes.',
      image: '🏞️',
      tags: ['Adventure Sports', 'Nature', 'Scenic'],
      bestFor: ['Extreme Sports', 'Road Trips', 'Hiking'],
      avgCost: '$3,000 - $5,000',
      bestTime: 'Dec - Feb'
    },
  ],
  relaxation: [
    {
      id: 'maldives',
      name: 'Maldives',
      country: 'Indian Ocean',
      description: 'Overwater bungalows, crystal-clear lagoons, and world-class spas in paradise.',
      image: '🏝️',
      tags: ['Beach', 'Luxury', 'Wellness'],
      bestFor: ['Spa', 'Snorkeling', 'Relaxation'],
      avgCost: '$4,000 - $8,000',
      bestTime: 'Nov - Apr'
    },
    {
      id: 'bali',
      name: 'Bali',
      country: 'Indonesia',
      description: 'Zen rice terraces, yoga retreats, and serene temples in the Island of Gods.',
      image: '🌴',
      tags: ['Yoga', 'Wellness', 'Culture'],
      bestFor: ['Meditation', 'Spa', 'Culture'],
      avgCost: '$1,500 - $3,000',
      bestTime: 'Apr - Oct'
    },
    {
      id: 'santorini',
      name: 'Santorini',
      country: 'Greece',
      description: 'Watch epic sunsets from white-washed clifftop villages overlooking azure waters.',
      image: '🏛️',
      tags: ['Beach', 'Luxury', 'Romantic'],
      bestFor: ['Sunsets', 'Wine', 'Relaxation'],
      avgCost: '$2,500 - $4,500',
      bestTime: 'Apr - Oct'
    },
  ],
  romance: [
    {
      id: 'paris',
      name: 'Paris',
      country: 'France',
      description: 'Candlelit dinners, Seine river cruises, and Eiffel Tower views in the City of Love.',
      image: '🗼',
      tags: ['Culture', 'Food', 'Romantic'],
      bestFor: ['Dining', 'Museums', 'Romance'],
      avgCost: '$3,000 - $5,000',
      bestTime: 'Apr - Jun'
    },
    {
      id: 'venice',
      name: 'Venice',
      country: 'Italy',
      description: 'Gondola rides through historic canals, intimate piazzas, and Renaissance splendor.',
      image: '🛶',
      tags: ['Culture', 'Historic', 'Romantic'],
      bestFor: ['Gondolas', 'Art', 'Fine Dining'],
      avgCost: '$2,500 - $4,000',
      bestTime: 'Apr - Jun'
    },
    {
      id: 'seychelles',
      name: 'Seychelles',
      country: 'Indian Ocean',
      description: 'Private beaches, luxury resorts, and turquoise waters perfect for couples.',
      image: '🏖️',
      tags: ['Beach', 'Luxury', 'Private'],
      bestFor: ['Beaches', 'Privacy', 'Romance'],
      avgCost: '$5,000 - $10,000',
      bestTime: 'Apr - May'
    },
  ],
  party: [
    {
      id: 'ibiza',
      name: 'Ibiza',
      country: 'Spain',
      description: 'World-famous clubs, beach parties, and legendary DJs in the party capital of Europe.',
      image: '🎧',
      tags: ['Nightlife', 'Beach', 'Music'],
      bestFor: ['Clubs', 'Beach Parties', 'Music Festivals'],
      avgCost: '$2,000 - $4,000',
      bestTime: 'Jun - Sep'
    },
    {
      id: 'miami',
      name: 'Miami',
      country: 'USA',
      description: 'Art Deco vibes, rooftop clubs, and non-stop South Beach energy.',
      image: '🌊',
      tags: ['Nightlife', 'Beach', 'Urban'],
      bestFor: ['Clubs', 'Beach Clubs', 'Art'],
      avgCost: '$2,500 - $4,500',
      bestTime: 'Dec - Apr'
    },
    {
      id: 'bangkok',
      name: 'Bangkok',
      country: 'Thailand',
      description: 'Rooftop bars, floating markets, and vibrant street life in the City of Angels.',
      image: '🏙️',
      tags: ['Nightlife', 'Street Food', 'Culture'],
      bestFor: ['Nightlife', 'Food', 'Shopping'],
      avgCost: '$1,500 - $2,500',
      bestTime: 'Nov - Feb'
    },
  ],
  culture: [
    {
      id: 'kyoto',
      name: 'Kyoto',
      country: 'Japan',
      description: 'Ancient temples, traditional geishas, and zen gardens in Japan\'s cultural heart.',
      image: '⛩️',
      tags: ['Historic', 'Temples', 'Traditional'],
      bestFor: ['Temples', 'Gardens', 'Culture'],
      avgCost: '$2,500 - $4,000',
      bestTime: 'Mar - May'
    },
    {
      id: 'marrakech',
      name: 'Marrakech',
      country: 'Morocco',
      description: 'Bustling souks, ornate palaces, and aromatic spice markets in the Red City.',
      image: '🕌',
      tags: ['Markets', 'Historic', 'Exotic'],
      bestFor: ['Shopping', 'Architecture', 'Food'],
      avgCost: '$1,500 - $2,500',
      bestTime: 'Mar - May'
    },
    {
      id: 'rome',
      name: 'Rome',
      country: 'Italy',
      description: 'Walk through millennia of history among Colosseum, Vatican, and ancient ruins.',
      image: '🏛️',
      tags: ['Historic', 'Art', 'Food'],
      bestFor: ['History', 'Museums', 'Cuisine'],
      avgCost: '$2,500 - $4,000',
      bestTime: 'Apr - Jun'
    },
  ],
  tropical: [
    {
      id: 'costa-rica',
      name: 'Costa Rica',
      country: 'Central America',
      description: 'Rainforest canopies, exotic wildlife, and pristine Pacific and Caribbean beaches.',
      image: '🦜',
      tags: ['Rainforest', 'Wildlife', 'Adventure'],
      bestFor: ['Eco-tourism', 'Surfing', 'Wildlife'],
      avgCost: '$2,000 - $3,500',
      bestTime: 'Dec - Apr'
    },
    {
      id: 'hawaii',
      name: 'Hawaii',
      country: 'USA',
      description: 'Volcanic landscapes, world-class surfing, and aloha spirit across paradise islands.',
      image: '🌺',
      tags: ['Beach', 'Volcanoes', 'Surfing'],
      bestFor: ['Beaches', 'Hiking', 'Surfing'],
      avgCost: '$3,000 - $5,000',
      bestTime: 'Apr - May'
    },
    {
      id: 'fiji',
      name: 'Fiji',
      country: 'South Pacific',
      description: 'Crystal lagoons, vibrant coral reefs, and warm island hospitality.',
      image: '🐚',
      tags: ['Beach', 'Diving', 'Islands'],
      bestFor: ['Diving', 'Snorkeling', 'Relaxation'],
      avgCost: '$3,500 - $6,000',
      bestTime: 'May - Oct'
    },
  ],
}

export default function DestinationSwipeCards({ preferences, onComplete, onBack }: DestinationSwipeCardsProps) {
  const destinations = destinationsByVibe[preferences.vibe] || destinationsByVibe.relaxation
  const [currentIndex, setCurrentIndex] = useState(0)
  const [likedDestinations, setLikedDestinations] = useState<Destination[]>([])
  const [exitX, setExitX] = useState(0)

  const currentDestination = destinations[currentIndex]
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0])

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      // Swiped
      setExitX(info.offset.x > 0 ? 200 : -200)

      if (info.offset.x > 0) {
        // Liked (swipe right)
        setLikedDestinations([...likedDestinations, currentDestination])
      }

      setTimeout(() => {
        if (currentIndex < destinations.length - 1) {
          setCurrentIndex(currentIndex + 1)
          setExitX(0)
        } else {
          // Finished all cards
          onComplete(info.offset.x > 0 ? [...likedDestinations, currentDestination] : likedDestinations)
        }
      }, 200)
    }
  }

  const handleLike = () => {
    setExitX(200)
    setLikedDestinations([...likedDestinations, currentDestination])

    setTimeout(() => {
      if (currentIndex < destinations.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setExitX(0)
      } else {
        onComplete([...likedDestinations, currentDestination])
      }
    }, 200)
  }

  const handleSkip = () => {
    setExitX(-200)

    setTimeout(() => {
      if (currentIndex < destinations.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setExitX(0)
      } else {
        onComplete(likedDestinations)
      }
    }, 200)
  }

  const handleFinish = () => {
    onComplete(likedDestinations)
  }

  if (!currentDestination) {
    return null
  }

  const progress = ((currentIndex + 1) / destinations.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-sunset text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Personalized for You
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Swipe to explore
          </h1>
          <p className="text-lg text-gray-600">
            {likedDestinations.length} destination{likedDestinations.length !== 1 ? 's' : ''} saved
          </p>
        </motion.div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              {currentIndex + 1} of {destinations.length}
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
        </div>

        {/* Card Stack */}
        <div className="relative h-[600px] mb-8">
          {/* Next card (preview) */}
          {currentIndex < destinations.length - 1 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-md bg-white rounded-3xl shadow-soft scale-95 opacity-50 h-[550px]" />
            </div>
          )}

          {/* Current card */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
            style={{ x, rotate, opacity }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={exitX !== 0 ? { x: exitX } : {}}
          >
            <div className="w-full max-w-md bg-white rounded-3xl shadow-float-lg overflow-hidden h-[550px] flex flex-col">
              {/* Destination Image/Icon */}
              <div className="relative h-64 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                <div className="text-9xl">{currentDestination.image}</div>

                {/* Swipe indicators */}
                <motion.div
                  className="absolute top-8 left-8 bg-red-500 text-white px-6 py-3 rounded-2xl font-bold text-2xl rotate-[-20deg] border-4 border-red-500"
                  style={{ opacity: useTransform(x, [-100, 0], [1, 0]) }}
                >
                  SKIP
                </motion.div>
                <motion.div
                  className="absolute top-8 right-8 bg-green-500 text-white px-6 py-3 rounded-2xl font-bold text-2xl rotate-[20deg] border-4 border-green-500"
                  style={{ opacity: useTransform(x, [0, 100], [0, 1]) }}
                >
                  LIKE
                </motion.div>
              </div>

              {/* Destination Info */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-1">
                      {currentDestination.name}
                    </h2>
                    <p className="text-lg text-gray-600">{currentDestination.country}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {currentDestination.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentDestination.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-5 h-5 text-primary-500" />
                    <div>
                      <div className="text-xs text-gray-500">Avg. Cost</div>
                      <div className="font-semibold text-sm">{currentDestination.avgCost}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-primary-500" />
                    <div>
                      <div className="text-xs text-gray-500">Best Time</div>
                      <div className="font-semibold text-sm">{currentDestination.bestTime}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSkip}
            className="w-16 h-16 rounded-full bg-white shadow-soft-lg flex items-center justify-center hover:shadow-glow-red transition-all group"
          >
            <X className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className="w-20 h-20 rounded-full bg-gradient-primary shadow-glow-purple flex items-center justify-center hover:scale-110 transition-all"
          >
            <Heart className="w-10 h-10 text-white fill-white" />
          </motion.button>
        </div>

        {/* Finish Early Button */}
        {likedDestinations.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <button
              onClick={handleFinish}
              className="text-primary-600 hover:text-primary-700 font-medium underline"
            >
              I've found enough ({likedDestinations.length} selected)
            </button>
          </motion.div>
        )}

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6 text-gray-500 text-sm"
        >
          Swipe right to save • Swipe left to skip
        </motion.div>
      </div>
    </div>
  )
}
