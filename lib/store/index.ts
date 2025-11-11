import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import navigationReducer from './slices/navigationSlice'
import tripReducer from './slices/tripSlice'
import uiReducer from './slices/uiSlice'
import bookingReducer from './slices/bookingSlice'

// Combine all reducers
const rootReducer = combineReducers({
  navigation: navigationReducer,
  trip: tripReducer,
  ui: uiReducer,
  booking: bookingReducer,
})

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['trip', 'booking'], // Only persist trip and booking data
  blacklist: ['navigation', 'ui'], // Don't persist navigation and UI state
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore redux-persist actions
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
    devTools: process.env.NODE_ENV !== 'production',
  })

  return store
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// Export persistStore for use in StoreProvider
export { persistStore }
