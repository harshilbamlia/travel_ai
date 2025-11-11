import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  showFilters: boolean
  isLoading: boolean
  error: string | null
}

const initialState: UIState = {
  showFilters: false,
  isLoading: false,
  error: null,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setShowFilters: (state, action: PayloadAction<boolean>) => {
      state.showFilters = action.payload
    },
    toggleFilters: (state) => {
      state.showFilters = !state.showFilters
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const { setShowFilters, toggleFilters, setLoading, setError, clearError } = uiSlice.actions
export default uiSlice.reducer
