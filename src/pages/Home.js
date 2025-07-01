import PlaceholderVideo from "../components/PlaceholderVideo"
import styles from './home.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


function Home() {
    const [allVideos, setAllVideos] = useState(null);

    useEffect(() => {
        (async function allVideosFetch() {
            const videosRes = await fetch("http://localhost:5000/videos");
            const videosData = await videosRes.json();
            console.log(videosData);
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
                                title={video.title}
                                description={video.description}
                                fileName={video.file_name}
                            />)
                        })
                    ) : (
                        <p>Loading videos...</p>
                    )}
            </div>
        </div >)
}


export default Home;