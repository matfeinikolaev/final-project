import { createSlice } from '@reduxjs/toolkit'

const loadFromStorage = () => {
  try {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFromStorage(),
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload)
    },
    removeFromFavorites: (state, action) => {
      state.splice(action.payload, 1)
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer
