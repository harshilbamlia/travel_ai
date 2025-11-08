'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  Calendar,
  MapPin,
  Users,
  Plane,
  Hotel,
  Download,
  CalendarPlus,
  Mail,
  Share2,
  ArrowRight,
  Sparkles,
  Clock,
  FileText
} from 'lucide-react'
import { Card } from '../ui/Card'
import Button from '../ui/Button'

interface BookingConfirmationProps {
  bookingReference: string
  destination: string
  dates: string
  travelers: number
  totalPrice: number
  email: string
  onViewTripDetails: () => void
  onBackToDashboard: () => void
}

export default function BookingConfirmation({
  bookingReference,
  destination,
  dates,
  travelers,
  totalPrice,
  email,
  onViewTripDetails,
  onBackToDashboard,
}: BookingConfirmationProps) {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
      />

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: -20,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: window.innerHeight + 100,
                rotate: Math.random() * 360,
                opacity: 0,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: 'linear',
              }}
              className={`absolute w-3 h-3 ${
                ['bg-purple-500', 'bg-blue-500', 'bg-pink-500', 'bg-yellow-500', 'bg-green-500'][i % 5]
              }`}
              style={{
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-50" />
            <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 w-32 h-32 rounded-full flex items-center justify-center shadow-glow-green">
              <CheckCircle className="w-20 h-20 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            🎉 Trip Booked!
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Your adventure to {destination} is confirmed
          </p>
          <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-soft">
            <div className="text-sm text-gray-500 mb-1">Booking Reference</div>
            <div className="text-3xl font-bold text-gradient font-mono">{bookingReference}</div>
          </div>
        </motion.div>

        {/* Trip Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="premium" className="bg-gradient-to-r from-blue-50 to-purple-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary-600" />
              Trip Summary
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <SummaryItem
                icon={<MapPin className="w-5 h-5" />}
                label="Destination"
                value={destination}
              />
              <SummaryItem
                icon={<Calendar className="w-5 h-5" />}
                label="Travel Dates"
                value={dates}
              />
              <SummaryItem
                icon={<Users className="w-5 h-5" />}
                label="Travelers"
                value={`${travelers} ${travelers === 1 ? 'Person' : 'People'}`}
              />
              <SummaryItem
                icon={<Sparkles className="w-5 h-5" />}
                label="Total Paid"
                value={`$${totalPrice.toLocaleString()}`}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <QuickInfoCard
                icon={<Plane className="w-6 h-6 text-blue-600" />}
                title="Flights Confirmed"
                description="E-tickets sent to your email"
                color="blue"
              />
              <QuickInfoCard
                icon={<Hotel className="w-6 h-6 text-purple-600" />}
                title="Hotel Reserved"
                description="Confirmation in your inbox"
                color="purple"
              />
            </div>
          </Card>
        </motion.div>

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <Card variant="premium">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Next?</h2>

            <div className="space-y-4">
              <NextStepItem
                number={1}
                icon={<Mail className="w-5 h-5" />}
                title="Check Your Email"
                description={`Confirmation and tickets sent to ${email}`}
                color="green"
              />
              <NextStepItem
                number={2}
                icon={<FileText className="w-5 h-5" />}
                title="Review Your Itinerary"
                description="Check your detailed day-by-day plan"
                color="blue"
              />
              <NextStepItem
                number={3}
                icon={<Clock className="w-5 h-5" />}
                title="Prepare for Departure"
                description="Check passport, visas, and travel requirements"
                color="purple"
              />
            </div>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="space-y-4"
        >
          <div className="grid md:grid-cols-3 gap-4">
            <Button
              variant="secondary"
              size="lg"
              icon={<Download className="w-5 h-5" />}
              fullWidth
            >
              Download PDF
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<CalendarPlus className="w-5 h-5" />}
              fullWidth
            >
              Add to Calendar
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Share2 className="w-5 h-5" />}
              fullWidth
            >
              Share Trip
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="gradient"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
              onClick={onViewTripDetails}
              fullWidth
            >
              View Trip Details & Itinerary
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="text-center">
            <button
              onClick={onBackToDashboard}
              className="text-primary-600 hover:text-primary-700 font-medium underline"
            >
              Back to Dashboard
            </button>
          </div>
        </motion.div>

        {/* Support Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <Card variant="float" className="bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-900">Need Help?</div>
                  <div className="text-xs text-gray-600">24/7 Support Available</div>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-300 hidden sm:block" />
              <div className="text-sm">
                📧 <a href="mailto:support@travelai.com" className="text-primary-600 hover:underline">support@travelai.com</a>
              </div>
              <div className="h-8 w-px bg-gray-300 hidden sm:block" />
              <div className="text-sm">
                📞 <a href="tel:+1-800-TRAVEL" className="text-primary-600 hover:underline">1-800-TRAVEL</a>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Fine Print */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-8 text-center text-xs text-gray-500"
        >
          <p>
            Free cancellation up to 24 hours before departure. See{' '}
            <a href="#" className="text-primary-600 hover:underline">Terms & Conditions</a>.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

function SummaryItem({ icon, label, value }: {
  icon: any
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-br from-primary-100 to-secondary-100 p-3 rounded-xl">
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-lg font-bold text-gray-900">{value}</div>
      </div>
    </div>
  )
}

function QuickInfoCard({ icon, title, description, color }: {
  icon: any
  title: string
  description: string
  color: 'blue' | 'purple'
}) {
  const colors = {
    blue: 'from-blue-50 to-blue-100 border-blue-200',
    purple: 'from-purple-50 to-purple-100 border-purple-200',
  }

  return (
    <div className={`bg-gradient-to-br ${colors[color]} border-2 p-4 rounded-2xl`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <div className="font-bold text-gray-900 mb-1">{title}</div>
          <div className="text-sm text-gray-600">{description}</div>
        </div>
      </div>
    </div>
  )
}

function NextStepItem({ number, icon, title, description, color }: {
  number: number
  icon: any
  title: string
  description: string
  color: 'green' | 'blue' | 'purple'
}) {
  const colors = {
    green: 'from-green-400 to-emerald-500',
    blue: 'from-blue-400 to-cyan-500',
    purple: 'from-purple-400 to-pink-500',
  }

  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
      <div className={`bg-gradient-to-br ${colors[color]} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          {icon}
          <h3 className="font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
