import { useNavigate } from "react-router-dom"

export const ArtList = ({ art }) => {
    const navigate = useNavigate()
    return <>
        <section id="homepageArtSection">
            <ul id="homepageArtDisplay">
                {
                    art?.map(art => {
                        return (
                            <li
                                key={art.id}
                                className="artListItem"
                                onClick={() => {
                                    navigate(`art/${art.id}`)
                                }}>
                                <div className="artDisplayImage">
                                    <img className="artImage" src={art.image} />
                                </div>
                                <div>{art.title}</div>
                                <div>{art.year}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    </>
}