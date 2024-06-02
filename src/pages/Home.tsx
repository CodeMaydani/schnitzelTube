import VideoList from "@/components/VideoList";
import { getVideos } from "@/utils/videos";
import { json, useLoaderData } from "react-router-dom";

export async function loader() {
  const videos = await getVideos();
  return json({ videos });
}
function Home() {
  const { videos } = useLoaderData();

  return (
    <div>
      <div>
        <VideoList videos={videos} />
      </div>
    </div>
  );
}

export default Home;
