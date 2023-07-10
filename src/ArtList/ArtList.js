import { useNavigate } from "react-router-dom"
import { getArt } from "../ServerManager"
import { useEffect, useState } from "react"
import "../ArtList/Artlist.css"
export const ArtList = ({ art }) => {
    const navigate = useNavigate()
    const [artwork, setArtwork] = useState([])

    useEffect(
        () => {
            if (!art) {
                getArt()
                    .then(data => setArtwork(data))
            }
        }, []
    )
    return <>
        <main>
            <section id="artListContainer">
                <ul id="artList">
                    {
                        artwork?.map(art => {
                            return (
                                <li
                                    key={art.id}
                                    className="artListItem"
                                    onClick={() => {
                                        navigate(`/art/${art.id}`)
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
        </main>
    </>
}