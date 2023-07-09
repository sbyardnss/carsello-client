const getToken = () => {
    const localUser = localStorage.getItem()
}
const apiKey = process.env.REACT_APP_API
export const loginUser = (user) => {
    return fetch(`http://localhost:8000/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
}

export const getArt = () => {
    return fetch(`${apiKey}/artwork`)
        .then(res => res.json())
}
export const retrievePiece = (artId) => {
    return fetch(`${apiKey}/artwork/${artId}`)
        .then(res => res.json())
}

export const getEvents = () => {
    return fetch('${apiKey}/events')
        .then(res => res.json())
}
export const retrieveEvent = (eventId) => {
    return fetch(`${apiKey}/events/${eventId}`)
        .then(res => res.json())
}