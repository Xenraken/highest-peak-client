import PlaceholderVideo from "../components/PlaceholderVideo"
import styles from './home.module.css';
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
        <div>
            <div className={styles["video-container"]}>
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
                        <p>Loading videos...</p>
                    )}
            </div>
        </div >)
}


export default Home;
