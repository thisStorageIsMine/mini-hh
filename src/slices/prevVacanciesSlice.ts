import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IVacancies, IVacancy } from "../interfaces";
import { RootState } from "../store";

export interface IPrevVacancies {
    key: String;
    vacancies: IVacancy[] | null;
    timestamp: number | null;
    scrollY: number;
    page: number;
    data: IVacancies | null
}
const initialState: IPrevVacancies = {
    key: '',
    vacancies: [],
    timestamp: null,
    scrollY: 0,
    page: 0,
    data: null
}

const prevVacanciesSlice = createSlice({
    name: "prevVacancies",
    initialState,
    reducers: {
        set: (state: IPrevVacancies, nextVacancies: PayloadAction<IPrevVacancies>) => {
            // ЭТО НЕ РАБОТАЕТ
            // state = { ...nextVacancies.payload } 

            // ЭТО РАБОТАЕТ
            // state.key = nextVacancies.payload.key;
            // state.vacancies = nextVacancies.payload.vacancies;
            // state.timestamp = nextVacancies.payload.timestamp;
            // state.scrollY = nextVacancies.payload.scrollY;

            // ЭТО ТОЖЕ РАБОТАЕТ
            return { ...nextVacancies.payload }
        },

        setScrollY: (state: IPrevVacancies, action: PayloadAction<number>) => {
            state.scrollY = action.payload
        },

        clear: (state: IPrevVacancies) => {
            return {
                key: '',
                vacancies: [],
                timestamp: null,
                scrollY: 0,
                page: 0,
                data: null
            };
        },

        setTimestamp(state: IPrevVacancies, action: PayloadAction<number>) {
            state.timestamp = action.payload
        },

        setPage(state: IPrevVacancies, action: PayloadAction<number>) {
            state.page = action.payload
        },

        setVacancies(state: IPrevVacancies, action: PayloadAction<IVacancy[]>) {
            state.vacancies = action.payload
        }
    }
})

export const { set, setScrollY, clear, setTimestamp, setVacancies, setPage } = prevVacanciesSlice.actions

export const selectPrevVacancies = (state: RootState) => state.prevVacancies;
export const selectPrevVacanciesKey = (state: RootState) => state.prevVacancies.key;
export const selectPrevVacanciesTimestamp = (state: RootState) => state.prevVacancies.timestamp

export default prevVacanciesSlice.reducer