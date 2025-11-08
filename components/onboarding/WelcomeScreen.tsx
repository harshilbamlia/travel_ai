'use client'

import { motion } from 'framer-motion'
import { Sparkles, Globe, Zap, Shield } from 'lucide-react'
import Button from '../ui/Button'

interface WelcomeScreenProps {
  onGetStarted: () => void
}

export default function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Planning',
      description: 'Let AI create personalized itineraries based on your preferences',
    },
    {
      icon: Globe,
      title: 'Smart Recommendations',
      description: 'Discover hidden gems and trending destinations tailored for you',
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Book flights and hotels in seconds with auto-booking',
    },
    {
      icon: Shield,
      title: 'Travel Protection',
      description: 'Real-time alerts and automatic rebooking for disruptions',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Welcome to the Future of Travel
            </motion.div>

            <h1 className="text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient-hero">Travel Smarter</span>
              <br />
              with AI
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience luxury travel planning powered by artificial intelligence.
              We handle everything from recommendations to bookings, so you can focus
              on making memories.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                variant="gradient"
                size="xl"
                onClick={onGetStarted}
                icon={<Sparkles className="w-5 h-5" />}
              >
                Get Started Free
              </Button>
              <Button
                variant="secondary"
                size="xl"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>100K+ Happy Travelers</span>
              </div>
              <div>⭐️ 4.9/5 Rating</div>
            </div>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-float-lg transition-all"
              >
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 glass rounded-3xl p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Countries' },
              { value: '10M+', label: 'Bookings' },
              { value: '$2B+', label: 'Saved' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
