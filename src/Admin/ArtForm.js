import { useRef } from "react"


export const ArtForm = ({ piece, update }) => {

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
                value={piece.title}
                placeholder="piece title"
            // required autoFocus
            />
            <label className="form-labels" htmlFor="newPrice">Price</label>
            <input
                id="price"
                onChange={handleChange}
                className="form-input"
                type="number"
                value={piece.price}
                required autoFocus
            />
            <label className="form-labels" htmlFor="newYear">Year</label>
            <input
                id="year"
                onChange={handleChange}
                className="form-input"
                type="number"
                value={piece.year}
                required autoFocus
            />
            <label className="form-labels" htmlFor="newDimensions">Year</label>
            <input
                id="dimensions"
                onChange={handleChange}
                className="form-input"
                type="text"
                value={piece.dimensions}
                required autoFocus
            />
            <label className="form-labels" htmlFor="newQuantity">Year</label>
            <input
                id="quantity"
                onChange={handleChange}
                className="form-input"
                type="number"
                value={piece.quantity}
                required autoFocus
            />
        </section>
    </>
}