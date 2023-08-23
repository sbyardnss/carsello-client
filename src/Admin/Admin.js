import { useNavigate } from "react-router-dom"
import UploadWidget from "../Cloudinary/UploadWidget";
import "../Admin/Admin.css"
import { useEffect, useState } from "react";
import { ArtForm } from "./ArtForm";
import { getArt, getEvents, sendArt, sendEvent, updatePiece } from "../ServerManager";
import { ArtList } from "../ArtList/ArtList";
import { EventForm } from "./EventForm";
import { Events } from "../Events/Events";
export const Admin = () => {
    const cloudinaryName = process.env.REACT_APP_CLOUDINARY_NAME
    const cloudinaryPreset = process.env.REACT_APP_CLOUDINARY_PRESET
    const navigate = useNavigate();
    const [addArt, setAddArt] = useState(false)
    const [addEvent, setAddEvent] = useState(false)
    const [artImageUrl, setArtImageUrl] = useState("")
    const [supportImageUrl, setSupportImageUrl] = useState("")
    const [artwork, setArtwork] = useState([])
    const [viewArt, setViewArt] = useState(false)
    const [events, setEvents] = useState([])
    const [viewEvents, setViewEvents] = useState(false)
    const [editArt, setEditArt] = useState(0)
    const [editEvent, setEditEvent] = useState(0)
    // const [supportImages, setSupportImages] = useState([])

    const [newPiece, updateNewPiece] = useState({
        title: "",
        year: 0,
        primary_image: '',
        price: 0,
        support_images: [],
        dimensions: "",
        quantity: 0
    })
    const [newEvent, updateNewEvent] = useState({
        title: "",
        location: "",
        // dateTime: "",
        date: "",
        time: "",
        image: "",
        link: "",
        details: "",
        price: 0
    })
    useEffect(
        () => {
            Promise.all([getArt(), getEvents()]).then(([artData, eventData]) => {
                setArtwork(artData)
                setEvents(eventData)
            })
        }, []
    )

    useEffect(
        () => {
            const copy = { ...newPiece }
            copy.primary_image = artImageUrl
            updateNewPiece(copy)
        }, [artImageUrl]
    )
    useEffect(
        () => {
            const copy = { ...newPiece }
            copy.support_images.push(supportImageUrl)
            updateNewPiece(copy)
        }, [supportImageUrl]
    )
    // useEffect(
    //     () => {
    //         const copy = { ...newPiece }
    //         copy.support_images = supportImages
    //         updateNewPiece(copy)
    //     }, [supportImages]
    // )


    // useEffect(
    //     () => {
    //         if (newEventDateTime && sendEvent === true) {
    //             const copy = { ...newEvent }
    //             copy.dateTime = new Date(newEventDateTime).toISOString()
    //         }
    //     }, [sendEvent]
    // )
    useEffect(
        () => {
            if (editArt !== 0) {
                const selectedPiece = artwork.find(a => a.id === editArt)
                updateNewPiece(selectedPiece)
                document.getElementById('editArtModal').style.display = 'flex'
            }
            else {
                document.getElementById('editArtModal').style.display = 'none'
                getArt()
                    .then(data => setArtwork(data))
            }
        }, [editArt]
    )

    useEffect(
        () => {
            if (addArt) {
                document.getElementById('editArtModal').style.display = 'flex'
            }
            else {
                document.getElementById('editArtModal').style.display = 'none'

            }
        }, [addArt]
    )

    useEffect(
        () => {
            if (addEvent) {
                document.getElementById('addEventModal').style.display = 'flex'
            }
            else {
                document.getElementById('addEventModal').style.display = 'none'
            }
        }, [addEvent]
    )
    useEffect(
        () => {
            if (editEvent !== 0) {
                const selectedEvent = events.find(e => e.id === editEvent)
                updateNewEvent(selectedEvent)
                document.getElementById('addEventModal').style.display = 'flex'
            }
            else {
                document.getElementById('addEventModal').style.display = 'none'
            }
        }, [editEvent]
    )
    const resetNewPiece = () => {
        updateNewPiece({
            title: "",
            year: "",
            image: '',
            price: 0,
            support_images: [],
            quantity: 0,
            sold: false,
            dimensions: ""
        })
    }

    const resetNewEvent = () => {
        updateNewEvent({
            title: "",
            location: "",
            date: "",
            time: "",
            image: "",
            link: "",
            details: "",
            price: 0
        })
    }
    const resetArt = () => {
        getArt()
            .then(data => setArtwork(data))
    }
    const resetEvents = () => {
        getEvents()
            .then(data => setEvents(data))
    }

    const artList = () => {
        if (viewArt) {
            return (
                <section id="adminArtListSection">
                    <ArtList
                        art={artwork}
                        setEdit={setEditArt}
                    />
                </section>
            )
        }
    }
    const eventList = () => {
        if (viewEvents) {
            return (
                <section id="adminEventListSection">
                    <Events
                        myEvents={events}
                        setEdit={setEditEvent}
                    />
                </section>
            )
        }
    }
    const populateSupportImages = () => {
        return newPiece.support_images.map((si, index) => {
            return (
                <div key={si + '--' + index} className="supportImageWithBtn">
                    <img className="uploadDisplayImage" src={si} />
                    <button onClick={() => {
                        const copy = { ...newPiece }
                        const newSupportImages = newPiece.support_images.filter(img => img !== si)
                        copy.support_images = newSupportImages
                        updateNewPiece(copy)
                    }}>remove</button>
                </div>
            )
        })
    }
    return <>
        <main id="adminContainer">
            <section id="editArtModal">
                <ArtForm
                    piece={newPiece}
                    update={updateNewPiece}
                />
                <div className="imageAddAndInfoDiv">
                    <div className="addImageDiv">
                        <label>Primary image (set the name for the piece first)</label>
                        <UploadWidget
                            primeOrSupport={'prime'}
                            urlSet={setArtImageUrl}
                            imageName={newPiece.title}
                            cloudinaryName={cloudinaryName}
                            cloudinaryPreset={cloudinaryPreset}
                            />
                    </div>
                    {
                        newPiece.primary_image ? <img className="uploadDisplayImage" src={newPiece.primary_image} /> : <div>Primary Image: None</div>
                    }
                </div>
                <div className="imageAddAndInfoDiv">
                    <div className="addImageDiv">
                        <label>Other images</label>
                        {/* working on the support images upload */}
                        <UploadWidget
                            primeOrSupport={'support'}
                            supportUrlSet={setSupportImageUrl}
                        />
                    </div>
                    {
                        newPiece.support_images.length ?
                            populateSupportImages()
                            : <div>No support images</div>
                    }
                </div>
                <div className="artFormBtnBlock">
                    <button onClick={() => {
                        if (editArt) {
                            // console.log(`edit -- ${newPiece.id}`)
                            updatePiece(newPiece)
                            setEditArt(0)
                            resetArt()
                            resetNewPiece()
                        }
                        else {
                            // console.log(`add -- ${newPiece}`)
                            sendArt(newPiece)
                                .then(() => resetArt())
                            setAddArt(false)
                        }
                    }}>{addArt ? "submit" : "submit changes"}</button>
                    <button onClick={() => {
                        setEditArt(0)
                        setAddArt(false)
                        resetNewPiece()
                    }}>cancel</button>
                </div>
            </section>
            <section id="addEventModal">
                <EventForm
                    event={newEvent}
                    updateEvent={updateNewEvent}
                />
                {/* <div id="eventFormImage">
                    {

                    }
                </div> */}
                <button onClick={() => {
                    if (addEvent) {
                        if (newEvent.title && newEvent.location && newEvent.date) {
                            sendEvent(newEvent)
                                .then(() => {
                                    resetEvents()
                                    resetNewEvent()
                                    setAddEvent(false)
                                })
                        }
                        else {
                            window.alert("You must have an event name, date, and location")
                        }
                    }
                }}>submit</button>
                <button onClick={() => {
                    setAddEvent(false)
                    resetNewEvent()
                    setEditEvent(0)
                }}>cancel</button>
            </section>

            <h2>this is the admin page</h2>
            <div id="adminBtnBlock">
                <button className="adminBtnReject" onClick={() => {
                    localStorage.removeItem("carsello_user")
                    navigate("/admin", { replace: true })
                }}>logout</button>
                <div className="flex-down">
                    <button className="adminButton" onClick={() => {
                        setViewArt(false)
                        setViewEvents(!viewEvents)
                    }}>{viewEvents === false ? 'View Events' : 'Hide Events'}</button>
                    <button className="adminButton" onClick={() => setAddEvent(true)}>add event</button>
                </div>
                <div className="flex-down">
                    <button className="adminButton" onClick={() => {
                        setViewEvents(false)
                        setViewArt(!viewArt)
                    }}>{viewArt === false ? 'View Art' : 'Hide Art'}</button>
                    {/* {addArtForm()} */}
                    <button className="adminButton" onClick={() => setAddArt(true)}>add art</button>
                </div>
            </div>
            {artList()}
            {/* {addEventForm()} */}
            {eventList()}
        </main>
    </>
}