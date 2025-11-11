import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Preferences {
  vibe: string
  timing: string
  budget: number
}

interface TripState {
  destination: string | null
  dates: string | null
  budget: number | null
  travelers: number
  selectedPlanId: string | null
  bookingReference: string | null
  preferences: Preferences | null
  likedDestinations: any[]
}

const initialState: TripState = {
  destination: null,
  dates: null,
  budget: null,
  travelers: 2,
  selectedPlanId: null,
  bookingReference: null,
  preferences: null,
  likedDestinations: [],
}

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload
    },
    setDates: (state, action: PayloadAction<string>) => {
      state.dates = action.payload
    },
    setBudget: (state, action: PayloadAction<number>) => {
      state.budget = action.payload
    },
    setTravelers: (state, action: PayloadAction<number>) => {
      state.travelers = action.payload
    },
    setDateBudgetData: (state, action: PayloadAction<{ dates: string; budget: number; travelers: number }>) => {
      state.dates = action.payload.dates
      state.budget = action.payload.budget
      state.travelers = action.payload.travelers
    },
    setSelectedPlanId: (state, action: PayloadAction<string>) => {
      state.selectedPlanId = action.payload
    },
    setBookingReference: (state, action: PayloadAction<string>) => {
      state.bookingReference = action.payload
    },
    setPreferences: (state, action: PayloadAction<Preferences>) => {
      state.preferences = action.payload
    },
    setLikedDestinations: (state, action: PayloadAction<any[]>) => {
      state.likedDestinations = action.payload
    },
    resetTrip: (state) => {
      state.destination = null
      state.dates = null
      state.budget = null
      state.travelers = 2
      state.selectedPlanId = null
      state.bookingReference = null
      state.preferences = null
      state.likedDestinations = []
    },
  },
})

export const {
  setDestination,
  setDates,
  setBudget,
  setTravelers,
  setDateBudgetData,
  setSelectedPlanId,
  setBookingReference,
  setPreferences,
  setLikedDestinations,
  resetTrip,
} = tripSlice.actions

export default tripSlice.reducer
