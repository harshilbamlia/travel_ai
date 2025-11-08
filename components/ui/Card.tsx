'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'premium' | 'glass' | 'float'
  hover?: boolean
  className?: string
  onClick?: () => void
}

export function Card({
  children,
  variant = 'default',
  hover = false,
  className,
  onClick,
}: CardProps) {
  const variants = {
    default: 'bg-white rounded-2xl shadow-soft p-6',
    premium: 'bg-white rounded-3xl shadow-float p-8 transition-all duration-300 hover:shadow-float-lg',
    glass: 'glass rounded-3xl p-8',
    float: 'bg-white rounded-2xl shadow-soft p-6 transition-all duration-300',
  }

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={cn(
        variants[variant],
        hover && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FloatingCard({ children, className, delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={cn('card-premium', className)}
    >
      {children}
    </motion.div>
  )
}

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn('glass rounded-3xl p-6 backdrop-blur-xl', className)}>
      {children}
    </div>
  )
}
