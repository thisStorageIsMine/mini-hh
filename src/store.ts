import { configureStore } from '@reduxjs/toolkit'
import favoriteSlice from './slices/favoriteSlice'
import prevVacanciesSlice from './slices/prevVacanciesSlice'

export const store = configureStore({
    reducer: {
        favorite: favoriteSlice,
        prevVacancies: prevVacanciesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch