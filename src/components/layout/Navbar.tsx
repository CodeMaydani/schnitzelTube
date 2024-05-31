import { useAuth } from "@/contexts/AuthContext";
import { ModeToggle } from "../mode-toggle";
import Logo from "./Logo";
import Logout from "./Logout";
import SearchBar from "./SearchBar";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

function Navbar() {
  const { user } = useAuth();
  return (
    <header>
      <nav className="grid h-16 grid-cols-3 items-center justify-between border-b-2 bg-accent p-4">
        <div className="flex items-center gap-2">
          {user ? (
            <Logout />
          ) : (
            <Link to={"login"} className={buttonVariants()}>
              Login
            </Link>
          )}
          <ModeToggle />
          <UserAvatar />
          <p>{user?.name}</p>
        </div>
        <SearchBar />
        <Logo />
      </nav>
    </header>
  );
}

export default Navbar;
