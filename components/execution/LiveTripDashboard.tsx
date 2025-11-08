'use client'

import { motion } from 'framer-motion'
import { Plane, Hotel, MapPin, Clock, AlertCircle, CheckCircle, Navigation, Phone, MessageCircle } from 'lucide-react'
import { Card } from '../ui/Card'
import Button from '../ui/Button'

export default function LiveTripDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to Tokyo! 🇯🇵</h1>
              <p className="text-gray-600">Your AI assistant is monitoring your trip in real-time</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Local Time</div>
              <div className="text-2xl font-bold text-gray-900">3:45 PM</div>
              <div className="text-sm text-gray-600">Dec 15, 2024</div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Status */}
            <Card variant="premium" className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <div className="flex items-center gap-4">
                <div className="bg-green-500 p-3 rounded-2xl">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">All Systems Go!</h3>
                  <p className="text-gray-700">Your flight landed on time. Hotel check-in ready at 4 PM.</p>
                </div>
              </div>
            </Card>

            {/* Flight Status */}
            <Card variant="premium">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-ocean p-2 rounded-xl">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Flight Status</h3>
                  <p className="text-sm text-gray-600">UA 7915 • Landed</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Departure</div>
                  <div className="text-2xl font-bold text-gray-900">10:30 AM</div>
                  <div className="text-sm text-gray-600">JFK, New York</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Arrival</div>
                  <div className="text-2xl font-bold text-gray-900">3:15 PM</div>
                  <div className="text-sm text-gray-600">NRT, Tokyo</div>
                  <div className="inline-flex items-center gap-1 text-xs text-green-600 font-semibold mt-1">
                    <CheckCircle className="w-3 h-3" />
                    On time
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-4">
                <div className="font-semibold text-gray-900 mb-1">Baggage Claim</div>
                <div className="text-sm text-gray-600">Carousel 5 • All bags collected ✓</div>
              </div>
            </Card>

            {/* Hotel Information */}
            <Card variant="premium">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-2 rounded-xl">
                  <Hotel className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Your Hotel</h3>
                  <p className="text-sm text-gray-600">Tokyo Central Hotel</p>
                </div>
              </div>

              <div className="space-y-4">
                <InfoRow icon={MapPin} label="Address" value="1-1-1 Shibuya, Tokyo" />
                <InfoRow icon={Clock} label="Check-in Time" value="4:00 PM - Ready Now!" />
                <InfoRow icon={Phone} label="Contact" value="+81 3-1234-5678" />
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button variant="secondary" size="sm" icon={<Navigation className="w-4 h-4" />}>
                  Get Directions
                </Button>
                <Button variant="secondary" size="sm" icon={<Phone className="w-4 h-4" />}>
                  Call Hotel
                </Button>
              </div>
            </Card>

            {/* Today's Itinerary */}
            <Card variant="premium">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Today's Plans</h3>
              <div className="space-y-4">
                <ItineraryItem
                  time="4:00 PM"
                  title="Hotel Check-in"
                  location="Tokyo Central Hotel"
                  status="upcoming"
                />
                <ItineraryItem
                  time="7:00 PM"
                  title="Dinner Reservation"
                  location="Sushi Saito"
                  status="confirmed"
                />
                <ItineraryItem
                  time="9:00 PM"
                  title="Shibuya Crossing Visit"
                  location="Shibuya Station"
                  status="optional"
                />
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Assistant */}
            <Card variant="premium" className="bg-gradient-primary text-white">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                <p className="text-white/90 text-sm">Your AI assistant is here 24/7</p>
              </div>
              <Button variant="secondary" size="md" fullWidth>
                Chat with AI
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card variant="premium">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <QuickAction label="View Boarding Pass" />
                <QuickAction label="Hotel Confirmation" />
                <QuickAction label="Local Transport" />
                <QuickAction label="Emergency Contacts" />
                <QuickAction label="Travel Insurance" />
              </div>
            </Card>

            {/* Weather */}
            <Card variant="premium">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Local Weather</h3>
              <div className="text-center">
                <div className="text-5xl mb-2">⛅</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">18°C</div>
                <div className="text-gray-600">Partly Cloudy</div>
                <div className="text-sm text-gray-500 mt-2">High: 22° • Low: 15°</div>
              </div>
            </Card>

            {/* Alerts */}
            <Card variant="premium" className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">Travel Tip</div>
                  <div className="text-sm text-gray-700">
                    IC cards are recommended for public transport. Get one at the airport.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-4 h-4 text-gray-400 flex-shrink-0" />
      <div className="flex-1">
        <div className="text-xs text-gray-500">{label}</div>
        <div className="text-sm font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  )
}

function ItineraryItem({ time, title, location, status }: any) {
  const statusColors = {
    upcoming: 'border-blue-200 bg-blue-50',
    confirmed: 'border-green-200 bg-green-50',
    optional: 'border-gray-200 bg-gray-50',
  }

  const statusIcons = {
    upcoming: <Clock className="w-4 h-4 text-blue-600" />,
    confirmed: <CheckCircle className="w-4 h-4 text-green-600" />,
    optional: <MapPin className="w-4 h-4 text-gray-600" />,
  }

  return (
    <div className={`border-2 rounded-2xl p-4 ${statusColors[status as keyof typeof statusColors]}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {statusIcons[status as keyof typeof statusIcons]}
        </div>
        <div className="flex-1">
          <div className="font-bold text-gray-900">{time}</div>
          <div className="font-semibold text-gray-800 mt-1">{title}</div>
          <div className="text-sm text-gray-600 mt-0.5">{location}</div>
        </div>
      </div>
    </div>
  )
}

function QuickAction({ label }: { label: string }) {
  return (
    <motion.button
      whileHover={{ x: 4 }}
      className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
    >
      {label}
    </motion.button>
  )
}
