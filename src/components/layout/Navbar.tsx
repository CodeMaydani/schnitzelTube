import { ModeToggle } from "../mode-toggle";
import Logo from "./Logo";
import Logout from "./Logout";
import SearchBar from "./SearchBar";
import UserAvatar from "./UserAvatar";

function Navbar() {
  return (
    <header>
      <nav className="flex h-16 items-center justify-between border-b-2 bg-accent p-4">
        <div className="flex items-center gap-2">
          <Logout />
          <ModeToggle />
          <UserAvatar />
        </div>
        <SearchBar />
        <Logo />
      </nav>
    </header>
  );
}

export default Navbar;
