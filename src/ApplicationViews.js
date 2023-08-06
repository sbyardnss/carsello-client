import { Outlet, Route, Routes } from "react-router-dom"
import { Homepage } from "./Homepage/Homepage"
// import { ArtProvider } from "./ArtProvider"
import { PieceInspection } from "./PieceInspection/PieceInspection"
import { Events } from "./Events/Events"
import { Admin } from "./Admin/Admin"
import { Authorized } from "./Authorized"
import { Login } from "./Auth/login"
import { ArtList } from "./ArtList/ArtList"
import { Curation } from "./Curation/Curation"
import { Design } from "./Design/Design"
import { Writing } from "./Writing/Writing"

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
                <Route path="art" element={<ArtList />} />
                <Route path="art/:artId" element={<PieceInspection />} />
                <Route path="events" element={<Events />} />
                <Route path="curation" element={<Curation />} />
                <Route path="design" element={<Design />} />
                <Route path="writing" element={<Writing />} />
                <Route path="admin" element={
                    <Authorized>
                        <Admin />
                    </Authorized>
                } />
            </Route>
        </Routes>
    )
}