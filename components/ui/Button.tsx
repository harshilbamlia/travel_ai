'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  className?: string
  icon?: ReactNode
  fullWidth?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className,
  icon,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-3 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-gradient-primary text-white shadow-soft hover:shadow-glow-purple hover:scale-105',
    secondary: 'bg-white text-gray-900 shadow-soft hover:shadow-soft-lg border border-gray-100 hover:scale-105',
    ghost: 'text-gray-700 hover:bg-gray-50',
    gradient: 'bg-gradient-hero text-white shadow-soft hover:shadow-glow-purple hover:scale-105',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
    xl: 'px-10 py-5 text-xl rounded-2xl',
  }

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  )
}
