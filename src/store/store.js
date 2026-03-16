import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlce'
import favoritesReducer from './favoritesReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    favorites: favoritesReducer,
  },
})