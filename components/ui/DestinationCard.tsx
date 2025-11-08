'use client'

import { motion } from 'framer-motion'
import { MapPin, Star, Heart, TrendingUp } from 'lucide-react'
import { useState } from 'react'

interface DestinationCardProps {
  image: string
  title: string
  location: string
  rating: number
  reviews: number
  price: number
  trending?: boolean
  onLike?: () => void
  onClick?: () => void
}

export default function DestinationCard({
  image,
  title,
  location,
  rating,
  reviews,
  price,
  trending = false,
  onLike,
  onClick,
}: DestinationCardProps) {
  const [liked, setLiked] = useState(false)

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLiked(!liked)
    onLike?.()
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="destination-card cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Trending Badge */}
        {trending && (
          <div className="absolute top-4 left-4 bg-gradient-sunset text-white px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg">
            <TrendingUp className="w-4 h-4" />
            Trending
          </div>
        )}

        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg transition-colors z-20"
        >
          <Heart
            className={`w-5 h-5 transition-all ${
              liked ? 'fill-red-500 text-red-500' : 'text-gray-700'
            }`}
          />
        </motion.button>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">{title}</h3>
              <div className="flex items-center gap-1.5 text-white/90">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{location}</span>
              </div>
            </div>
          </div>

          {/* Rating & Price */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-sm">{rating}</span>
              </div>
              <span className="text-sm text-white/80">({reviews} reviews)</span>
            </div>

            <div className="text-right">
              <div className="text-sm text-white/80">From</div>
              <div className="text-2xl font-bold">${price}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface CompactDestinationCardProps {
  image: string
  title: string
  location: string
  price: number
}

export function CompactDestinationCard({
  image,
  title,
  location,
  price,
}: CompactDestinationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-20 h-20 rounded-xl object-cover"
      />
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <div className="flex items-center gap-1 text-gray-500 text-sm mt-0.5">
          <MapPin className="w-3.5 h-3.5" />
          {location}
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm text-gray-500">From</div>
        <div className="text-xl font-bold text-gray-900">${price}</div>
      </div>
    </motion.div>
  )
}
