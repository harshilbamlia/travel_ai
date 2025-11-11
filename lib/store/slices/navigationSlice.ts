import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Screen =
  | 'welcome'
  | 'search'
  | 'date-budget'
  | 'trip-options'
  | 'itinerary'
  | 'booking'
  | 'booking-confirmation'
  | 'trip-details'
  | 'questionnaire'
  | 'swipe-cards'
  | 'dashboard'

export type FlowPath = 'i-know' | 'inspire-me' | null

interface NavigationState {
  currentScreen: Screen
  flowPath: FlowPath
}

const initialState: NavigationState = {
  currentScreen: 'welcome',
  flowPath: null,
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentScreen: (state, action: PayloadAction<Screen>) => {
      state.currentScreen = action.payload
    },
    setFlowPath: (state, action: PayloadAction<FlowPath>) => {
      state.flowPath = action.payload
    },
    resetNavigation: (state) => {
      state.currentScreen = 'welcome'
      state.flowPath = null
    },
  },
})

export const { setCurrentScreen, setFlowPath, resetNavigation } = navigationSlice.actions
export default navigationSlice.reducer
