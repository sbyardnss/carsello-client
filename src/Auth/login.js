import React, { useState, useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "../Auth/auth.css"
import { loginUser } from "../ServerManager";

export const Login = () => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        const user = {
            username: username.current.value,
            password: password.current.value
        }
        loginUser(user)
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("carsello_user", JSON.stringify(res))
                    navigate("/admin")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }
    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section id="loginBox">
                <form className="form--login" onSubmit={handleLogin}>
                    <div id="loginLogo">
                        <h1>Carsello Admin</h1>
                    </div>
                    <fieldset className="centerItems">
                        <label className="loginLabels" htmlFor="inputUsername">Username</label>
                        <input type="username"
                            ref={username}
                            className="form-control"
                            placeholder="username"
                            required autoFocus />
                        <label className="loginLabels" htmlFor="inputPassword"> Password </label>
                        <input type="password"
                            ref={password}
                            className="form-control"
                            placeholder="password"
                            required autoFocus />
                        <button className="signInButton" type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}