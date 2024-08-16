import { VacancyCard } from "."
import { IVacancy } from "../interfaces"

const Loader = () => {
    return (
        <div aria-label="Идёт загрузка" className="grid grid-cols-1 gap-10 overflow-hidden">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}
export { Loader }


const SkeletonCard = () => {
    const fakeData = getFakeContent()
    return (
        <div className="relative overflow-hidden rounded-2xl opacity-55 " aria-hidden>
            <span className="absolute inset-0 z-10 bg-gray-300 animate-pulse"></span>
            <VacancyCard data={fakeData} className="opacity-0"></VacancyCard>
        </div>
    )
}
export { SkeletonCard }






function getFakeContent(): IVacancy {
    return { "id": "105240439", "premium": false, "name": "Junior Frontend Developer", "department": null, "has_test": false, "response_letter_required": false, "area": { "id": "1", "name": "Москва", "url": "https://api.hh.ru/areas/1" }, "salary": null, "type": { "id": "open", "name": "Открытая" }, "address": { "city": "Москва", "street": "Ленинградский проспект", "building": "31с3", "lat": 55.784111, "lng": 37.560727, "description": null, "raw": "Москва, Ленинградский проспект, 31с3", "metro": { "station_name": "Динамо", "line_name": "Замоскворецкая", "station_id": "2.34", "line_id": "2", "lat": 55.789704, "lng": 37.558212 }, "metro_stations": [{ "station_name": "Динамо", "line_name": "Замоскворецкая", "station_id": "2.34", "line_id": "2", "lat": 55.789704, "lng": 37.558212 }, { "station_name": "Петровский парк", "line_name": "Большая кольцевая линия", "station_id": "97.599", "line_id": "97", "lat": 55.79233, "lng": 37.55952 }], "id": "14868470" }, "response_url": null, "sort_point_distance": null, "published_at": "2024-08-14T12:47:57+0300", "created_at": "2024-08-14T12:47:57+0300", "archived": false, "apply_alternate_url": "https://hh.ru/applicant/vacancy_response?vacancyId=105240439", "branding": { "type": "MAKEUP", "tariff": null }, "show_logo_in_search": true, "insider_interview": null, "url": "https://api.hh.ru/vacancies/105240439?host=hh.ru", "alternate_url": "https://hh.ru/vacancy/105240439", "relations": [], "employer": { "id": "2483732", "name": "Авентика", "url": "https://api.hh.ru/employers/2483732", "alternate_url": "https://hh.ru/employer/2483732", "logo_urls": { "90": "https://img.hhcdn.ru/employer-logo/3398801.jpeg", "240": "https://img.hhcdn.ru/employer-logo/3398802.jpeg", "original": "https://img.hhcdn.ru/employer-logo-original/739456.jpg" }, "vacancies_url": "https://api.hh.ru/vacancies?employer_id=2483732", "accredited_it_employer": false, "trusted": true }, "snippet": { "requirement": "JavaScript (ES.Next). HTML5 + CSS3 (SASS/SCSS). React, <highlighttext>svelte</highlighttext>. Git. Ссылки на ваши pet-проекты или проекты в...", "responsibility": "Разрабатывать web-приложения. Проектировать модули приложения, микросервисов, компонентов или частей приложения. Настраивать взаимодействие по API (REST, Server-Push, Socket). " }, "contacts": null, "schedule": { "id": "remote", "name": "Удаленная работа" }, "working_days": [], "working_time_intervals": [], "working_time_modes": [], "accept_temporary": false, "professional_roles": [{ "id": "96", "name": "Программист, разработчик" }], "accept_incomplete_resumes": false, "experience": { "id": "between1And3", "name": "От 1 года до 3 лет" }, "employment": { "id": "full", "name": "Полная занятость" }, "adv_response_url": null, "is_adv_vacancy": false, "adv_context": null, "description": "", "branded_description": '' }
}