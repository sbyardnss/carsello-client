import { useNavigate } from "react-router-dom"
import UploadWidget from "../UploadWidget";
import "../Admin/Admin.css"
import { useEffect, useRef, useState } from "react";
import { ArtForm } from "./ArtForm";
import { getArt, getEvents, sendArt } from "../ServerManager";
import { ArtList } from "../ArtList/ArtList";
import { EventList } from "../EventList/EventList";
import { EventForm } from "./EventForm";
export const Admin = () => {
    const navigate = useNavigate();
    const [addArt, setAddArt] = useState(false)
    const [addEvent, setAddEvent] = useState(false)
    const [artImageUrl, setArtImageUrl] = useState("")
    const [artwork, setArtwork] = useState([])
    const [viewArt, setViewArt] = useState(false)
    const [events, setEvents] = useState([])
    const [viewEvents, setViewEvents] = useState(false)
    const [sendEvent, setSendEvent] = useState(false)
    const newTitle = useRef()
    const newPrice = useRef()
    const newYear = useRef()
    const newEventTitle = useRef()
    const newEventLocation = useRef()
    const [newEventDateTime, setNewEventDateTime] = useState("")
    const newEventPrice = useRef()
    const [newPiece, updateNewPiece] = useState({
        title: newTitle.current?.value,
        year: newYear.current?.value,
        image: '',
        price: newPrice.current?.value
    })
    const [newEvent, updateNewEvent] = useState({
        title: "",
        location: "", 
        dateTime: "",
        image: "",
        link: "",
        details: "",
        price: 0
    })
    
    useEffect(
        () => {
            const copy = { ...newPiece }
            copy.image = artImageUrl
            updateNewPiece(copy)
        }, [artImageUrl]
    )
    useEffect(
        () => {
            Promise.all([getArt(), getEvents()]).then(([artData, eventData]) => {
                setArtwork(artData)
                setEvents(eventData)
            })
        }, []
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
                            urlSet={setArtImageUrl}
                            imageName={newTitle.current?.value} />
                    </div>
                    <button onClick={() => setAddArt(false)}>cancel</button>
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
    useEffect(
        () => {
            if (newEventDateTime && sendEvent === true) {
                const copy = {...newEvent}
                copy.dateTime = new Date(newEventDateTime).toISOString()
                console.log(copy)
            }
        },[sendEvent]
    )
    // useEffect(
    //     () => {
    //         console.log(newEvent)
    //     },[newEvent]
    // )
    const addEventForm = () => {
        if (addEvent) {
            return (
                <section id="addEventSection">
                    <EventForm
                        title={newEventTitle}
                        location={newEventLocation} 
                        dateTime={newEventDateTime}
                        setDateTime={setNewEventDateTime}
                        price={newEventPrice}
                        event={newEvent}
                        updateEvent={updateNewEvent}
                    />
                    {/* <div>
                        <label>image</label>
                        <UploadWidget
                            urlSet={setArtImageUrl}
                            imageName={newTitle.current?.value} />
                    </div> */}
                    <button onClick={() => setAddEvent(false)}>cancel</button>
                    <button onClick={() => setSendEvent(true)}>submit</button>
                </section>
            )
        }
        else {
            return (
                <section id="addEventSection">
                    <button onClick={() => setAddEvent(true)}>add event</button>
                </section>
            )
        }
    }
    const artList = () => {
        if (viewArt) {
            return (
                <section id="adminArtListSection">
                    {/* <button onClick={() => setViewArt(false)}>Cancel</button> */}
                    <ArtList
                        art={artwork}
                    />
                </section>
            )
        }
    }
    const eventList = () => {
        if (viewEvents) {
            return (
                <section id="adminEventListSection">
                    {/* <button onClick={() => setViewEvents(false)}>Cancel</button> */}
                    <EventList
                        myEvents={events}
                    />
                </section>
            )
        }
    }
    return <>
        <main id="adminContainer">
            <h2>this is the admin page</h2>
            <button onClick={() => {
                localStorage.removeItem("carsello_user")
                navigate("/admin", { replace: true })
            }}>logout</button>
            <button onClick={() => {
                setViewArt(false)
                setViewEvents(!viewEvents)
            }}>{viewEvents === false ? 'View Events' : 'Cancel'}</button>
            <button onClick={() => {
                setViewEvents(false)
                setViewArt(!viewArt)
            }}>{viewArt === false ? 'View Art List' : 'Cancel'}</button>
            {addArtForm()}
            {artList()}
            {addEventForm()}
            {eventList()}
        </main>
    </>
}