import { useAppDispatch } from "../hooks";
import { IVacancies } from "../interfaces";
import { set, setTimestamp } from "../slices/prevVacanciesSlice";
import { IVacanciesLoaderData } from "./Vacancies";
import { VacancyCard } from "./VacancyCard";


export interface IVacanciesListProps {
    data: IVacancies;
    dispatchData: IVacanciesLoaderData;
}

function VacanciesList({ data, dispatchData }: IVacanciesListProps) {
    const dispatch = useAppDispatch()

    const { isUsingCache, queryString, vacancies, timestamp } = dispatchData;

    // Запихнём вакансии в redux
    if (!isUsingCache) {
        const curVacancies = {
            key: queryString,
            vacancies,
            timestamp: timestamp,
            scrollY: 0,
            page: 0,
            data
        }
        dispatch(set(curVacancies))
    } else {
        dispatch(setTimestamp(timestamp))
    }

    if (!data.items) {
        return (
            <div className="text-xl text-slate-400 text-center mt-10">
                <h1>Чё-то нету такого</h1>
            </div>
        )
    }


    return (
        <>
            {data.items.map(v =>
                <VacancyCard data={v} key={v.id}>
                </VacancyCard>
            )}

        </>
    )
}

export { VacanciesList }

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}
