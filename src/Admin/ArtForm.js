import { useRef } from "react"


export const ArtForm = ({ title, price, year, piece, update }) => {
    // const newTitle = useRef()
    // const newPrice = useRef()
    // console.log(newPrice.current?.value)
    const handleChange = (e) => {
        const copy = { ...piece }
        if (e.target.id === 'price' || e.target.id === 'year') {
            copy[e.target.id] = parseInt(e.target.value)
            update(copy)
        }
        else {
            copy[e.target.id] = e.target.value
            update(copy)
        }
    }
    return <>
        <section id="newArtForm">
            <label className="form-labels" htmlFor="newTitle">New Piece Title</label>
            <input
                id="title"
                onChange={handleChange}
                className="form-input"
                type="text"
                ref={title}
                placeholder="piece title"
            // required autoFocus
            />
            <label className="form-labels" htmlFor="newPrice">Price</label>
            <input
                id="price"
                onChange={handleChange}
                className="form-input"
                type="number"
                ref={price}
                required autoFocus
            />
            <label className="form-labels" htmlFor="newPrice">Year</label>
            <input
                id="year"
                onChange={handleChange}
                className="form-input"
                type="number"
                ref={year}
                required autoFocus
            />
        </section>
    </>
}