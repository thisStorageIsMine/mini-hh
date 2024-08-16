import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {
    Main,
    mainLoader,
    Vacancies,
    WelcomePage,
    vacanciesLoader,
    vacancyLoader,
    VacancyPage
} from './components'




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: mainLoader,
        children: [
            {
                index: true,
                element: <WelcomePage />
            },
            {
                path: 'vacancies',
                loader: vacanciesLoader,
                element: <Vacancies />
            },
            {
                path: 'vacancies/:id',
                loader: vacancyLoader,
                element: <VacancyPage />
            }
        ]
    },

])


const App = () => {
    return (
        <RouterProvider router={router}>

        </RouterProvider>

    )
}

export { App }



