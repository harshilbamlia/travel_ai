'use client'

import { motion } from 'framer-motion'
import { Compass, Map } from 'lucide-react'

interface WelcomeSplitChoiceProps {
  onIKnow: () => void
  onInspireMe: () => void
}

export default function WelcomeSplitChoice({ onIKnow, onInspireMe }: WelcomeSplitChoiceProps) {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.1
        }} />
      </div>

      {/* Floating decoration elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
            Where to next?
          </h1>
          <p className="text-2xl text-white/90 mb-16 max-w-3xl mx-auto">
            Let AI plan your perfect escape in seconds
          </p>
        </motion.div>

        {/* Two Choice Buttons */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* I Know Button */}
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.98 }}
            onClick={onIKnow}
            className="group relative overflow-hidden"
          >
            <div className="relative bg-white rounded-3xl p-12 shadow-float-lg hover:shadow-glow-blue transition-all duration-300">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-ocean rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Map className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                I Know Where
              </h2>
              <p className="text-gray-600 text-lg">
                Search your destination and get instant trip options
              </p>

              {/* Arrow indicator */}
              <motion.div
                className="mt-6 text-primary-600 font-semibold flex items-center justify-center gap-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Let's go
                <span>→</span>
              </motion.div>
            </div>
          </motion.button>

          {/* Inspire Me Button */}
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.98 }}
            onClick={onInspireMe}
            className="group relative overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 shadow-float-lg hover:shadow-glow-purple transition-all duration-300 border-2 border-primary-200">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-sunset rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Compass className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Inspire Me
              </h2>
              <p className="text-gray-700 text-lg">
                Let AI discover your perfect destination based on your vibe
              </p>

              {/* Arrow indicator with sparkle */}
              <motion.div
                className="mt-6 text-primary-700 font-semibold flex items-center justify-center gap-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Surprise me
                <span>✨</span>
              </motion.div>

              {/* Popular badge */}
              <div className="absolute top-4 right-4 bg-gradient-sunset text-white px-3 py-1 rounded-full text-xs font-semibold">
                Popular
              </div>
            </div>
          </motion.button>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-white/70 text-sm"
        >
          Join 100,000+ travelers who found their perfect trip with AI
        </motion.p>
      </div>
    </div>
  )
}
