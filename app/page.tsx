'use client'

import WelcomeSplitChoice from '@/components/onboarding/WelcomeSplitChoice'
import SmartDestinationSearch from '@/components/onboarding/SmartDestinationSearch'
import DateBudgetSelector from '@/components/onboarding/DateBudgetSelector'
import InspireMeQuestionnaire from '@/components/onboarding/InspireMeQuestionnaire'
import DestinationSwipeCards from '@/components/onboarding/DestinationSwipeCards'
import TripOptionsResults from '@/components/trip/TripOptionsResults'
import DetailedItineraryView from '@/components/trip/DetailedItineraryView'
import AdvancedFiltersScreen from '@/components/trip/AdvancedFiltersScreen'
import BookingSummary from '@/components/booking/BookingSummary'
import BookingConfirmation from '@/components/booking/BookingConfirmation'
import TripDetailsPage from '@/components/trip/TripDetailsPage'
import HomeDashboard from '@/components/dashboard/HomeDashboard'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import { setCurrentScreen, setFlowPath, resetNavigation } from '@/lib/store/slices/navigationSlice'
import { setDestination, setDateBudgetData, setSelectedPlanId, setPreferences, setLikedDestinations, setBookingReference, resetTrip } from '@/lib/store/slices/tripSlice'
import { setShowFilters } from '@/lib/store/slices/uiSlice'
import { setCurrentBooking, addToBookingHistory } from '@/lib/store/slices/bookingSlice'

