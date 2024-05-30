import Video, { VideoType } from "./Video"

interface VideoListProps {
    videos: VideoType[]
}

function VideoList({ videos }: VideoListProps) {
    return (
        <div>
            <div className="grid gap-2 grid-cols-4 container my-8">
                {videos.map((video) => <Video {...video} />)}
            </div>
        </div>
    )
}

export default VideoList