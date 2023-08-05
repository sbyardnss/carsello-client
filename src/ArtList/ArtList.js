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
        <main>
            <section id="artListContainer">
                <h2>blurb</h2>
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