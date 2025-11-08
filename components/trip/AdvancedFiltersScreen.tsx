'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Plane,
  Hotel,
  MapPinned,
  Clock,
  DollarSign,
  Star,
  Wifi,
  Coffee,
  Dumbbell,
  Wind,
  Utensils,
  Camera,
  Sparkles
} from 'lucide-react'
import Button from '../ui/Button'
import { Card } from '../ui/Card'

interface AdvancedFiltersScreenProps {
  isOpen: boolean
  onClose: () => void
  onApply: (filters: FilterSettings) => void
}

interface FilterSettings {
  flights: {
    departureTime: string[]
    airlines: string[]
    stops: string
    class: string
  }
  hotels: {
    starRating: number[]
    amenities: string[]
    distanceFromCenter: number
  }
  activities: {
    types: string[]
    duration: string
    priceRange: [number, number]
  }
  budgetSplit: {
    flights: number
    hotels: number
    activities: number
  }
}

export default function AdvancedFiltersScreen({
  isOpen,
  onClose,
  onApply,
}: AdvancedFiltersScreenProps) {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'activities' | 'budget'>('flights')

  // Flight filters
  const [departureTime, setDepartureTime] = useState<string[]>([])
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([])
  const [stops, setStops] = useState<string>('any')
  const [flightClass, setFlightClass] = useState<string>('economy')

  // Hotel filters
  const [starRating, setStarRating] = useState<number[]>([])
  const [hotelAmenities, setHotelAmenities] = useState<string[]>([])
  const [distanceFromCenter, setDistanceFromCenter] = useState<number>(10)

  // Activity filters
  const [activityTypes, setActivityTypes] = useState<string[]>([])
  const [activityDuration, setActivityDuration] = useState<string>('any')
  const [activityPriceRange, setActivityPriceRange] = useState<[number, number]>([0, 500])

  // Budget split
  const [budgetSplit, setBudgetSplit] = useState({ flights: 40, hotels: 40, activities: 20 })

  const departureTimeOptions = [
    { id: 'morning', label: 'Morning', time: '6 AM - 12 PM' },
    { id: 'afternoon', label: 'Afternoon', time: '12 PM - 6 PM' },
    { id: 'evening', label: 'Evening', time: '6 PM - 12 AM' },
    { id: 'night', label: 'Night', time: '12 AM - 6 AM' },
  ]

  const airlines = [
    'United Airlines',
    'Delta',
    'American Airlines',
    'Emirates',
    'Qatar Airways',
    'Singapore Airlines',
  ]

  const amenities = [
    { id: 'wifi', label: 'Free WiFi', icon: Wifi },
    { id: 'breakfast', label: 'Breakfast', icon: Coffee },
    { id: 'gym', label: 'Gym', icon: Dumbbell },
    { id: 'pool', label: 'Pool', icon: Wind },
  ]

  const activityTypeOptions = [
    { id: 'tours', label: 'Guided Tours', icon: Camera },
    { id: 'food', label: 'Food & Dining', icon: Utensils },
    { id: 'adventure', label: 'Adventure', icon: Sparkles },
    { id: 'cultural', label: 'Cultural', icon: MapPinned },
  ]

  const handleReset = () => {
    setDepartureTime([])
    setSelectedAirlines([])
    setStops('any')
    setFlightClass('economy')
    setStarRating([])
    setHotelAmenities([])
    setDistanceFromCenter(10)
    setActivityTypes([])
    setActivityDuration('any')
    setActivityPriceRange([0, 500])
    setBudgetSplit({ flights: 40, hotels: 40, activities: 20 })
  }

  const handleApply = () => {
    const filters: FilterSettings = {
      flights: {
        departureTime,
        airlines: selectedAirlines,
        stops,
        class: flightClass,
      },
      hotels: {
        starRating,
        amenities: hotelAmenities,
        distanceFromCenter,
      },
      activities: {
        types: activityTypes,
        duration: activityDuration,
        priceRange: activityPriceRange,
      },
      budgetSplit,
    }
    onApply(filters)
    onClose()
  }

  const toggleArrayValue = (array: string[], value: string, setter: (val: string[]) => void) => {
    if (array.includes(value)) {
      setter(array.filter(v => v !== value))
    } else {
      setter([...array, value])
    }
  }

  const toggleNumberValue = (array: number[], value: number, setter: (val: number[]) => void) => {
    if (array.includes(value)) {
      setter(array.filter(v => v !== value))
    } else {
      setter([...array, value])
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Filter Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-white shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Advanced Filters</h2>
                <p className="text-sm text-gray-600 mt-1">Customize your trip preferences</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl bg-white hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 bg-white">
              <div className="flex p-4 gap-2">
                <TabButton
                  active={activeTab === 'flights'}
                  onClick={() => setActiveTab('flights')}
                  icon={<Plane className="w-4 h-4" />}
                  label="Flights"
                />
                <TabButton
                  active={activeTab === 'hotels'}
                  onClick={() => setActiveTab('hotels')}
                  icon={<Hotel className="w-4 h-4" />}
                  label="Hotels"
                />
                <TabButton
                  active={activeTab === 'activities'}
                  onClick={() => setActiveTab('activities')}
                  icon={<MapPinned className="w-4 h-4" />}
                  label="Activities"
                />
                <TabButton
                  active={activeTab === 'budget'}
                  onClick={() => setActiveTab('budget')}
                  icon={<DollarSign className="w-4 h-4" />}
                  label="Budget"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Flights Tab */}
              {activeTab === 'flights' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Departure Time */}
                  <FilterSection title="Departure Time" icon={Clock}>
                    <div className="grid grid-cols-2 gap-3">
                      {departureTimeOptions.map((option) => (
                        <CheckboxCard
                          key={option.id}
                          checked={departureTime.includes(option.id)}
                          onChange={() => toggleArrayValue(departureTime, option.id, setDepartureTime)}
                          label={option.label}
                          sublabel={option.time}
                        />
                      ))}
                    </div>
                  </FilterSection>

                  {/* Airlines */}
                  <FilterSection title="Preferred Airlines" icon={Plane}>
                    <div className="space-y-2">
                      {airlines.map((airline) => (
                        <CheckboxItem
                          key={airline}
                          checked={selectedAirlines.includes(airline)}
                          onChange={() => toggleArrayValue(selectedAirlines, airline, setSelectedAirlines)}
                          label={airline}
                        />
                      ))}
                    </div>
                  </FilterSection>

                  {/* Stops */}
                  <FilterSection title="Number of Stops" icon={Plane}>
                    <div className="grid grid-cols-3 gap-3">
                      <RadioCard
                        checked={stops === 'any'}
                        onChange={() => setStops('any')}
                        label="Any"
                      />
                      <RadioCard
                        checked={stops === '0'}
                        onChange={() => setStops('0')}
                        label="Direct"
                      />
                      <RadioCard
                        checked={stops === '1+'}
                        onChange={() => setStops('1+')}
                        label="1+ stops"
                      />
                    </div>
                  </FilterSection>

                  {/* Class */}
                  <FilterSection title="Flight Class" icon={Sparkles}>
                    <div className="grid grid-cols-3 gap-3">
                      <RadioCard
                        checked={flightClass === 'economy'}
                        onChange={() => setFlightClass('economy')}
                        label="Economy"
                      />
                      <RadioCard
                        checked={flightClass === 'business'}
                        onChange={() => setFlightClass('business')}
                        label="Business"
                      />
                      <RadioCard
                        checked={flightClass === 'first'}
                        onChange={() => setFlightClass('first')}
                        label="First Class"
                      />
                    </div>
                  </FilterSection>
                </motion.div>
              )}

              {/* Hotels Tab */}
              {activeTab === 'hotels' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Star Rating */}
                  <FilterSection title="Star Rating" icon={Star}>
                    <div className="flex gap-3">
                      {[3, 4, 5].map((stars) => (
                        <CheckboxCard
                          key={stars}
                          checked={starRating.includes(stars)}
                          onChange={() => toggleNumberValue(starRating, stars, setStarRating)}
                          label={`${stars} Star${stars > 1 ? 's' : ''}`}
                          icon={<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
                        />
                      ))}
                    </div>
                  </FilterSection>

                  {/* Amenities */}
                  <FilterSection title="Amenities" icon={Sparkles}>
                    <div className="grid grid-cols-2 gap-3">
                      {amenities.map((amenity) => {
                        const Icon = amenity.icon
                        return (
                          <CheckboxCard
                            key={amenity.id}
                            checked={hotelAmenities.includes(amenity.id)}
                            onChange={() => toggleArrayValue(hotelAmenities, amenity.id, setHotelAmenities)}
                            label={amenity.label}
                            icon={<Icon className="w-4 h-4" />}
                          />
                        )
                      })}
                    </div>
                  </FilterSection>

                  {/* Distance from Center */}
                  <FilterSection title="Distance from City Center" icon={MapPinned}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Maximum distance</span>
                        <span className="text-lg font-bold text-primary-600">{distanceFromCenter} km</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={distanceFromCenter}
                        onChange={(e) => setDistanceFromCenter(Number(e.target.value))}
                        className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #667eea 0%, #764ba2 ${((distanceFromCenter - 1) / 19) * 100}%, #e5e7eb ${((distanceFromCenter - 1) / 19) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>1 km</span>
                        <span>20 km</span>
                      </div>
                    </div>
                  </FilterSection>
                </motion.div>
              )}

              {/* Activities Tab */}
              {activeTab === 'activities' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Activity Types */}
                  <FilterSection title="Activity Types" icon={MapPinned}>
                    <div className="grid grid-cols-2 gap-3">
                      {activityTypeOptions.map((type) => {
                        const Icon = type.icon
                        return (
                          <CheckboxCard
                            key={type.id}
                            checked={activityTypes.includes(type.id)}
                            onChange={() => toggleArrayValue(activityTypes, type.id, setActivityTypes)}
                            label={type.label}
                            icon={<Icon className="w-4 h-4" />}
                          />
                        )
                      })}
                    </div>
                  </FilterSection>

                  {/* Duration */}
                  <FilterSection title="Duration" icon={Clock}>
                    <div className="grid grid-cols-3 gap-3">
                      <RadioCard
                        checked={activityDuration === 'any'}
                        onChange={() => setActivityDuration('any')}
                        label="Any"
                      />
                      <RadioCard
                        checked={activityDuration === 'short'}
                        onChange={() => setActivityDuration('short')}
                        label="< 2 hours"
                      />
                      <RadioCard
                        checked={activityDuration === 'long'}
                        onChange={() => setActivityDuration('long')}
                        label="2+ hours"
                      />
                    </div>
                  </FilterSection>

                  {/* Price Range */}
                  <FilterSection title="Price per Activity" icon={DollarSign}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Range</span>
                        <span className="text-lg font-bold text-primary-600">
                          ${activityPriceRange[0]} - ${activityPriceRange[1]}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="500"
                        step="25"
                        value={activityPriceRange[1]}
                        onChange={(e) => setActivityPriceRange([0, Number(e.target.value)])}
                        className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #667eea 0%, #764ba2 ${(activityPriceRange[1] / 500) * 100}%, #e5e7eb ${(activityPriceRange[1] / 500) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                    </div>
                  </FilterSection>
                </motion.div>
              )}

              {/* Budget Tab */}
              {activeTab === 'budget' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <FilterSection title="Budget Distribution" icon={DollarSign}>
                    <p className="text-sm text-gray-600 mb-6">
                      Adjust how your budget is split between flights, hotels, and activities
                    </p>

                    <div className="space-y-6">
                      <BudgetSlider
                        label="Flights"
                        value={budgetSplit.flights}
                        onChange={(val) => {
                          const remaining = 100 - val
                          const hotelPercent = Math.round((budgetSplit.hotels / (budgetSplit.hotels + budgetSplit.activities)) * remaining)
                          setBudgetSplit({
                            flights: val,
                            hotels: hotelPercent,
                            activities: remaining - hotelPercent
                          })
                        }}
                        color="blue"
                      />
                      <BudgetSlider
                        label="Hotels"
                        value={budgetSplit.hotels}
                        onChange={(val) => {
                          const remaining = 100 - val
                          const flightPercent = Math.round((budgetSplit.flights / (budgetSplit.flights + budgetSplit.activities)) * remaining)
                          setBudgetSplit({
                            flights: flightPercent,
                            hotels: val,
                            activities: remaining - flightPercent
                          })
                        }}
                        color="purple"
                      />
                      <BudgetSlider
                        label="Activities"
                        value={budgetSplit.activities}
                        onChange={(val) => {
                          const remaining = 100 - val
                          const flightPercent = Math.round((budgetSplit.flights / (budgetSplit.flights + budgetSplit.hotels)) * remaining)
                          setBudgetSplit({
                            flights: flightPercent,
                            hotels: remaining - flightPercent,
                            activities: val
                          })
                        }}
                        color="green"
                      />
                    </div>

                    {/* Visual Breakdown */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-700">Total: 100%</span>
                      </div>
                      <div className="flex h-3 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-500"
                          style={{ width: `${budgetSplit.flights}%` }}
                        />
                        <div
                          className="bg-purple-500"
                          style={{ width: `${budgetSplit.hotels}%` }}
                        />
                        <div
                          className="bg-green-500"
                          style={{ width: `${budgetSplit.activities}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between mt-3 text-xs text-gray-600">
                        <span>🛫 {budgetSplit.flights}%</span>
                        <span>🏨 {budgetSplit.hotels}%</span>
                        <span>🎯 {budgetSplit.activities}%</span>
                      </div>
                    </div>
                  </FilterSection>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 bg-white flex items-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleReset}
                className="flex-1"
              >
                Reset All
              </Button>
              <Button
                variant="gradient"
                size="lg"
                onClick={handleApply}
                className="flex-1"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Apply Filters
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function TabButton({ active, onClick, icon, label }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
        active
          ? 'bg-gradient-primary text-white shadow-soft'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

function FilterSection({ title, icon: Icon, children }: any) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-primary-600" />
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  )
}

function CheckboxCard({ checked, onChange, label, sublabel, icon }: any) {
  return (
    <label
      className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
        checked
          ? 'bg-primary-50 border-2 border-primary-500'
          : 'bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 rounded text-primary-600 focus:ring-primary-500"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium text-gray-900">{label}</span>
        </div>
        {sublabel && <div className="text-xs text-gray-500 mt-1">{sublabel}</div>}
      </div>
    </label>
  )
}

function CheckboxItem({ checked, onChange, label }: any) {
  return (
    <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 rounded text-primary-600 focus:ring-primary-500"
      />
      <span className="font-medium text-gray-700">{label}</span>
    </label>
  )
}

function RadioCard({ checked, onChange, label }: any) {
  return (
    <label
      className={`flex items-center justify-center p-4 rounded-xl cursor-pointer transition-all ${
        checked
          ? 'bg-primary-50 border-2 border-primary-500'
          : 'bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
      }`}
    >
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="font-medium text-gray-900">{label}</span>
    </label>
  )
}

function BudgetSlider({ label, value, onChange, color }: any) {
  const colors = {
    blue: { bg: 'from-blue-400 to-blue-500', text: 'text-blue-600' },
    purple: { bg: 'from-purple-400 to-purple-500', text: 'text-purple-600' },
    green: { bg: 'from-green-400 to-green-500', text: 'text-green-600' },
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700">{label}</span>
        <span className={`text-lg font-bold ${colors[color].text}`}>{value}%</span>
      </div>
      <input
        type="range"
        min="10"
        max="80"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
      />
    </div>
  )
}
