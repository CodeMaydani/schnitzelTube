import { Search } from "lucide-react";
import { Input } from "../ui/input";

function SearchBar() {
  return (
    <div className="relative w-full">
      <Search className="absolute  left-2 top-2" />
      <Input placeholder="search" className="w-full pl-10" />
    </div>
  );
}

export default SearchBar;
