import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout