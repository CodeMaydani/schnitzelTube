import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import VideoPlayer from "./VideoPlayer";

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
        <VideoPlayer />
      </Card>
      <p>{title}</p>
      <p className="text-sm">{views} views</p>
    </Link>
  );
}

export default Video;
