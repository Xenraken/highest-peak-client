import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function WatchPage() 
{
    const { fileName } = useParams();
    const videoUrl = `http://localhost:5000/videos/${fileName}`;

    const [videoData, setVideoData] = useState(null);


    useEffect(() =>
    {
        (async function videoWatchFetch() 
        {
            const videoResponse = await fetch(`http://localhost:5000/videos/data/${fileName}`);
            const videoDataRes = await videoResponse.json();
            console.log("videodata here:", videoDataRes);
            setVideoData(videoDataRes.dbVideoRecord[0]);
        })()
    }, [fileName]);

    return (
        <div>
            <h2>{videoData?.title || "Loading..."}</h2>
            <video width="720" height="480" controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {videoData && <p>{videoData.description}</p>}
        </div >)
}


export default WatchPage;