import { LoaderFunction, useLoaderData, useNavigate } from "react-router-dom";
import { MutableRefObject, SVGProps, useEffect, useRef } from "react";

import { API } from "../API";
import { IVacancy } from "../interfaces";
import { SalarySection, Experience } from "./";
import { useScriptsAndDocumentTitle } from "../hooks";
import { store } from "../store";

export interface IVacancyLoaderReturn {
    data: IVacancy | null
}

export const vacancyLoader: LoaderFunction<IVacancyLoaderReturn> = async ({ params }) => {
    let vacancy = null;
    try {
        const fetchData = await fetch(API['vacancy'] + params.id);
        vacancy = await fetchData.json();

    } catch (err) {
        // Я не хочу выводить тип ошибки, поэтому просто отправлю null
    }

    return {
        data: vacancy
    }
}

const VacancyPage = () => {
    const previousDocumentTitle = document.title
    const loaderData = useLoaderData() as IVacancyLoaderReturn,
        vacancy = loaderData.data

    const descriptionRef = useScriptsAndDocumentTitle(vacancy?.name || 'Описание вакансии', previousDocumentTitle)
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (vacancy === null) {
        return (
            <div>
                <h2>
                    Что-то пошло не так
                </h2>

                <p>Попробуйте перезагрузить страницу</p>
            </div>
        )
    }


    return (
        <div className="p-10">
            <BackButton
                onClick={() => navigate(-1)}
                className="absolute top-6 left-6"
            />
            <h2 className="text-3xl">
                {vacancy.name}
            </h2>
            <SalarySection salary={vacancy.salary} />
            <Experience experience={vacancy.experience} />

            <div
                onLoad={() => document.dispatchEvent(new Event('DOMContentLoaded'))}
                dangerouslySetInnerHTML={{ __html: vacancy.branded_description || vacancy.description }}
                className={`max-w-[700px] ${vacancy.branded_description ? '' : 'description'}`} // Если есть branded_description, сбрасываем свои стили
                ref={descriptionRef}
            >

            </div>
        </div>
    )
}

export { VacancyPage }

interface IBackButtonProps extends SVGProps<SVGSVGElementEventMap> {
    onClick: () => void
}

function BackButton({ onClick, className }: IBackButtonProps) {

    return (
        <>
            <svg
                className={["size-8 cursor-pointer", className].join(' ')}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                onClick={onClick}><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
        </>
    )
}

