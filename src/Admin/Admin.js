import { useNavigate } from "react-router-dom"
import UploadWidget from "../Cloudinary/UploadWidget";
import "../Admin/Admin.css"
import { useEffect, useState } from "react";
import { ArtForm } from "./ArtForm";
import { getArt, getEvents, getOrders, sendArt, sendEvent, sendUpdatedEvent, updatePiece } from "../ServerManager";
import { ArtList } from "../ArtList/ArtList";
import { EventForm } from "./EventForm";
import { Events } from "../Events/Events";
import { ArtSortModal } from "./ArtSortModal";
import { OrderList } from "./OrderList";

export const Admin = () => {
    const cloudinaryName = process.env.REACT_APP_CLOUDINARY_NAME
    const cloudinaryPreset = process.env.REACT_APP_CLOUDINARY_PRESET
    const navigate = useNavigate();
    const [addArt, setAddArt] = useState(false)
    const [addEvent, setAddEvent] = useState(false)
    const [artImageUrl, setArtImageUrl] = useState("")
    const [supportImageUrl, setSupportImageUrl] = useState("")
    const [artwork, setArtwork] = useState([])
    const [sortedArtwork, setSortedArtwork] = useState([])
    const [viewArt, setViewArt] = useState(false)
    const [events, setEvents] = useState([])
    const [viewEvents, setViewEvents] = useState(false)
    const [editArt, setEditArt] = useState(0)
    const [editEvent, setEditEvent] = useState(0)
    const [sortArt, setSortArt] = useState(false)
    const [orders, setOrders] = useState([])
    const [viewOrders, setViewOrders] = useState(false)
    const [filterByShipped, setFilterByShipped] = useState(false)

    // const [supportImages, setSupportImages] = useState([])

    const [newPiece, updateNewPiece] = useState({
        title: "",
        year: 0,
        primary_image: '',
        price: 0,
        support_images: [],
        dimensions: "",
        quantity: 0
        // sort_index: null
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
            Promise.all([getArt(), getEvents(), getOrders()]).then(([artData, eventData, orderData]) => {
                setArtwork(artData)
                setEvents(eventData)
                setOrders(orderData)
            })
        }, []
    )

    //EITHER ADD A SORTED ART VARIABLE OR SORT ON BACKEND
    useEffect(
        () => {
            const unsortedArt = artwork.filter(a => a.sort_index === 0)
            const sortedArt = artwork.filter(a => a.sort_index !== 0).sort((a, b) => a.sort_index - b.sort_index)
            setSortedArtwork(sortedArt.concat(unsortedArt))

        }, [artwork]
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
        getEvents()
            .then(data => setEvents(data))
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
                <section id="adminListSection">
                    <ArtList
                        art={sortedArtwork}
                        setEdit={setEditArt}
                    />
                </section>
            )
        }
    }
    const eventList = () => {
        if (viewEvents) {
            return (
                <section id="adminListSection">
                    <Events
                        myEvents={events}
                        setEdit={setEditEvent}
                    />
                </section>
            )
        }
    }
    const orderList = () => {
        if (viewOrders) {
            return (
                <section id="adminListSection">
                    <OrderList
                        orders={orders}
                        artwork={artwork}
                        filterByShipped={filterByShipped}
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
                    if (editEvent) {
                        if (newEvent.title && newEvent.location && newEvent.date) {
                            sendUpdatedEvent(newEvent)
                            setEditEvent(0)
                            resetNewEvent()
                            resetEvents()

                        }
                        else {
                            window.alert("You must have an event name, date, and location")
                        }
                    }
                    else {
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
            {sortArt ?
                <ArtSortModal
                    artwork={sortedArtwork}
                    setSort={setSortArt}
                    resetArt={resetArt}
                />
                : ""}
            <div id="adminBtnBlock">
                <div className="adminBtnRow">
                    <button className="adminBtnReject" onClick={() => {
                        localStorage.removeItem("carsello_user")
                        navigate("/admin", { replace: true })
                    }}>logout</button>
                    <button className="adminButton" onClick={() => setSortArt(true)}>sort art</button>
                </div>
                <div className="adminBtnRow">
                    <div className="flex-down adminBtnColumn">
                        <div className="mediumFont">add</div>
                        <button className="adminButton" onClick={() => setAddArt(true)}>add art</button>
                        <button className="adminButton" onClick={() => setAddEvent(true)}>add event</button>
                    </div>
                    <div className="flex-down adminBtnColumn">
                        <div className="mediumFont">View</div>
                        <button className="adminButton" onClick={() => {
                            setViewEvents(false)
                            setViewOrders(false)
                            setViewArt(!viewArt)
                        }}>{viewArt === false ? 'View Art' : 'Hide Art'}</button>
                        <button className="adminButton" onClick={() => {
                            setViewArt(false)
                            setViewOrders(false)
                            setViewEvents(!viewEvents)
                        }}>{viewEvents === false ? 'View Events' : 'Hide Events'}</button>

                    </div>
                    <div className="flex-down adminBtnColumn">
                        <div className="mediumFont">Orders</div>
                        <button className="adminButton" onClick={() => {
                            setViewArt(false)
                            setViewEvents(false)
                            setViewOrders(!viewOrders)
                        }}>{viewOrders === false ? 'View Orders' : 'Hide Orders'}</button>
                        <button className="adminButton" onClick={() => setFilterByShipped(!filterByShipped)}>Show Unshipped</button>
                    </div>
                </div>

            </div>
            {artList()}
            {/* {addEventForm()} */}
            {eventList()}
            {orderList()}
        </main>
    </>
}