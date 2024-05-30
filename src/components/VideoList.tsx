import Video, { VideoType } from "./Video";

interface VideoListProps {
  videos: VideoType[];
}

function VideoList({ videos }: VideoListProps) {
  return (
    <div>
      <div className="container my-8 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {videos.map((video) => (
          <Video {...video} />
        ))}
      </div>
    </div>
  );
}

export default VideoList;
