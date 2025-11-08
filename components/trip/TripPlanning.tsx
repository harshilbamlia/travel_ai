'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Users, Sparkles, Check, X, Heart, Share2, Download } from 'lucide-react'
import { Card } from '../ui/Card'
import Button from '../ui/Button'
import FlightCard from '../ui/FlightCard'
import HotelCard from '../ui/HotelCard'
import PriceChart from '../ui/PriceChart'

interface TripPlan {
  id: string
  name: string
  totalPrice: number
  duration: string
  highlights: string[]
  flights: any
  hotel: any
  activities: string[]
}

export default function TripPlanning() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>('plan-a')
  const [autoBook, setAutoBook] = useState(false)

  const plans: TripPlan[] = [
    {
      id: 'plan-a',
      name: 'Budget Explorer',
      totalPrice: 1299,
      duration: '7 days, 6 nights',
      highlights: ['Direct flights', 'Central location', 'Free breakfast'],
      flights: {
        airline: 'United Airlines',
        logo: '',
        departure: { time: '10:30', airport: 'JFK', code: 'JFK' },
        arrival: { time: '18:45', airport: 'Tokyo Narita', code: 'NRT' },
        duration: '14h 15m',
        price: 599,
        stops: 0,
        amenities: ['wifi', 'meal', 'luggage'],
        class: 'economy',
      },
      hotel: {
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        name: 'Tokyo Central Hotel',
        location: 'Shibuya, Tokyo',
        rating: 4.5,
        reviews: 892,
        price: 120,
        amenities: ['wifi', 'breakfast', 'gym'],
      },
      activities: ['Senso-ji Temple', 'Shibuya Crossing', 'Tokyo Tower'],
    },
    {
      id: 'plan-b',
      name: 'Comfort Plus',
      totalPrice: 2499,
      duration: '7 days, 6 nights',
      highlights: ['Business class', 'Luxury hotel', 'Private tours'],
      flights: {
        airline: 'ANA',
        logo: '',
        departure: { time: '14:00', airport: 'JFK', code: 'JFK' },
        arrival: { time: '17:30', airport: 'Tokyo Haneda', code: 'HND' },
        duration: '13h 30m',
        price: 1299,
        stops: 0,
        amenities: ['wifi', 'meal', 'luggage'],
        class: 'business',
      },
      hotel: {
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
        name: 'Grand Hyatt Tokyo',
        location: 'Roppongi, Tokyo',
        rating: 4.9,
        reviews: 1523,
        price: 350,
        amenities: ['wifi', 'breakfast', 'gym'],
        featured: true,
      },
      activities: ['Private sushi class', 'Mt. Fuji tour', 'Tea ceremony'],
    },
    {
      id: 'plan-c',
      name: 'Ultimate Experience',
      totalPrice: 4999,
      duration: '10 days, 9 nights',
      highlights: ['First class', '5-star resort', 'VIP experiences'],
      flights: {
        airline: 'Japan Airlines',
        logo: '',
        departure: { time: '11:00', airport: 'JFK', code: 'JFK' },
        arrival: { time: '15:00', airport: 'Tokyo Haneda', code: 'HND' },
        duration: '13h 00m',
        price: 2499,
        stops: 0,
        amenities: ['wifi', 'meal', 'luggage'],
        class: 'first',
      },
      hotel: {
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
        name: 'The Ritz-Carlton Tokyo',
        location: 'Midtown, Tokyo',
        rating: 5.0,
        reviews: 2341,
        price: 650,
        amenities: ['wifi', 'breakfast', 'gym'],
        featured: true,
      },
      activities: ['Michelin-star dining', 'Private helicopter tour', 'Luxury spa', 'Sumo tournament VIP'],
    },
  ]

  const priceData = [
    { date: 'Nov 1', price: 1400 },
    { date: 'Nov 5', price: 1350 },
    { date: 'Nov 10', price: 1299 },
    { date: 'Nov 15', price: 1450 },
    { date: 'Nov 20', price: 1380 },
    { date: 'Nov 25', price: 1299 },
    { date: 'Nov 30', price: 1320 },
  ]

  const selectedPlanData = plans.find(p => p.id === selectedPlan)

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
            AI-Generated Plans
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Your Perfect Tokyo Trip</h1>
          <p className="text-xl text-gray-600">Compare AI-generated itineraries and choose your favorite</p>

          {/* Trip Details */}
          <div className="flex items-center justify-center gap-6 mt-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Dec 15 - Dec 22, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>2 Travelers</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Tokyo, Japan</span>
            </div>
          </div>
        </motion.div>

        {/* Plan Comparison Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              selected={selectedPlan === plan.id}
              onSelect={() => setSelectedPlan(plan.id)}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Auto-Book Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card variant="premium" className="bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-primary p-3 rounded-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Enable Auto-Booking</h3>
                  <p className="text-sm text-gray-600">Let AI automatically book when prices drop below your target</p>
                </div>
              </div>
              <button
                onClick={() => setAutoBook(!autoBook)}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  autoBook ? 'bg-gradient-primary' : 'bg-gray-300'
                }`}
              >
                <motion.div
                  animate={{ x: autoBook ? 32 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow"
                />
              </button>
            </div>
          </Card>
        </motion.div>

        {/* Detailed Plan View */}
        <AnimatePresence mode="wait">
          {selectedPlanData && (
            <motion.div
              key={selectedPlan}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Price Chart */}
              <PriceChart
                data={priceData}
                currentPrice={selectedPlanData.totalPrice}
                bestPrice={1299}
                predictedPrice={1250}
              />

              {/* Flight Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">✈️ Your Flight</h2>
                <FlightCard {...selectedPlanData.flights} />
              </div>

              {/* Hotel Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">🏨 Your Stay</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <HotelCard {...selectedPlanData.hotel} />
                  <Card variant="premium">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {selectedPlanData.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="bg-green-100 p-1 rounded-full">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-3">Activities</h4>
                      <div className="space-y-2">
                        {selectedPlanData.activities.map((activity, i) => (
                          <div key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-4 pt-8">
                <Button variant="secondary" size="lg" icon={<Heart className="w-5 h-5" />}>
                  Save for Later
                </Button>
                <Button variant="secondary" size="lg" icon={<Share2 className="w-5 h-5" />}>
                  Share
                </Button>
                <Button variant="gradient" size="lg" icon={<Sparkles className="w-5 h-5" />}>
                  Book This Trip - ${selectedPlanData.totalPrice}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function PlanCard({ plan, selected, onSelect, delay }: any) {
  const recommended = plan.id === 'plan-b'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -8 }}
      onClick={onSelect}
      className={`
        relative cursor-pointer rounded-3xl p-6 transition-all
        ${selected
          ? 'bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-500 shadow-glow-purple'
          : 'bg-white border-2 border-gray-200 hover:border-gray-300 shadow-soft'
        }
      `}
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-sunset text-white px-4 py-1 rounded-full text-xs font-semibold">
          Recommended
        </div>
      )}

      {selected && (
        <div className="absolute top-4 right-4 bg-gradient-primary text-white p-1 rounded-full">
          <Check className="w-5 h-5" />
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <div className="text-4xl font-bold text-gradient mb-1">${plan.totalPrice}</div>
        <div className="text-sm text-gray-600">{plan.duration}</div>
      </div>

      <ul className="space-y-2 mb-6">
        {plan.highlights.map((highlight: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
            <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
            {highlight}
          </li>
        ))}
      </ul>

      <Button
        variant={selected ? 'primary' : 'secondary'}
        size="md"
        fullWidth
      >
        {selected ? 'Selected' : 'Select Plan'}
      </Button>
    </motion.div>
  )
}
