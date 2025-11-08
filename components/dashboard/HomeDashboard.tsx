'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, TrendingDown, Bell, Heart, Sparkles, ArrowRight, Plane, Hotel, DollarSign } from 'lucide-react'
import SearchBar from '../ui/SearchBar'
import DestinationCard, { CompactDestinationCard } from '../ui/DestinationCard'
import { Card, FloatingCard } from '../ui/Card'
import Button from '../ui/Button'

export default function HomeDashboard() {
  const upcomingTrips = [
    {
      destination: 'Tokyo, Japan',
      dates: 'Dec 15 - Dec 22',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
      daysUntil: 12,
    },
  ]

  const recommendations = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      title: 'Santorini',
      location: 'Greece',
      rating: 4.9,
      reviews: 2453,
      price: 899,
      trending: true,
    },
    {
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      title: 'Paris',
      location: 'France',
      rating: 4.8,
      reviews: 3891,
      price: 1299,
    },
    {
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80',
      title: 'Bali',
      location: 'Indonesia',
      rating: 4.9,
      reviews: 1982,
      price: 749,
      trending: true,
    },
  ]

  const priceDrop = [
    { image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=400&q=80', title: 'Barcelona', location: 'Spain', price: 699 },
    { image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80', title: 'London', location: 'UK', price: 879 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl font-bold text-white mb-4">
              Where to next, Alex?
            </h1>
            <p className="text-xl text-white/90">
              Discover your next adventure with AI-powered recommendations
            </p>
          </motion.div>

          <SearchBar variant="hero" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Trips */}
            {upcomingTrips.length > 0 && (
              <FloatingCard>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Upcoming Trips</h2>
                  <Button variant="ghost" size="sm">
                    View All
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl h-64 cursor-pointer group"
                >
                  <img
                    src={upcomingTrips[0].image}
                    alt={upcomingTrips[0].destination}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{upcomingTrips[0].destination}</h3>
                        <div className="flex items-center gap-2 text-white/90">
                          <Calendar className="w-5 h-5" />
                          {upcomingTrips[0].dates}
                        </div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                        <div className="text-2xl font-bold">{upcomingTrips[0].daysUntil}</div>
                        <div className="text-sm">days to go</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <QuickStat icon={Plane} label="Flight" value="Confirmed" color="green" />
                  <QuickStat icon={Hotel} label="Hotel" value="Booked" color="blue" />
                  <QuickStat icon={MapPin} label="Activities" value="3 Planned" color="purple" />
                </div>
              </FloatingCard>
            )}

            {/* AI Recommendations */}
            <FloatingCard>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary-500" />
                    Personalized for You
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">Based on your preferences and past trips</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.slice(0, 2).map((rec, index) => (
                  <DestinationCard key={index} {...rec} />
                ))}
              </div>
            </FloatingCard>

            {/* Trending Destinations */}
            <FloatingCard>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Trending Destinations</h2>
                <Button variant="ghost" size="sm">
                  Explore All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <DestinationCard {...rec} />
                  </motion.div>
                ))}
              </div>
            </FloatingCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Alerts */}
            <FloatingCard>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-sunset p-2 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Price Drops</h3>
              </div>

              <div className="space-y-3">
                {priceDrop.map((item, index) => (
                  <CompactDestinationCard key={index} {...item} />
                ))}
              </div>

              <Button variant="primary" size="sm" fullWidth className="mt-4">
                Set Price Alerts
              </Button>
            </FloatingCard>

            {/* Saved Destinations */}
            <FloatingCard>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-2 rounded-lg">
                  <Heart className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Saved</h3>
              </div>

              <div className="space-y-3">
                <SavedItem title="Maldives" subtitle="Dream vacation" />
                <SavedItem title="Iceland" subtitle="Northern lights" />
                <SavedItem title="New Zealand" subtitle="Adventure trip" />
              </div>
            </FloatingCard>

            {/* Quick Actions */}
            <FloatingCard>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <QuickAction icon={Bell} label="Manage Alerts" />
                <QuickAction icon={Calendar} label="View Calendar" />
                <QuickAction icon={DollarSign} label="Budget Planner" />
                <QuickAction icon={Sparkles} label="AI Assistant" />
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </div>
  )
}

function QuickStat({ icon: Icon, label, value, color }: any) {
  const colors = {
    green: 'from-green-100 to-emerald-100 text-green-600',
    blue: 'from-blue-100 to-cyan-100 text-blue-600',
    purple: 'from-purple-100 to-pink-100 text-purple-600',
  }

  return (
    <div className={`bg-gradient-to-br ${colors[color as keyof typeof colors]} p-4 rounded-xl`}>
      <Icon className="w-5 h-5 mb-2" />
      <div className="text-xs font-medium opacity-80">{label}</div>
      <div className="text-sm font-bold">{value}</div>
    </div>
  )
}

function SavedItem({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg" />
      <div className="flex-1">
        <div className="font-semibold text-gray-900 text-sm">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
    </motion.div>
  )
}

function QuickAction({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <motion.button
      whileHover={{ x: 4 }}
      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
    >
      <Icon className="w-5 h-5 text-gray-600" />
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </motion.button>
  )
}
