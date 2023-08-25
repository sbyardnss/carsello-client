import { useEffect, useState } from "react"
import { sendNewArtOrder } from "../ServerManager"


export const ArtSortModal = ({ artwork, setSort, resetArt }) => {
    const [artOrderObj, updateArtOrder] = useState({})
    const [newSortOrder, setNewSortOrder] = useState([])
    useEffect(
        () => {
            setNewSortOrder(artwork)
        }, [artwork]
    )
    useEffect(
        () => {
            const newOrderObj = {}
            newSortOrder.map((a, index) => {
                newOrderObj[a.id] = index + 1
            })
            updateArtOrder(newOrderObj)
        }, [newSortOrder]
    )
    return (
        <section id="sortArtModal" >
            <div className="sortListItemHead">
                <h3>sorting art</h3>
                <div>
                    <button onClick={() => {
                        sendNewArtOrder(artOrderObj)
                        .then(res => {
                            if (res.ok === true) {
                                setSort(false)
                                resetArt()
                            }
                        })
                    }}>save</button>
                    <button onClick={() => setSort(false)}>cancel</button>
                </div>
            </div>
            <ul className="adminList sortList">
                {
                    newSortOrder.map((a, index) => {

                        return (
                            <li key={a.id} className="sortListItem">
                                <img className="adminImage" src={a.primary_image} />
                                <div className="flex-down positionInfo">
                                    <div>Current Sort Position: {a.sort_index}</div>
                                    <input type="text" onChange={(e) => {
                                        const targetIndex = parseInt(e.target.value) - 1
                                        const pieceIndex = newSortOrder.indexOf(a)
                                        const removedPiece = newSortOrder.splice(index, 1)
                                        const copy = [...newSortOrder]
                                        // copy[targetIndex] = removedPiece[0]
                                        copy.splice(targetIndex, 0, removedPiece[0])
                                        setNewSortOrder(copy)
                                    }} />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}