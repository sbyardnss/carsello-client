const getToken = () => {
    const localUser = localStorage.getItem('carsello_user')
    const carselloUser = JSON.parse(localUser)
    return carselloUser.token
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
export const updatePiece = (artObj) => {
    return fetch(`${apiKey}/artwork/${artObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(artObj)
    })
}
export const quantityDecrease = (artId) => {
    return fetch(`${apiKey}/artwork/${artId}/quantity_decrement`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const getEvents = () => {
    return fetch(`${apiKey}/events`)
        .then(res => res.json())
}
export const retrieveEvent = (eventId) => {
    return fetch(`${apiKey}/events/${eventId}`)
        .then(res => res.json())
}
export const setSold = (artId) => {
    return fetch(`${apiKey}/artwork/${artId}/set_sold`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    })
}
export const sendNewOrder = (orderObj) => {
    return fetch(`${apiKey}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderObj)
    })
        .then(res => res.json())
}


//admin only
export const sendArt = (artObj) => {
    const token = getToken()
    return fetch(`${apiKey}/artwork`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(artObj)
    })
        .then(res => res.json())
}

export const sendEvent = (eventObj) => {
    const token = getToken()
    return fetch(`${apiKey}/events`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eventObj)
    })
        .then(res => res.json())
}

export const sendNewArtOrder = (artOrderObj) => {
    const token = getToken()
    return fetch(`${apiKey}/artwork/save_new_order`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(artOrderObj)
    })
}

export const getOrders = () => {
    const token = getToken()
    return fetch(`${apiKey}/orders`, {
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
}
