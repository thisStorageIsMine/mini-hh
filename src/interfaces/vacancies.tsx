export interface IVacancies {
    items: IVacancy[] | null | undefined
    found: number
    pages: number
    page: number
    per_page: number
    clusters: any
    arguments: any
    fixes: any
    suggests: any
    alternate_url: string
}

export interface IVacancy {
    id: string
    premium: boolean
    name: string
    department?: Department | null
    has_test: boolean
    response_letter_required: boolean
    area: Area
    salary?: Salary | null
    type: Type
    address?: Address | null
    response_url: any
    sort_point_distance: any
    published_at: string
    created_at: string
    archived: boolean
    apply_alternate_url: string
    show_logo_in_search?: boolean | null
    insider_interview: any
    url: string
    alternate_url: string
    relations: any[]
    employer: Employer
    snippet: Snippet
    contacts: any
    schedule: Schedule
    working_days: any[]
    working_time_intervals: any[]
    working_time_modes: WorkingTimeMode[]
    accept_temporary: boolean
    professional_roles: ProfessionalRole[]
    accept_incomplete_resumes: boolean
    experience: IExperience
    employment: Employment
    adv_response_url: any
    is_adv_vacancy: boolean
    adv_context: any
    branding?: Branding | null
    description: string
    branded_description: string | null
}

export interface Department {
    id: string
    name: string
}

export interface Area {
    id: string
    name: string
    url: string
}

export interface Salary {
    from: number | null
    to?: number | null
    currency: string
    gross: boolean
}

export interface Type {
    id: string
    name: string
}

export interface Address {
    city: string
    street: string
    building: string
    lat: number
    lng: number
    description: any
    raw: string
    metro?: Metro | null
    metro_stations: MetroStation[]
    id: string
}

export interface Metro {
    station_name: string
    line_name: string
    station_id: string
    line_id: string
    lat: number
    lng: number
}

export interface MetroStation {
    station_name: string
    line_name: string
    station_id: string
    line_id: string
    lat: number
    lng: number
}

export interface Employer {
    id: string
    name: string
    url: string
    alternate_url: string
    logo_urls?: LogoUrls | null
    vacancies_url: string
    accredited_it_employer: boolean
    trusted: boolean
}

export interface LogoUrls {
    original: string
    "90": string
    "240": string
}

export interface Snippet {
    requirement?: string | null
    responsibility: string
}

export interface Schedule {
    id: string
    name: string
}

export interface WorkingTimeMode {
    id: string
    name: string
}

export interface ProfessionalRole {
    id: string
    name: string
}

export interface IExperience {
    id: string
    name: string
}

export interface Employment {
    id: string
    name: string
}

export interface Branding {
    type: string
    tariff: any
}
