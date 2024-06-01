import VideoPlayer from "@/components/VideoPlayer";
import UserAvatar from "@/components/layout/UserAvatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThumbsDown, ThumbsUp } from "lucide-react";

const { title, views, date, description, likes } = {
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  views: 12312312,
  likes: 22,
  date: "1 year ago",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dolorum tenetur quae nostrum, minima quidem, delectus aspernatur aliquam quibusdam, aperiam sed est repellat. Iste provident laudantium dolore earum, ipsa illo.",
};
const { name, subs } = { name: "Lorem ipsum", subs: 12312 };

function WatchVideo() {
  return (
    <div>
      <div className="mb-8 bg-black">
        <div className="container">
          <VideoPlayer />
        </div>
      </div>
      <div className="container space-y-3">
        <p className="text-2xl">{title}</p>
        <div className="flex gap-4">
          <UserAvatar />
          <div>
            <p>{name}</p>
            <p className="text-xs">{subs} subs</p>
          </div>
          <Button>Subscribe</Button>
          <div className="flex ">
            <Button variant={"secondary"} className="gap-1 rounded-e-none p-1">
              <ThumbsUp />
              <p>{likes}</p>
            </Button>
            <Separator
              orientation="vertical"
              className="bg-primary-foreground"
            />
            <Button variant={"secondary"} className="rounded-s-none p-1">
              <ThumbsDown />
            </Button>
          </div>
        </div>
        <Card className="bg-accent p-2">
          <p>
            {views} views {date}
          </p>
          <p>{description}</p>
        </Card>
      </div>
    </div>
  );
}

export default WatchVideo;
