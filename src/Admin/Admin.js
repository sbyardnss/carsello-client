import { useNavigate } from "react-router-dom"

export const Admin = () => {
    const navigate = useNavigate();
    // let cloudinary = require('cloudinary').v2;
    // cloudinary.config({
    //     cloud_name: 'da0za1x54',
    //     api_key: '863311724842548',
    //     api_secret: 'QGcwrKF--ZvrN0_0qPl4TgLJ1aY'
    // });
    return <>
        <main id="adminContainer">
            <h2>this is the admin page</h2>
            <button onClick={() => {
                localStorage.removeItem("carsello_user")
                navigate("/", { replace: true })
            }}>logout</button>
            <section id="addArtSection">

            </section>
            <section id="addEventSection">

            </section>
        </main>

    </>
}