'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  MapPin,
  Clock,
  Utensils,
  Camera,
  Sparkles,
  Plane,
  Hotel,
  Sun,
  Sunset,
  Moon,
  DollarSign,
  Users,
  Edit,
  Heart,
  Share2,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { Card } from '../ui/Card'
import Button from '../ui/Button'
import FlightCard from '../ui/FlightCard'
import HotelCard from '../ui/HotelCard'

interface Activity {
  time: string
  title: string
  description: string
  location: string
  duration: string
  included: boolean
  icon: 'food' | 'sight' | 'activity' | 'transport'
}

interface DayItinerary {
  day: number
  date: string
  title: string
  summary: string
  morning: Activity[]
  afternoon: Activity[]
  evening: Activity[]
  meals: string[]
  accommodation: string
}

interface DetailedItineraryViewProps {
  destination: string
  dates: string
  travelers: number
  selectedPlan: {
    name: string
    totalPrice: number
    duration: string
    flights: any
    hotel: any
  }
  onBook: () => void
  onBack: () => void
}

export default function DetailedItineraryView({
  destination,
  dates,
  travelers,
  selectedPlan,
  onBook,
  onBack,
}: DetailedItineraryViewProps) {
  const [expandedDay, setExpandedDay] = useState<number>(1)
  const [showFlights, setShowFlights] = useState(false)
  const [showHotel, setShowHotel] = useState(false)

  // Sample itinerary data
  const itinerary: DayItinerary[] = [
    {
      day: 1,
      date: 'Dec 15, 2024',
      title: 'Arrival & Check-in',
      summary: 'Arrive in paradise and settle into your hotel',
      morning: [
        {
          time: '10:30 AM',
          title: 'Depart from JFK',
          description: 'Board your flight to an amazing adventure',
          location: 'JFK Airport, New York',
          duration: '14h 15m',
          included: true,
          icon: 'transport',
        },
      ],
      afternoon: [],
      evening: [
        {
          time: '6:45 PM',
          title: 'Arrive at Destination',
          description: 'Welcome! Private transfer to your hotel',
          location: destination,
          duration: '45 min',
          included: true,
          icon: 'transport',
        },
        {
          time: '8:00 PM',
          title: 'Hotel Check-in',
          description: 'Settle into your room and freshen up',
          location: selectedPlan.hotel.name,
          duration: '30 min',
          included: true,
          icon: 'activity',
        },
        {
          time: '9:00 PM',
          title: 'Welcome Dinner',
          description: 'Traditional local cuisine at hotel restaurant',
          location: 'Hotel Restaurant',
          duration: '2 hours',
          included: true,
          icon: 'food',
        },
      ],
      meals: ['Dinner'],
      accommodation: selectedPlan.hotel.name,
    },
    {
      day: 2,
      date: 'Dec 16, 2024',
      title: 'City Exploration',
      summary: 'Discover the heart of the city with a guided tour',
      morning: [
        {
          time: '8:00 AM',
          title: 'Breakfast at Hotel',
          description: 'Continental breakfast buffet',
          location: selectedPlan.hotel.name,
          duration: '1 hour',
          included: true,
          icon: 'food',
        },
        {
          time: '9:30 AM',
          title: 'Historic Walking Tour',
          description: 'Explore ancient temples, markets, and landmarks with an expert guide',
          location: 'Old Town District',
          duration: '3 hours',
          included: true,
          icon: 'sight',
        },
      ],
      afternoon: [
        {
          time: '1:00 PM',
          title: 'Local Restaurant Lunch',
          description: 'Authentic street food and local specialties',
          location: 'Downtown Food Quarter',
          duration: '1.5 hours',
          included: false,
          icon: 'food',
        },
        {
          time: '3:00 PM',
          title: 'Museum & Art Gallery',
          description: 'Immerse yourself in local culture and history',
          location: 'National Museum',
          duration: '2 hours',
          included: true,
          icon: 'sight',
        },
      ],
      evening: [
        {
          time: '6:00 PM',
          title: 'Sunset Viewpoint',
          description: 'Panoramic city views from the famous viewpoint',
          location: 'Sky Tower',
          duration: '1 hour',
          included: true,
          icon: 'sight',
        },
        {
          time: '8:00 PM',
          title: 'Dinner at Hotel',
          description: 'Relax with dinner at the hotel',
          location: selectedPlan.hotel.name,
          duration: '2 hours',
          included: true,
          icon: 'food',
        },
      ],
      meals: ['Breakfast', 'Dinner'],
      accommodation: selectedPlan.hotel.name,
    },
    {
      day: 3,
      date: 'Dec 17, 2024',
      title: 'Adventure Day',
      summary: 'Thrilling outdoor activities and nature exploration',
      morning: [
        {
          time: '7:00 AM',
          title: 'Early Breakfast',
          description: 'Quick breakfast before the adventure',
          location: selectedPlan.hotel.name,
          duration: '45 min',
          included: true,
          icon: 'food',
        },
        {
          time: '8:00 AM',
          title: 'Mountain Hiking Tour',
          description: 'Guided hike through scenic trails with breathtaking views',
          location: 'National Park',
          duration: '4 hours',
          included: true,
          icon: 'activity',
        },
      ],
      afternoon: [
        {
          time: '1:00 PM',
          title: 'Picnic Lunch',
          description: 'Enjoy a packed lunch with mountain views',
          location: 'Summit Viewpoint',
          duration: '1 hour',
          included: true,
          icon: 'food',
        },
        {
          time: '2:30 PM',
          title: 'Waterfall Visit',
          description: 'Swimming and relaxation at the natural waterfall',
          location: 'Hidden Waterfall',
          duration: '2 hours',
          included: true,
          icon: 'activity',
        },
      ],
      evening: [
        {
          time: '6:00 PM',
          title: 'Return to Hotel',
          description: 'Relax and refresh after an adventure-filled day',
          location: selectedPlan.hotel.name,
          duration: '1 hour',
          included: true,
          icon: 'transport',
        },
        {
          time: '8:00 PM',
          title: 'Free Evening',
          description: 'Explore local nightlife or relax at hotel',
          location: 'Your Choice',
          duration: '3 hours',
          included: false,
          icon: 'activity',
        },
      ],
      meals: ['Breakfast', 'Lunch'],
      accommodation: selectedPlan.hotel.name,
    },
  ]

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? -1 : day)
  }

  const iconMap = {
    food: Utensils,
    sight: Camera,
    activity: Sparkles,
    transport: Plane,
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
            {selectedPlan.name}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Your Day-by-Day Itinerary
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {destination} • {dates}
          </p>

          {/* Quick Stats */}
          <div className="flex items-center justify-center gap-8 text-gray-600 flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">{selectedPlan.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">{travelers} {travelers === 1 ? 'Traveler' : 'Travelers'}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span className="font-medium">${selectedPlan.totalPrice.toLocaleString()} Total</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Itinerary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Flight & Hotel Cards */}
            <div className="space-y-4">
              <button
                onClick={() => setShowFlights(!showFlights)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-ocean p-2 rounded-xl">
                    <Plane className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">Your Flights</div>
                    <div className="text-sm text-gray-600">{selectedPlan.flights.airline}</div>
                  </div>
                </div>
                {showFlights ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>

              <AnimatePresence>
                {showFlights && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <FlightCard {...selectedPlan.flights} />
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setShowHotel(!showHotel)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-sunset p-2 rounded-xl">
                    <Hotel className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">Your Hotel</div>
                    <div className="text-sm text-gray-600">{selectedPlan.hotel.name}</div>
                  </div>
                </div>
                {showHotel ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>

              <AnimatePresence>
                {showHotel && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <HotelCard {...selectedPlan.hotel} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Day-by-Day Timeline */}
            <div className="space-y-4">
              {itinerary.map((day) => (
                <DayCard
                  key={day.day}
                  day={day}
                  expanded={expandedDay === day.day}
                  onToggle={() => toggleDay(day.day)}
                  iconMap={iconMap}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Summary */}
            <Card variant="premium" className="sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Trip Summary</h3>

              <div className="space-y-4 mb-6">
                <PriceRow label="Flights" value={`$${(selectedPlan.flights.price * travelers).toLocaleString()}`} />
                <PriceRow label={`Hotel (6 nights)`} value={`$${(selectedPlan.hotel.price * 6).toLocaleString()}`} />
                <PriceRow label="Activities & Tours" value="$450" />
                <PriceRow label="Meals Included" value="Incl." />
              </div>

              <div className="h-px bg-gray-200 my-6" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-3xl font-bold text-gradient">
                  ${selectedPlan.totalPrice.toLocaleString()}
                </span>
              </div>

              <div className="space-y-3">
                <Button
                  variant="gradient"
                  size="lg"
                  fullWidth
                  icon={<Sparkles className="w-5 h-5" />}
                  onClick={onBook}
                >
                  Book This Trip
                </Button>

                <div className="grid grid-cols-3 gap-2">
                  <Button variant="secondary" size="sm" icon={<Heart className="w-4 h-4" />} fullWidth>
                    Save
                  </Button>
                  <Button variant="secondary" size="sm" icon={<Share2 className="w-4 h-4" />} fullWidth>
                    Share
                  </Button>
                  <Button variant="secondary" size="sm" icon={<Edit className="w-4 h-4" />} fullWidth>
                    Edit
                  </Button>
                </div>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Free cancellation up to 24 hours before departure
              </p>
            </Card>

            {/* What's Included */}
            <Card variant="premium">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-3">
                <IncludedItem text="Round-trip flights" />
                <IncludedItem text="6 nights accommodation" />
                <IncludedItem text="Daily breakfast" />
                <IncludedItem text="All guided tours" />
                <IncludedItem text="Airport transfers" />
                <IncludedItem text="Travel insurance" />
                <IncludedItem text="24/7 Support" />
              </ul>
            </Card>
          </div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={onBack}
          >
            ← Back to Options
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

function DayCard({ day, expanded, onToggle, iconMap }: any) {
  const timeOfDayIcons = {
    morning: Sun,
    afternoon: Sunset,
    evening: Moon,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl shadow-soft overflow-hidden"
    >
      {/* Day Header */}
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="bg-gradient-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center flex-col">
            <div className="text-xs font-medium opacity-90">Day</div>
            <div className="text-2xl font-bold">{day.day}</div>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
            <p className="text-sm text-gray-600">{day.date}</p>
            <p className="text-sm text-gray-500 mt-1">{day.summary}</p>
          </div>
        </div>
        {expanded ? <ChevronUp className="w-6 h-6 text-gray-400" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
      </button>

      {/* Day Details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-100"
          >
            <div className="p-6 space-y-8">
              {/* Morning */}
              {day.morning.length > 0 && (
                <TimeSection
                  title="Morning"
                  icon={timeOfDayIcons.morning}
                  activities={day.morning}
                  iconMap={iconMap}
                />
              )}

              {/* Afternoon */}
              {day.afternoon.length > 0 && (
                <TimeSection
                  title="Afternoon"
                  icon={timeOfDayIcons.afternoon}
                  activities={day.afternoon}
                  iconMap={iconMap}
                />
              )}

              {/* Evening */}
              {day.evening.length > 0 && (
                <TimeSection
                  title="Evening"
                  icon={timeOfDayIcons.evening}
                  activities={day.evening}
                  iconMap={iconMap}
                />
              )}

              {/* Day Summary */}
              <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">Meals Included</div>
                  <div className="flex flex-wrap gap-2">
                    {day.meals.map((meal: string, i: number) => (
                      <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {meal}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">Accommodation</div>
                  <div className="text-sm text-gray-600">{day.accommodation}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function TimeSection({ title, icon: Icon, activities, iconMap }: any) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-primary-600" />
        <h4 className="font-bold text-gray-900">{title}</h4>
      </div>

      <div className="space-y-4 pl-4 border-l-2 border-primary-200">
        {activities.map((activity: Activity, i: number) => (
          <ActivityItem key={i} activity={activity} iconMap={iconMap} />
        ))}
      </div>
    </div>
  )
}

function ActivityItem({ activity, iconMap }: any) {
  const ActivityIcon = iconMap[activity.icon]

  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full border-2 border-white" />
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
            <ActivityIcon className="w-4 h-4 text-primary-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h5 className="font-semibold text-gray-900">{activity.title}</h5>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activity.duration}
                  </span>
                </div>
              </div>
              {activity.included && (
                <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium">
                  Included
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <MapPin className="w-3 h-3" />
              {activity.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-gray-700">
      <span className="text-sm">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  )
}

function IncludedItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-sm text-gray-700">
      <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
        <Sparkles className="w-3 h-3 text-green-600" />
      </div>
      {text}
    </li>
  )
}
