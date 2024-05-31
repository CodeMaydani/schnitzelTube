import schnitzelVideo from "@/assets/שניצל זה טעים. (אנימציה).mp4";

function VideoPlayer() {
  return (
    <video className="h-full w-full" controls>
      <source src={schnitzelVideo} type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  );
}

export default VideoPlayer;
