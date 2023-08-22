import { useRef } from "react"


// export const EventForm = ({ title, location, dateTime, setDateTime, price, event, updateEvent }) => {
export const EventForm = ({ event, updateEvent }) => {

    const date = useRef()
    const time = useRef()
    const handleChange = (e) => {
        const copy = { ...event }
        if (e.target.id === 'price') {
            copy[e.target.id] = parseInt(e.target.value)
            updateEvent(copy)
        }
        // else if (e.target.id === 'date' || e.target.id === 'time') {
        //     // if (e.target.id === 'time'){
        //     const [timeHM, amPm] = time.current?.value.split(' ')
        //     let [hour, minute] = timeHM.split(":")
        //     if (amPm?.toLowerCase() === 'pm') {
        //         hour = parseInt(hour) + 12
        //         // setDateTime(`${date.current.value} ${hour}:${minute}`)
        //         const newFullDateTime = `${date.current.value} ${hour}:${minute}`
        //         copy.dateTime = newFullDateTime
        //         updateEvent(copy)
        //     }
        //     else {
        //         // setDateTime(`${date.current.value} ${hour}:${minute}`)
        //         const newFullDateTime = `${date.current.value} ${hour}:${minute}`
        //         copy.dateTime = newFullDateTime
        //         updateEvent(copy)
        //     }
        //     // }

        // }
        else {
            copy[e.target.id] = e.target.value
            updateEvent(copy)
        }
    }
    return <>
        <section id="newEventForm">
            <label className="form-labels" htmlFor="newTitle">Event Title</label>
            <input
                id="title"
                onChange={handleChange}
                className="form-input"
                type="text"
                // ref={title}
                value={event.title}
                placeholder="event title"
            // required autoFocus
            />
            <label className="form-labels" htmlFor="newLocation">Event Location</label>
            <input
                id="location"
                onChange={handleChange}
                className="form-input"
                type="text"
                // ref={location}
                value={event.location}
                placeholder="event location"
            />
            <label className="form-labels" htmlFor="newPrice">Event Price</label>
            <input
                id="price"
                onChange={handleChange}
                className="form-input"
                type="number"
                // ref={price}
                value={event.price}
                required autoFocus
            />
            <label className="form-labels" htmlFor="eventDate">Event Date</label>
            <input
                id="date"
                onChange={handleChange}
                className="form-input"
                type="text"
                ref={date}
                // value={event.date}
                required autoFocus
            />
            <label className="form-labels" htmlFor="eventTime">Event Time</label>
            <input
                id="time"
                onChange={handleChange}
                className="form-input"
                placeholder="hh:mm (pm/am)"
                type="text"
                ref={time}
                required autoFocus
            />
            <label className="form-labels" htmlFor="eventLink">Event Link</label>
            <input
                id="link"
                onChange={handleChange}
                className="form-input"
                placeholder="event url"
                type="text"
                required autoFocus
            />
            <label className="form-labels" htmlFor="eventImage">Event Image URL</label>
            <input
                id="image"
                onChange={handleChange}
                className="form-input"
                placeholder="event image url"
                type="text"
                required autoFocus
            />
            <label className="form-labels" htmlFor="eventDetails">Event Details</label>
            <input
                id="details"
                onChange={handleChange}
                className="form-input"
                placeholder="event details"
                type="text"
                required autoFocus
            />

        </section>
    </>
}