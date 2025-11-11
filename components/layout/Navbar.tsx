'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Plane, User, Bell, Heart, Settings } from 'lucide-react'
import Button from '../ui/Button'
import { useAppDispatch } from '@/lib/store/hooks'
import { resetNavigation } from '@/lib/store/slices/navigationSlice'
import { resetTrip } from '@/lib/store/slices/tripSlice'

export default function Navbar() {
  const dispatch = useAppDispatch()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogoClick = () => {
    dispatch(resetNavigation())
    dispatch(resetTrip())
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-gradient-primary p-2 rounded-xl">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">TravelAI</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#discover">Discover</NavLink>
            <NavLink href="#trips">My Trips</NavLink>
            <NavLink href="#groups">Groups</NavLink>
            <NavLink href="#corporate">Corporate</NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <IconButton icon={<Bell className="w-5 h-5" />} badge={3} />
            <IconButton icon={<Heart className="w-5 h-5" />} />
            <IconButton icon={<Settings className="w-5 h-5" />} />
            <div className="w-px h-6 bg-gray-200" />
            <Button variant="primary" size="sm">
              <User className="w-4 h-4" />
              Profile
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-4">
              <MobileNavLink href="#discover">Discover</MobileNavLink>
              <MobileNavLink href="#trips">My Trips</MobileNavLink>
              <MobileNavLink href="#groups">Groups</MobileNavLink>
              <MobileNavLink href="#corporate">Corporate</MobileNavLink>
              <div className="pt-4 border-t border-gray-100">
                <Button variant="primary" size="md" fullWidth>
                  <User className="w-4 h-4" />
                  Profile
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
    </a>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
    >
      {children}
    </a>
  )
}

function IconButton({ icon, badge }: { icon: React.ReactNode; badge?: number }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors"
    >
      {icon}
      {badge && (
        <span className="absolute -top-1 -right-1 bg-gradient-sunset text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {badge}
        </span>
      )}
    </motion.button>
  )
}
