import { Video } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to={"/"}
      className="flex gap-2 rounded-full bg-red-500 p-2 text-primary-foreground"
    >
      <Video className="text-lg" />
      <p>SchnitzelTube</p>
    </Link>
  );
}

export default Logo;
