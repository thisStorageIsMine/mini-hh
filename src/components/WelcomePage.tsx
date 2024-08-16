const WelcomePage = () => {

    return (
        <div className="text-xl text-slate-400 text-center mt-10">
            <h2 className="text-4xl text-center mb-10">
                Привет  👋
            </h2>
            Это сайт для поиска вакансий.
            <br />
            Я сделал его для теста
            <a className="inline underline px-1" target="_blank" href="https://api.hh.ru/openapi/redoc">HeadHunter API.</a>
            Попробуй написать что-нибудь в поиск.
        </div>
    )


}

export { WelcomePage }