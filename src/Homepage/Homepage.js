import { getArt } from "../ServerManager"
import { useContext, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "../Homepage/Homepage.css"
export const Homepage = () => {
    const navigate = useNavigate()
    const [artwork, setArtwork] = useState([])

    useEffect(
        () => {
            getArt()
                .then(data => setArtwork(data))
        }, []
    )
    return <>
        <main>
            <h2>Carsello Homepage</h2>
            <section id="homepageArtSection">
                <ul id="homepageArtDisplay">
                    {
                        artwork?.map(art => {
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
        </main>
    </>
}