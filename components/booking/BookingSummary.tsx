'use client'

import { motion } from 'framer-motion'
import { Plane, Hotel, Calendar, Users, MapPin, CreditCard, Shield, Check } from 'lucide-react'
import { Card } from '../ui/Card'
import Button from '../ui/Button'
import Input from '../ui/Input'

export default function BookingSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Complete Your Booking</h1>
          <p className="text-xl text-gray-600">You're just one step away from your dream trip</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Traveler Information */}
            <Card variant="premium">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Traveler Information</h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="First Name" placeholder="John" />
                  <Input label="Last Name" placeholder="Doe" />
                </div>
                <Input label="Email" type="email" placeholder="john@example.com" />
                <Input label="Phone" type="tel" placeholder="+1 (555) 123-4567" />
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Date of Birth" type="date" />
                  <Input label="Passport Number" placeholder="ABC123456" />
                </div>
              </div>
            </Card>

            {/* Payment Information */}
            <Card variant="premium">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-primary p-2 rounded-xl">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
              </div>

              <div className="space-y-4">
                <Input
                  label="Card Number"
                  placeholder="1234 5678 9012 3456"
                  icon={<CreditCard className="w-5 h-5" />}
                />
                <Input label="Cardholder Name" placeholder="John Doe" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Expiry Date" placeholder="MM/YY" />
                  <Input label="CVV" placeholder="123" />
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">Secure Payment</div>
                  <div className="text-xs text-gray-600">Your payment information is encrypted and secure</div>
                </div>
              </div>
            </Card>

            {/* Terms & Conditions */}
            <Card variant="premium">
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span className="text-sm text-gray-700">
                    I agree to the <a href="#" className="text-primary-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-primary-600 hover:underline">Cancellation Policy</a>
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span className="text-sm text-gray-700">
                    Subscribe to receive travel deals and updates
                  </span>
                </label>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card variant="premium" className="sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

              {/* Trip Details */}
              <div className="space-y-4 mb-6">
                <TripDetail icon={MapPin} label="Destination" value="Tokyo, Japan" />
                <TripDetail icon={Calendar} label="Dates" value="Dec 15 - Dec 22" />
                <TripDetail icon={Users} label="Travelers" value="2 Adults" />
              </div>

              <div className="h-px bg-gray-200 my-6" />

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <PriceRow icon={Plane} label="Flights (2 passengers)" value="$1,198" />
                <PriceRow icon={Hotel} label="Hotel (6 nights)" value="$720" />
                <PriceRow label="Activities & Tours" value="$250" />
                <PriceRow label="Service Fee" value="$50" />
              </div>

              <div className="h-px bg-gray-200 my-6" />

              {/* Total */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-3xl font-bold text-gradient">$2,218</span>
              </div>

              {/* Savings Badge */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-2 text-green-700">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">You saved $381 with AI!</span>
                </div>
              </div>

              <Button variant="gradient" size="lg" fullWidth>
                Complete Booking
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                You won't be charged until you confirm
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function TripDetail({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-br from-primary-100 to-secondary-100 p-2 rounded-lg">
        <Icon className="w-4 h-4 text-primary-600" />
      </div>
      <div className="flex-1">
        <div className="text-xs text-gray-500">{label}</div>
        <div className="font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  )
}

function PriceRow({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-center justify-between text-gray-700">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4" />}
        <span className="text-sm">{label}</span>
      </div>
      <span className="font-semibold">{value}</span>
    </div>
  )
}
