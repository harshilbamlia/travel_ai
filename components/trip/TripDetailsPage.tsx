'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  MapPin,
  Plane,
  Hotel,
  Sparkles,
  Download,
  Share2,
  Edit,
  X,
  Clock,
  Users,
  DollarSign,
  FileText,
  QrCode,
  Sun,
  Cloud,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Navigation,
  Phone,
  Mail
} from 'lucide-react'
import { Card } from '../ui/Card'
import Button from '../ui/Button'
import FlightCard from '../ui/FlightCard'
import HotelCard from '../ui/HotelCard'

interface TripDetailsPageProps {
  bookingReference: string
  destination: string
  dates: string
  travelers: number
  totalPrice: number
  trip: {
    flights: any
    hotel: any
    itinerary: any[]
  }
  onBack: () => void
}

export default function TripDetailsPage({
  bookingReference,
  destination,
  dates,
  travelers,
  totalPrice,
  trip,
  onBack,
}: TripDetailsPageProps) {
  const [expandedSection, setExpandedSection] = useState<string>('')
  const [showCancelModal, setShowCancelModal] = useState(false)

  // Calculate days until trip
  const tripDate = new Date(dates.split(' - ')[0])
  const today = new Date()
  const daysUntil = Math.ceil((tripDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? '' : section)
  }

  const weatherForecast = [
    { day: 'Mon', icon: Sun, temp: '75°F', condition: 'Sunny' },
    { day: 'Tue', icon: Sun, temp: '78°F', condition: 'Sunny' },
    { day: 'Wed', icon: Cloud, temp: '72°F', condition: 'Cloudy' },
    { day: 'Thu', icon: Sun, temp: '76°F', condition: 'Sunny' },
    { day: 'Fri', icon: Cloud, temp: '74°F', condition: 'Cloudy' },
  ]

  const documents = [
    { name: 'Flight E-Tickets', type: 'PDF', size: '245 KB', status: 'ready' },
    { name: 'Hotel Confirmation', type: 'PDF', size: '189 KB', status: 'ready' },
    { name: 'Travel Insurance', type: 'PDF', size: '312 KB', status: 'ready' },
    { name: 'Activity Vouchers', type: 'PDF', size: '456 KB', status: 'ready' },
  ]

  const localTips = [
    { title: 'Best time to visit attractions', tip: 'Early morning (7-9 AM) to avoid crowds' },
    { title: 'Transportation', tip: 'Download the local metro app for easy navigation' },
    { title: 'Language', tip: 'Learn basic phrases: Hello, Thank you, How much?' },
    { title: 'Currency', tip: 'Best exchange rates at local banks, avoid airport kiosks' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <button
            onClick={onBack}
            className="text-primary-600 hover:text-primary-700 font-medium mb-4 flex items-center gap-2"
          >
            ← Back to Dashboard
          </button>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {destination} Trip
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{dates}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">{travelers} {travelers === 1 ? 'Traveler' : 'Travelers'}</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft">
                  <span className="text-sm font-semibold text-gray-700">Ref:</span>
                  <span className="font-mono font-bold text-primary-600">{bookingReference}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="secondary" size="md" icon={<Download className="w-5 h-5" />}>
                Download
              </Button>
              <Button variant="secondary" size="md" icon={<Share2 className="w-5 h-5" />}>
                Share
              </Button>
              <Button variant="secondary" size="md" icon={<Edit className="w-5 h-5" />}>
                Modify
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Countdown Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card variant="premium" className="bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-primary p-4 rounded-2xl">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {daysUntil > 0 ? `${daysUntil} Days Until Departure!` : 'Your Trip is Today!'}
                      </h3>
                      <p className="text-gray-600">Get ready for an amazing adventure</p>
                    </div>
                  </div>
                  {daysUntil > 0 && (
                    <div className="text-right">
                      <div className="text-5xl font-bold text-gradient">{daysUntil}</div>
                      <div className="text-sm text-gray-600">days to go</div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>

            {/* Flight Details */}
            <CollapsibleSection
              title="Flight Details"
              icon={<Plane className="w-5 h-5" />}
              expanded={expandedSection === 'flights'}
              onToggle={() => toggleSection('flights')}
              delay={0.2}
            >
              <div className="space-y-4">
                <FlightCard {...trip.flights} />
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-2xl">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-green-900">E-Tickets Confirmed</div>
                    <div className="text-sm text-green-700">Check-in opens 24 hours before departure</div>
                  </div>
                  <Button variant="secondary" size="sm" icon={<QrCode className="w-4 h-4" />}>
                    QR Code
                  </Button>
                </div>
              </div>
            </CollapsibleSection>

            {/* Hotel Details */}
            <CollapsibleSection
              title="Hotel Reservation"
              icon={<Hotel className="w-5 h-5" />}
              expanded={expandedSection === 'hotel'}
              onToggle={() => toggleSection('hotel')}
              delay={0.3}
            >
              <div className="space-y-4">
                <HotelCard {...trip.hotel} />
                <div className="grid grid-cols-2 gap-4">
                  <InfoBox
                    label="Check-in"
                    value="3:00 PM"
                    icon={<Calendar className="w-4 h-4" />}
                  />
                  <InfoBox
                    label="Check-out"
                    value="12:00 PM"
                    icon={<Calendar className="w-4 h-4" />}
                  />
                  <InfoBox
                    label="Confirmation #"
                    value="HTL-98234"
                    icon={<FileText className="w-4 h-4" />}
                  />
                  <InfoBox
                    label="Room Type"
                    value="Deluxe Suite"
                    icon={<Hotel className="w-4 h-4" />}
                  />
                </div>
              </div>
            </CollapsibleSection>

            {/* Itinerary */}
            <CollapsibleSection
              title="Daily Itinerary"
              icon={<Navigation className="w-5 h-5" />}
              expanded={expandedSection === 'itinerary'}
              onToggle={() => toggleSection('itinerary')}
              delay={0.4}
            >
              <div className="space-y-4">
                {[1, 2, 3].map((day) => (
                  <DayPreview key={day} day={day} />
                ))}
                <Button variant="secondary" size="md" fullWidth>
                  View Full Itinerary →
                </Button>
              </div>
            </CollapsibleSection>

            {/* Documents */}
            <CollapsibleSection
              title="Travel Documents"
              icon={<FileText className="w-5 h-5" />}
              expanded={expandedSection === 'documents'}
              onToggle={() => toggleSection('documents')}
              delay={0.5}
            >
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <DocumentItem key={index} {...doc} />
                ))}
              </div>
            </CollapsibleSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trip Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card variant="premium">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Trip Status</h3>
                <div className="space-y-3">
                  <StatusItem
                    icon={<CheckCircle className="w-5 h-5 text-green-600" />}
                    label="Flights"
                    status="Confirmed"
                    color="green"
                  />
                  <StatusItem
                    icon={<CheckCircle className="w-5 h-5 text-green-600" />}
                    label="Hotel"
                    status="Confirmed"
                    color="green"
                  />
                  <StatusItem
                    icon={<CheckCircle className="w-5 h-5 text-green-600" />}
                    label="Activities"
                    status="Booked"
                    color="green"
                  />
                  <StatusItem
                    icon={<AlertCircle className="w-5 h-5 text-yellow-600" />}
                    label="Travel Insurance"
                    status="Pending"
                    color="yellow"
                  />
                </div>
              </Card>
            </motion.div>

            {/* Weather Forecast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="premium">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-yellow-500" />
                  Weather Forecast
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {weatherForecast.map((day, index) => {
                    const Icon = day.icon
                    return (
                      <div key={index} className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-xs text-gray-500 mb-2">{day.day}</div>
                        <Icon className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                        <div className="text-sm font-bold text-gray-900">{day.temp}</div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </motion.div>

            {/* Local Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card variant="premium">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary-500" />
                  Local Tips
                </h3>
                <div className="space-y-4">
                  {localTips.map((item, index) => (
                    <div key={index} className="pb-4 last:pb-0 last:border-0 border-b border-gray-100">
                      <div className="font-semibold text-gray-900 text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-gray-600">{item.tip}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Emergency Contacts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card variant="premium" className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Emergency Contacts</h3>
                <div className="space-y-3">
                  <ContactItem
                    icon={<Phone className="w-4 h-4" />}
                    label="24/7 Support"
                    value="+1-800-TRAVEL"
                  />
                  <ContactItem
                    icon={<Mail className="w-4 h-4" />}
                    label="Email Support"
                    value="help@travelai.com"
                  />
                </div>
              </Card>
            </motion.div>

            {/* Cancel Trip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => setShowCancelModal(true)}
                className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
              >
                Cancel Trip
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cancel Modal */}
      <CancelTripModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={() => {
          setShowCancelModal(false)
          // Handle cancellation
        }}
      />
    </div>
  )
}

