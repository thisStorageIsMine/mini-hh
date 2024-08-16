import { Await, LoaderFunction, defer, useLoaderData, useNavigation, } from "react-router-dom";
import { IVacancies, IVacancy } from "src/interfaces";
import { useDispatch } from "react-redux";

import { API, } from "../API";
import { IPrevVacancies, set, setScrollY, } from "../slices/prevVacanciesSlice";

import { Suspense, useEffect } from "react";
import { store } from "../store";
import { useParentElement } from "./Main";
import { VacanciesList } from "./VacanciesList";
import { Loader } from ".";

export interface IVacanciesLoaderData {
    vacancies: IVacancy[] | null;
    queryString: string;
    scrollY: number;
    timestamp: number;
    isUsingCache: boolean;
    page: number;
    data: Promise<IVacancies> | null
}

export const vacanciesLoader: LoaderFunction<IVacanciesLoaderData> = async ({ request }) => {
    const prev = store.getState().prevVacancies

    const url = new URL(request.url),
        queryString = url.searchParams,
        query = String(queryString.get('query'));

    const timestamp = new Date().getTime()



    if (!query || query === '') {
        return getEmptyLoader
    }


    const fiveMinutes = 1000 * 60 * 5;
    const isUsingCache = checkIfUsingCache(queryString.toString(), timestamp, fiveMinutes, prev)

    if (isUsingCache) {
        return {
            vacancies: prev.vacancies,
            scrollY: prev.scrollY,
            queryString: prev.key,
            timestamp,
            isUsingCache,
            page: prev.page,
            data: prev.data
        }
    }

    const hhAPI = new URL(API["vacancies"]);
    hhAPI.searchParams.append('text', query);


    let data = new Promise(res => res(1))
        .then(() => fetch(hhAPI))
        .then(data => data.json())

    return defer({
        data,
        screenY: 0,
        queryString: queryString.toString(),
        timestamp,
        isUsingCache,
        page: 0,
        vacancies: null
    })
}



const Vacancies = () => {
    const parentElement = useParentElement();
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const loaderData = useLoaderData() as IVacanciesLoaderData

    useEffect(() => {
        // Почему это в отдельном useEffect?
        // Если вынести это из useEffect, то при unmount scroll поставится в 0
        // Если занести в useEffect([]), то он не будет скролить при поиске
        window.scrollTo(0, scrollY)
    }, [loaderData.queryString])



    useEffect(() => {
        function callback() {
            const scrollY = (document.documentElement.scrollTop || document.body.scrollTop);
            dispatch(setScrollY(scrollY));
        }
        window.addEventListener('scroll', callback)

        return () => {
            window.removeEventListener('scroll', callback)
        }
    }, [])



    if (loaderData.data === null) {
        return (
            <div className="text-xl text-slate-400 text-center mt-10">
                <h1>Чё-то нету такого</h1>
            </div>
        )
    }

    // Надо было использовать React query
    // Да простит меня Господь
    if (navigation.state === 'loading') {
        return <Loader />
    }

    return (
        <Suspense fallback={<Loader />}>
            <Await resolve={loaderData.data}>
                {
                    (resolvedData: IVacancies) => <VacanciesList data={resolvedData} dispatchData={loaderData} />
                }
            </Await>
        </Suspense>
    )
}

export { Vacancies }


function checkIfUsingCache(queryString: string, timestamp: number, timeLimit: number, prev: IPrevVacancies) {
    const isKeysEqual = prev.key === queryString,
        isTimestampValid = prev.timestamp ? timestamp - prev.timestamp <= timeLimit : true,
        isUsingCache = isKeysEqual && isTimestampValid

    return isUsingCache
}

function getEmptyLoader() {
    return {
        vacancies: null,
        data: null,
        queryString: '',
        scrollY: 0,
        timestamp: new Date().getTime(),
        isUsingCache: false,
    }
}

