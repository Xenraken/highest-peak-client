import PlaceholderVideo from "../components/PlaceholderVideo"
import { useState, useEffect } from "react";


function Home() {
    const [allVideos, setAllVideos] = useState(null);

    useEffect(() => {
        (async function allVideosFetch() {
            const videosRes = await fetch("http://localhost:5000/videos");
            const videosData = await videosRes.json();
            console.log("videosdata here:", videosData);
            setAllVideos(videosData.videos);
        })();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {
                        allVideos ? (
                            allVideos.map((video) => {
                                return (< PlaceholderVideo
                                    key={video.id}
                                    userId={video.user_id}
                                    userName={video.user_name}
                                    title={video.title}
                                    views={video.views}
                                    description={video.description}
                                    fileName={video.file_name}
                                    uploadDate={video.upload_date}
                                    thumbnailFileName={video.thumbnail_path}
                                />
                                )
                            })
                        ) : (
                            <div className="col-span-full flex justify-center items-center py-20">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                                    <p className="text-gray-300 text-lg">Loading videos...</p>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div >)
}


export default Home;