export default function Home() {
  const dispatch = useAppDispatch()
  const currentScreen = useAppSelector((state) => state.navigation.currentScreen)
  const flowPath = useAppSelector((state) => state.navigation.flowPath)
  const tripData = useAppSelector((state) => state.trip)
  const showFilters = useAppSelector((state) => state.ui.showFilters)

  // Sample trip plan data (would come from API in real app)
  const getTripPlan = () => {
    return {
      name: 'Comfort Plus',
      totalPrice: tripData.budget ? tripData.budget * (tripData.travelers || 2) : 3000,
      duration: '7 days, 6 nights',
      flights: {
        airline: 'Delta Airlines',
        logo: '',
        departure: { time: '14:00', airport: 'JFK Airport', code: 'JFK' },
        arrival: { time: '17:30', airport: `${tripData.destination} Airport`, code: 'DST' },
        duration: '13h 30m',
        price: (tripData.budget || 1500) * 0.45,
        stops: 0,
        amenities: ['wifi', 'meal', 'luggage'],
        class: 'economy' as const,
      },
      hotel: {
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        name: `Grand ${tripData.destination} Hotel`,
        location: `${tripData.destination} City Center`,
        rating: 4.7,
        reviews: 1523,
        price: Math.round(((tripData.budget || 1500) * 0.35) / 6),
        amenities: ['wifi', 'breakfast', 'gym'],
      },
      itinerary: [],
    }
  }

  // Welcome screen handlers
  const handleIKnow = () => {
    dispatch(setFlowPath('i-know'))
    dispatch(setCurrentScreen('search'))
  }

  const handleInspireMe = () => {
    dispatch(setFlowPath('inspire-me'))
    dispatch(setCurrentScreen('questionnaire'))
  }

  // "I Know" flow handlers
  const handleDestinationSelect = (destination: string) => {
    dispatch(setDestination(destination))
    dispatch(setCurrentScreen('date-budget'))
  }

  const handleDateBudgetContinue = (data: { dates: string; budget: number; travelers: number }) => {
    dispatch(setDateBudgetData(data))
    dispatch(setCurrentScreen('trip-options'))
  }

  const handleBackToSearch = () => {
    dispatch(setCurrentScreen('search'))
  }

  const handleBackToDateBudget = () => {
    dispatch(setCurrentScreen('date-budget'))
  }

  const handleInspireInstead = () => {
    dispatch(setFlowPath('inspire-me'))
    dispatch(setCurrentScreen('questionnaire'))
  }

  // Trip options handlers
  const handleSelectTripOption = (optionId: string) => {
    dispatch(setSelectedPlanId(optionId))
    dispatch(setCurrentScreen('itinerary'))
  }

  const handleOpenFilters = () => {
    dispatch(setShowFilters(true))
  }

  const handleApplyFilters = (filters: any) => {
    console.log('Applied filters:', filters)
    // In real app, would refetch trip options with filters
  }

  const handleBackToOptions = () => {
    dispatch(setCurrentScreen('trip-options'))
  }

  // Itinerary handlers
  const handleBookTrip = () => {
    dispatch(setCurrentScreen('booking'))
  }

  const handleBackToItinerary = () => {
    dispatch(setCurrentScreen('itinerary'))
  }

  // Booking handlers
  const handleCompleteBooking = () => {
    // Generate booking reference
    const bookingRef = `TR${Math.random().toString(36).substring(2, 10).toUpperCase()}`

    // Create booking object
    const booking = {
      bookingReference: bookingRef,
      destination: tripData.destination || 'Your Destination',
      dates: tripData.dates || 'Dec 15 - Dec 22, 2024',
      travelers: tripData.travelers,
      totalPrice: getTripPlan().totalPrice,
      status: 'confirmed' as const,
      createdAt: new Date().toISOString(),
    }

    dispatch(setBookingReference(bookingRef))
    dispatch(setCurrentBooking(booking))
    dispatch(addToBookingHistory(booking))
    dispatch(setCurrentScreen('booking-confirmation'))
  }

  // Booking confirmation handlers
  const handleViewTripDetails = () => {
    dispatch(setCurrentScreen('trip-details'))
  }

  const handleBackToDashboard = () => {
    dispatch(setCurrentScreen('dashboard'))
  }

  // "Inspire Me" flow handlers
  const handleQuestionnaireComplete = (preferences: { vibe: string; timing: string; budget: number }) => {
    dispatch(setPreferences(preferences))
    dispatch(setCurrentScreen('swipe-cards'))
  }

  const handleBackToWelcome = () => {
    dispatch(resetNavigation())
    dispatch(resetTrip())
  }

  const handleSwipeComplete = (likedDestinations: any[]) => {
    dispatch(setLikedDestinations(likedDestinations))
    dispatch(setCurrentScreen('dashboard'))
  }

  const handleBackToQuestionnaire = () => {
    dispatch(setCurrentScreen('questionnaire'))
  }

  return (
    <main>
      {/* Advanced Filters Overlay */}
      <AdvancedFiltersScreen
        isOpen={showFilters}
        onClose={() => dispatch(setShowFilters(false))}
        onApply={handleApplyFilters}
      />

      {/* Welcome Screen - Initial Choice */}
      {currentScreen === 'welcome' && (
        <WelcomeSplitChoice
          onIKnow={handleIKnow}
          onInspireMe={handleInspireMe}
        />
      )}

      {/* "I Know Where" Flow */}
      {currentScreen === 'search' && (
        <SmartDestinationSearch
          onSelect={handleDestinationSelect}
          onInspireInstead={handleInspireInstead}
        />
      )}

      {currentScreen === 'date-budget' && tripData.destination && (
        <DateBudgetSelector
          destination={tripData.destination}
          onContinue={handleDateBudgetContinue}
          onBack={handleBackToSearch}
        />
      )}

      {currentScreen === 'trip-options' && tripData.destination && tripData.budget && tripData.travelers && (
        <TripOptionsResults
          destination={tripData.destination}
          dates={tripData.dates || 'Dec 15 - Dec 22, 2024'}
          travelers={tripData.travelers}
          budget={tripData.budget}
          onSelectOption={handleSelectTripOption}
          onOpenFilters={handleOpenFilters}
          onBack={handleBackToDateBudget}
        />
      )}

      {currentScreen === 'itinerary' && tripData.destination && tripData.selectedPlanId && (
        <DetailedItineraryView
          destination={tripData.destination}
          dates={tripData.dates || 'Dec 15 - Dec 22, 2024'}
          travelers={tripData.travelers || 2}
          selectedPlan={getTripPlan()}
          onBook={handleBookTrip}
          onBack={handleBackToOptions}
        />
      )}

      {currentScreen === 'booking' && (
        <BookingSummary />
      )}

      {currentScreen === 'booking-confirmation' && tripData.bookingReference && (
        <BookingConfirmation
          bookingReference={tripData.bookingReference}
          destination={tripData.destination || 'Your Destination'}
          dates={tripData.dates || 'Dec 15 - Dec 22, 2024'}
          travelers={tripData.travelers}
          totalPrice={getTripPlan().totalPrice}
          email="user@example.com"
          onViewTripDetails={handleViewTripDetails}
          onBackToDashboard={handleBackToDashboard}
        />
      )}

      {currentScreen === 'trip-details' && tripData.bookingReference && (
        <TripDetailsPage
          bookingReference={tripData.bookingReference}
          destination={tripData.destination || 'Your Destination'}
          dates={tripData.dates || 'Dec 15 - Dec 22, 2024'}
          travelers={tripData.travelers}
          totalPrice={getTripPlan().totalPrice}
          trip={getTripPlan()}
          onBack={handleBackToDashboard}
        />
      )}

      {/* "Inspire Me" Flow */}
      {currentScreen === 'questionnaire' && (
        <InspireMeQuestionnaire
          onComplete={handleQuestionnaireComplete}
          onBack={handleBackToWelcome}
        />
      )}

      {currentScreen === 'swipe-cards' && tripData.preferences && (
        <DestinationSwipeCards
          preferences={tripData.preferences}
          onComplete={handleSwipeComplete}
          onBack={handleBackToQuestionnaire}
        />
      )}

      {/* Dashboard - Final Screen */}
      {currentScreen === 'dashboard' && (
        <HomeDashboard />
      )}
    </main>
  )
}
