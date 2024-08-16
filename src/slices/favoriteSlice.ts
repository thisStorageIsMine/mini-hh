import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IVacancy } from "src/interfaces";
import { RootState } from "src/store";

export interface IFavoriteState {
    vacancies: IVacancy[]
}

const initialState: IFavoriteState = {
    vacancies: []
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        add: (state: IFavoriteState, action: PayloadAction<IVacancy>) => {
            state.vacancies.push(action.payload)
        },
        remove: (state: IFavoriteState, action: PayloadAction<string>) => {
            state.vacancies = state.vacancies.filter(v => v.id !== action.payload)
        }
    },
})


export const { add, remove } = favoriteSlice.actions


export const selectFavoriteVacancies = (state: RootState) => state.favorite.vacancies

export const isVacancyInFavorite = (id: string, vacancies: IVacancy[]) => vacancies.some(v => v.id === id)

export default favoriteSlice.reducer;