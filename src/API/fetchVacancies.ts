import { API } from ".";
import { IVacancies } from "../interfaces";

const fetchVacancies = async (query: string) => {
    try {
        const hhAPI = new URL(API["vacancies"]);
        hhAPI.searchParams.append('text', query);

        let fetchVacancies = await fetch(hhAPI),
            data: IVacancies = await fetchVacancies.json();

        return data

    } catch (error) {
        return null
    }
}


export { fetchVacancies }