'use client'

import { motion } from 'framer-motion'
import { TrendingDown, TrendingUp } from 'lucide-react'

interface PricePoint {
  date: string
  price: number
}

interface PriceChartProps {
  data: PricePoint[]
  currentPrice: number
  bestPrice: number
  predictedPrice?: number
}

export default function PriceChart({
  data,
  currentPrice,
  bestPrice,
  predictedPrice,
}: PriceChartProps) {
  const maxPrice = Math.max(...data.map(d => d.price))
  const minPrice = Math.min(...data.map(d => d.price))
  const priceRange = maxPrice - minPrice

  const getYPosition = (price: number) => {
    return ((maxPrice - price) / priceRange) * 100
  }

  const trend = currentPrice < bestPrice ? 'down' : 'up'

  return (
    <div className="bg-white rounded-3xl shadow-soft p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">Price Trends</h3>
          <p className="text-sm text-gray-500">Based on historical data</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-gray-900">${currentPrice}</div>
          <div className={`flex items-center gap-1 text-sm font-medium mt-1 ${
            trend === 'down' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend === 'down' ? (
              <TrendingDown className="w-4 h-4" />
            ) : (
              <TrendingUp className="w-4 h-4" />
            )}
            {Math.abs(currentPrice - bestPrice)} vs best
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-48 mb-4">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(102, 126, 234, 0.2)" />
              <stop offset="100%" stopColor="rgba(102, 126, 234, 0)" />
            </linearGradient>
          </defs>

          {/* Area under curve */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            d={`
              M 0,${getYPosition(data[0].price)}%
              ${data.map((point, i) => {
                const x = (i / (data.length - 1)) * 100
                const y = getYPosition(point.price)
                return `L ${x}%,${y}%`
              }).join(' ')}
              L 100%,100%
              L 0,100%
              Z
            `}
            fill="url(#priceGradient)"
          />

          {/* Line */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            d={`
              M 0,${getYPosition(data[0].price)}%
              ${data.map((point, i) => {
                const x = (i / (data.length - 1)) * 100
                const y = getYPosition(point.price)
                return `L ${x}%,${y}%`
              }).join(' ')}
            `}
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
          </defs>

          {/* Data points */}
          {data.map((point, i) => {
            const x = (i / (data.length - 1)) * 100
            const y = getYPosition(point.price)
            return (
              <motion.circle
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                cx={`${x}%`}
                cy={`${y}%`}
                r="4"
                fill="white"
                stroke="#667eea"
                strokeWidth="2"
                className="cursor-pointer hover:r-6 transition-all"
              />
            )
          })}
        </svg>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 -ml-12">
          <span>${maxPrice}</span>
          <span>${Math.round((maxPrice + minPrice) / 2)}</span>
          <span>${minPrice}</span>
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between text-xs text-gray-500">
        {data.map((point, i) => {
          if (i === 0 || i === data.length - 1 || i === Math.floor(data.length / 2)) {
            return <span key={i}>{point.date}</span>
          }
          return null
        })}
      </div>

      {/* Predictions */}
      {predictedPrice && (
        <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-gray-700">AI Prediction</div>
              <div className="text-xs text-gray-500 mt-0.5">Best time to book</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-700">${predictedPrice}</div>
              <div className="text-xs text-gray-600 mt-0.5">in 3-5 days</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
