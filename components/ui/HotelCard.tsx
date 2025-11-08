'use client'

import { motion } from 'framer-motion'
import { MapPin, Star, Wifi, Coffee, Dumbbell, Award } from 'lucide-react'

interface HotelCardProps {
  image: string
  name: string
  location: string
  rating: number
  reviews: number
  price: number
  amenities: string[]
  featured?: boolean
  onClick?: () => void
}

export default function HotelCard({
  image,
  name,
  location,
  rating,
  reviews,
  price,
  amenities,
  featured = false,
  onClick,
}: HotelCardProps) {
  const amenityIcons: Record<string, any> = {
    wifi: Wifi,
    breakfast: Coffee,
    gym: Dumbbell,
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-gradient-sunset text-white px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-gray-900">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4" />
          {location}
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-3 mb-4">
          {amenities.slice(0, 3).map((amenity, index) => {
            const Icon = amenityIcons[amenity]
            return Icon ? (
              <div
                key={index}
                className="flex items-center gap-1.5 text-gray-600 text-sm"
              >
                <Icon className="w-4 h-4" />
              </div>
            ) : null
          })}
          {amenities.length > 3 && (
            <span className="text-sm text-gray-500">+{amenities.length - 3} more</span>
          )}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="text-sm text-gray-500">From</div>
            <div className="text-2xl font-bold text-gray-900">${price}<span className="text-sm font-normal text-gray-500">/night</span></div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-primary text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-soft hover:shadow-glow-purple transition-all"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
