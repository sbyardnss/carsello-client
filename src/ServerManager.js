const getToken = () => {
    const localUser = localStorage.getItem()
}

export const getArt = () => {
    return fetch('http://localhost:8000/artwork')
        .then(res => res.json())
}
export const retrievePiece = (artId) => {
    return fetch(`http://localhost:8000/artwork/${artId}`)
        .then(res => res.json())
}

export const getEvents = () => {
    return fetch('http://localhost:8000/events')
        .then(res => res.json())
}
export const retrieveEvent = (eventId) => {
    return fetch(`http://localhost:8000/events/${eventId}`)
        .then(res => res.json())
}