import { Play } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to={"/"}
      className="ml-auto flex w-min items-center gap-1 rounded-full"
    >
      <div className="h-6 rounded-md bg-red-500 p-1 px-2">
        <Play className="size-4 fill-white stroke-none" />
      </div>
      <p className="text-lg font-bold tracking-tighter">SchnitzelTube</p>
    </Link>
  );
}

export default Logo;
