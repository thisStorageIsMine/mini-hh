import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Form, useSubmit, useSearchParams, useNavigation } from 'react-router-dom'

export interface IHeaderProps {
    query: string | null;
}

const Header = ({ query }: IHeaderProps) => {
    const searchRef = useRef<HTMLInputElement>(null)

    // Синхронизирует search и строку запросов.
    // Это вызывает баг. При переходи на страницу вакансии search очищается. 
    // Я не знаю норм это или нет 
    useEffect(() => {
        if (!searchRef.current) return;
        searchRef.current.value = query || ''
    }, [query])

    const submit = useSubmit();


    return (
        <header className="fixed top-0 left-0 w-full h-16 flex items-center border-b border-b-slate-600 px-10 py-3 shadow-md bg-white z-20">
            <Link to="/">
                <svg className="w-7 hover:fill-sky-400 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
            </Link>

            <Form action='/vacancies' className="flex justify-center items-center  ml-auto w-full" >
                <input
                    className="max-w-[500px] w-full h-10 border px-3 py-2 rounded-xl text-lg tracking-tight shadow-sm
                            focus:outline-none focus:border-sky-400 focus:shadow-md"
                    type="search"
                    name="query"
                    placeholder="Профессия, должность или компания"
                    defaultValue={query || ''}
                    ref={searchRef}
                />
                {/* <select name="" id="">
                    <option value=""></option>
                </select> */}
            </Form>
        </header>
    )
}

export { Header }