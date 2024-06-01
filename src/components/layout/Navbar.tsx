import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import UserDropdownMenu from "../UserDropdownMenu";
import { ModeToggle } from "../mode-toggle";
import { buttonVariants } from "../ui/button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Navbar() {
  const { user } = useAuth();
  return (
    <header>
      <nav className="grid h-16 grid-cols-3 items-center justify-between border-b-2 bg-accent p-4">
        <div className="flex items-center gap-2">
          {user ? (
            <UserDropdownMenu />
          ) : (
            <Link
              to={"login"}
              className={buttonVariants({
                className: "gap-2",
              })}
            >
              <p>Login</p>
            </Link>
          )}
          <ModeToggle />
          <p>{user?.name}</p>
        </div>
        <SearchBar />
        <Logo />
      </nav>
    </header>
  );
}

export default Navbar;
