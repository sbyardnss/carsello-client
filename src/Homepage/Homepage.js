import { getArt } from "../ServerManager"
import { useContext, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "../Homepage/Homepage.css"
export const Homepage = () => {
    const navigate = useNavigate()

    return <>
        <main>
            <h2>Carsello Homepage</h2>
            <section id="servicesOfferedList">

            </section>
        </main>
    </>
}