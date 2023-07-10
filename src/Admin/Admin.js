import { useNavigate } from "react-router-dom"
import UploadWidget from "../UploadWidget";
import "../Admin/Admin.css"
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
                <UploadWidget />
            </section>
            <section id="addEventSection">
                <div className="artFrame">
                    <img className="artImage" src="https://res.cloudinary.com/da0za1x54/image/upload/v1689003605/sxvf77mqyzdsbk08lvou.jpg"/>
                </div>
                {/* <div className="artFrame" style="background-image: url('https://res.cloudinary.com/da0za1x54/image/upload/v1689003605/sxvf77mqyzdsbk08lvou.jpg')"></div> */}
            </section>
        </main>

    </>
}