function CollapsibleSection({ title, icon, expanded, onToggle, children, delay }: {
  title: string
  icon: any
  expanded: boolean
  onToggle: () => void
  children: React.ReactNode
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Card variant="premium">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between mb-4"
        >
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            {icon}
            {title}
          </h2>
          {expanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

function InfoBox({ label, value, icon }: {
  label: string
  value: string
  icon: any
}) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl">
      <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
        {icon}
        {label}
      </div>
      <div className="font-semibold text-gray-900">{value}</div>
    </div>
  )
}

function DayPreview({ day }: { day: number }) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-gradient-primary text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">
          {day}
        </div>
        <div>
          <div className="font-bold text-gray-900">Day {day}</div>
          <div className="text-sm text-gray-600">City Exploration</div>
        </div>
      </div>
      <div className="text-xs text-gray-500">
        4 activities • Breakfast & Dinner included
      </div>
    </div>
  )
}

function DocumentItem({ name, type, size, status }: {
  name: string
  type: string
  size: string
  status: string
}) {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
      <div className="bg-white p-2 rounded-lg">
        <FileText className="w-5 h-5 text-primary-600" />
      </div>
      <div className="flex-1">
        <div className="font-semibold text-gray-900 text-sm">{name}</div>
        <div className="text-xs text-gray-500">{type} • {size}</div>
      </div>
      <Button variant="secondary" size="sm" icon={<Download className="w-4 h-4" />}>
        Download
      </Button>
    </div>
  )
}

function StatusItem({ icon, label, status, color }: {
  icon: any
  label: string
  status: string
  color: 'green' | 'yellow' | 'red'
}) {
  const colors = {
    green: 'text-green-700',
    yellow: 'text-yellow-700',
    red: 'text-red-700',
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm text-gray-700">{label}</span>
      </div>
      <span className={`text-sm font-semibold ${colors[color]}`}>{status}</span>
    </div>
  )
}

function ContactItem({ icon, label, value }: {
  icon: any
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-white p-2 rounded-lg">
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-600">{label}</div>
        <div className="font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  )
}

function CancelTripModal({ isOpen, onClose, onConfirm }: {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <Card variant="premium" className="max-w-md w-full">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Cancel Trip?</h3>
                  <p className="text-gray-600">Are you sure you want to cancel this trip?</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <strong>Cancellation Policy:</strong> Free cancellation up to 24 hours before departure.
                    After that, cancellation fees may apply.
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="secondary" size="lg" fullWidth onClick={onClose}>
                  Keep Trip
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={onConfirm}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Cancel Trip
                </Button>
              </div>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
