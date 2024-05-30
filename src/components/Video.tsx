import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import schnitzelVideo from "@/assets/שניצל זה טעים. (אנימציה).mp4";

export type VideoType = {
  id: string;
  title: string;
  views: number;
};
interface VideoProps extends VideoType {}

function Video({ id, title, views }: VideoProps) {
  return (
    <Link key={id} to={`/watch/${id}`}>
      <Card className="aspect-video h-40 w-full bg-black">
        <video className="h-full w-full" controls>
          <source src={schnitzelVideo} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </Card>
      <p>{title}</p>
      <p className="text-sm">{views} views</p>
    </Link>
  );
}

export default Video;
