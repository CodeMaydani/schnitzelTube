import { VideoType } from "@/components/Video"
import VideoList from "@/components/VideoList"

function Home() {
    const videos: VideoType[] = [
        {
            id: "asdas",
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            views: 12
        },
        {
            id: "asdas2",
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            views: 12
        },
        {
            id: "asdas3",
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            views: 12
        },
        {
            id: "asdas4",
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            views: 12
        },
    ]
    
    return (
        <div>
            <div>
                <VideoList videos={videos} />
            </div>
        </div>
    )
}

export default Home