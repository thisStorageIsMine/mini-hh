import { useAppSelector } from "../hooks"
import { selectFavoriteVacancies } from "../slices/favoriteSlice"

const Favorite = () => {
    const favoriteVacancies = useAppSelector(selectFavoriteVacancies)


    return (
        <div className="sticky top-20">
            {favoriteVacancies.map(v =>
                <>
                    <article key={v.id} >
                        <h4>{v.name}</h4>

                        <h5>{v.employer.name}</h5>
                    </article>
                    <hr />
                </>
            )}
        </div>
    )
}

export { Favorite }