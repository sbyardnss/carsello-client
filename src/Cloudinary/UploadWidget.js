import { useEffect, useRef } from "react"

export const UploadWidget = ({ primeOrSupport, urlSet, imageName, supportUrlSet }) => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    const cloudinaryName = process.env.CLOUDINARY_NAME
    const cloudinaryPreset = process.env.CLOUDINARY_PRESET
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
                    if (primeOrSupport === 'prime') {
                        urlSet(result?.info?.secure_url)
                    }
                    //added second conditional after && to hopefully stop empty strings added to support array
                    if (primeOrSupport === 'support' && result.info.secure_url !== "") {
                        supportUrlSet(result?.info?.secure_url)
                    }
                }
                else {
                    // console.log(result)
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