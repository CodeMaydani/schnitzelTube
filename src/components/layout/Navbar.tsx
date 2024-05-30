import Logo from "./Logo"
import Logout from "./Logout"
import SearchBar from "./SearchBar"

function Navbar() {
    return (
        <header>
            <nav className="h-16 flex items-center p-4 justify-between bg-accent border-b-2">
                <Logout />
                <SearchBar />
                <Logo />
            </nav>
        </header>
    )
}

export default Navbar