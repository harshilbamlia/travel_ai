import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Booking {
  bookingReference: string
  destination: string
  dates: string
  travelers: number
  totalPrice: number
  status: 'confirmed' | 'pending' | 'cancelled'
  createdAt: string
}

interface BookingState {
  currentBooking: Booking | null
  bookingHistory: Booking[]
}

const initialState: BookingState = {
  currentBooking: null,
  bookingHistory: [],
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setCurrentBooking: (state, action: PayloadAction<Booking>) => {
      state.currentBooking = action.payload
    },
    addToBookingHistory: (state, action: PayloadAction<Booking>) => {
      state.bookingHistory.unshift(action.payload)
    },
    updateBookingStatus: (state, action: PayloadAction<{ bookingReference: string; status: 'confirmed' | 'pending' | 'cancelled' }>) => {
      const booking = state.bookingHistory.find(b => b.bookingReference === action.payload.bookingReference)
      if (booking) {
        booking.status = action.payload.status
      }
      if (state.currentBooking?.bookingReference === action.payload.bookingReference) {
        state.currentBooking.status = action.payload.status
      }
    },
    clearCurrentBooking: (state) => {
      state.currentBooking = null
    },
  },
})

export const {
  setCurrentBooking,
  addToBookingHistory,
  updateBookingStatus,
  clearCurrentBooking,
} = bookingSlice.actions

export default bookingSlice.reducer
