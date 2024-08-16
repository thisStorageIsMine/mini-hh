import { RefObject, useRef } from 'react';
import { Header, Favorite } from './'
import { LoaderFunction, Outlet, useLoaderData, useOutletContext } from 'react-router-dom'

interface ILoaderData {
    query: string;
}

export const mainLoader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url),
        query = url.searchParams.get('query');

    return {
        query
    }
}

const Main = () => {
    const loaderData = useLoaderData() as ILoaderData;
    const vacanciesSectionRef = useRef<HTMLElement>(null) // Будет использоваться в Vacancies.tsx

    return (
        <>
            <Header query={loaderData.query} />
            <main className="min-h-screen pt-16  w-screen flex">
                <section className="flex basis-1/4 bg-stone-100 border-r border-r-slate-700">
                    <Favorite />
                </section>


                <section
                    className="flex basis-3/4 flex-col gap-10 p-10 relative"
                    ref={vacanciesSectionRef}
                >
                    <Outlet context={vacanciesSectionRef.current satisfies HTMLElement | null}></Outlet>
                </section>
            </main>
        </>
    )
}

export { Main }


export function useParentElement() {
    return useOutletContext<HTMLElement | null>()
}

