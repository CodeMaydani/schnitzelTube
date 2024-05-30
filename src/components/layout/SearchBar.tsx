import { Search } from "lucide-react"
import { Input } from "../ui/input"

function SearchBar() {
    return (
        <div className="relative">
            <Search className="absolute top-2 left-2" />
            <Input placeholder="search" className="pl-10 w-96" />
        </div>
    )
}

export default SearchBar