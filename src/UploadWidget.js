import { useEffect, useRef } from "react"


export const UploadWidget = ({ urlSet, imageName }) => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(
        () => {
            cloudinaryRef.current = window.cloudinary;
            widgetRef.current = cloudinaryRef.current.createUploadWidget({
                cloudName: 'da0za1x54', //these will be changed to lizzies account info when ready to deploy
                uploadPreset: 'pcwtfdjj'
            }, function (error, result) {
                // if (error || result.event === 'success') {
                //     onUpload(error, result)
                // }
                if (result.event === 'success') {
                    urlSet(result?.info?.secure_url)
                }
                else {
                    console.log(result)
                }
            })
        }, []
    )

    return (
        <button onClick={() => widgetRef.current.open()}>
            Upload
        </button>
    )
}

export default UploadWidget