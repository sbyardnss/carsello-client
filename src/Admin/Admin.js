import { useNavigate } from "react-router-dom"
import UploadWidget from "../UploadWidget";
import "../Admin/Admin.css"
import { useEffect, useRef, useState } from "react";
import { ArtForm } from "./ArtForm";
import { sendArt } from "../ServerManager";
export const Admin = () => {
    const navigate = useNavigate();
    const [addArt, setAddArt] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const newTitle = useRef()
    const newPrice = useRef()
    const newYear = useRef()
    const [newPiece, updateNewPiece] = useState({
        title: newTitle.current?.value,
        year: newYear.current?.value,
        image: '',
        price: newPrice.current?.value
    })

    useEffect(
        () => {
            const copy = {...newPiece}
            copy.image = imageUrl
            updateNewPiece(copy)
        },[imageUrl]
    )
    useEffect(
        () => {
            console.log(newPiece)
        },[newPiece]
    )
    const addArtForm = () => {
        if (addArt) {
            return (
                <section id="addArtSection">
                    <ArtForm
                        title={newTitle}
                        price={newPrice}
                        year={newYear}
                        piece={newPiece}
                        update={updateNewPiece}
                    />
                    <div>
                        <label>image</label>
                        <UploadWidget
                            urlSet={setImageUrl} 
                            imageName={newTitle.current?.value}/>
                    </div>
                    <button onClick={() => sendArt(newPiece)}>submit</button>

                </section>
            )
        }
        else {
            return (
                <section id="addArtSection">
                    <button onClick={() => setAddArt(true)}>add art</button>
                </section>
            )
        }
    }
    console.log(newPiece)
    return <>
        <main id="adminContainer">
            <h2>this is the admin page</h2>
            <button onClick={() => {
                localStorage.removeItem("carsello_user")
                navigate("/admin", { replace: true })
            }}>logout</button>
            {addArtForm()}
            <section id="addEventSection">
                {/* <div className="artFrame">
                </div> */}
            </section>
        </main>
    </>
}