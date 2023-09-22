import { useEffect, useRef } from "react"

export const UploadWidget = ({ primeOrSupport, urlSet, imageName, supportUrlSet, cloudinaryName, cloudinaryPreset }) => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    // const cloudinaryPreset = process.env.CLOUDINARY_PRESET
    
    useEffect(
        () => {
            cloudinaryRef.current = window.cloudinary;
            console.log(cloudinaryRef.current)
            widgetRef.current = cloudinaryRef.current.createUploadWidget({
                // cloudName: 'da0za1x54', //these will be changed to lizzies account info when ready to deploy
                // uploadPreset: 'pcwtfdjj'
                cloudName: cloudinaryName,
                uploadPreset: cloudinaryPreset
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
                    console.log(result)
                    console.log(error)
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