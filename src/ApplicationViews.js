import { Outlet, Route, Routes } from "react-router-dom"
import { Homepage } from "./Homepage/Homepage"
// import { ArtProvider } from "./ArtProvider"
import { PieceInspection } from "./PieceInspection/PieceInspection"
import { Events } from "./Events/Events"
import { Admin } from "./Admin/Admin"
import { Authorized } from "./Authorized"
import { Login } from "./Auth/login"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
                <>
                    <Outlet />
                </>
            }>
                <Route path="" element={
                    // <ArtProvider>
                    <Homepage />
                    // </ArtProvider>
                } />
                <Route path="art/:artId" element={
                    // <ArtProvider>
                    <PieceInspection />
                    // </ArtProvider>
                } />
                <Route path="events" element={<Events />} />
                <Route path="admin" element={
                    <Authorized>
                        <Admin />
                    </Authorized>
                } />
            </Route>
        </Routes>
    )
}