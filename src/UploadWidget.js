import { useEffect, useRef } from "react"


export const UploadWidget = ({ primeOrSupport, urlSet, imageName, otherImages, setOtherImages }) => {
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
                    if (primeOrSupport === 'prime'){
                        urlSet(result?.info?.secure_url)
                    }
                    else {
                        const copy = [...otherImages]
                        copy.push(result?.info?.secure_url)
                        setOtherImages(copy)
                    }
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