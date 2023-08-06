import { useLocation, useNavigate } from "react-router-dom"
import { getArt } from "../ServerManager"
import { useEffect, useState } from "react"
import "../ArtList/Artlist.css"
import { ArtForm } from "../Admin/ArtForm"
export const ArtList = ({ art, setEdit }) => {
    const navigate = useNavigate()
    const url = useLocation()
    const [artwork, setArtwork] = useState([])
    // const [editArt, setEditArt] = useState(false)

    useEffect(
        () => {
            if (!art) {
                getArt()
                    .then(data => setArtwork(data))
            }
            else {
                setArtwork(art)
            }
        }, []
    )


    return <>
        <main className="serviceContainer">
            <section className="serviceInfo">
                <div className="descriptionBlock mediumFont">
                    My pieces utilize varieties of shape and color to achieve balance and evoke emotional responses from the viewer. I derive shape inspirations from natural elements and exaggerate them into a more abstract form, creating nostalgic and familiar images.
                </div>
            </section>
            <section id="artListContainer">

                <ul id="artList">
                    {
                        artwork?.map(art => {
                            return (
                                <li
                                    key={art.id}
                                    className="artListItem"
                                    onClick={() => {
                                        if (url.pathname !== '/admin') {
                                            navigate(`/art/${art.id}`)
                                        }
                                    }}>
                                    <div className="artDisplayImage">
                                        <img className="artImage" src={art.primary_image} />
                                    </div>
                                    <div>{art.title}</div>
                                    <div>{art.year}</div>
                                    {url.pathname === '/admin' ?
                                        <div>
                                            <button onClick={() => setEdit(art.id)}>edit</button>
                                        </div>
                                        : ""}
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </main>
    </>
}