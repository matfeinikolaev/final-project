import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoritesReducer'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
})

store.subscribe(() => {
  try {
    localStorage.setItem(
      'favorites',
      JSON.stringify(store.getState().favorites),
    )
  } catch {
    // ignore
  }
})
