import PlaceholderVideo from "../components/PlaceholderVideo"
import styles from './home.module.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function UserPage() 
{
    const { id } = useParams();
 
    const [userProfile, setUserProfile] = useState(null);
    const [userVideos, setUserVideos] = useState(null);

    useEffect(() => 
    {
        (async function userFetch() 
        {
            const userRes = await fetch(`http://localhost:5000/users?id=${id}&`);
            const userData = await userRes.json();
            setUserProfile(userData.users[0]);
        })();

        (async function videoFetch() 
        {
            const userVideosRes = await fetch(`http://localhost:5000/videos?id=${id}&`);
            const userVideosData = await userVideosRes.json();
            setUserVideos(userVideosData.dbVideoRecords);
            console.log(userVideosData);
        })();
    }, [id]);

    return (
        <div>
            <div>
                {userProfile ? (
                    <>
                        <h2>{` ${userProfile.name}'s page `}</h2>
                    </>
                ) : (
                    <p>User loading...</p>
                )}
            </div>
            <div className={styles["video-container"]}>
                {userVideos ? (
                    userVideos.map((video) => (
                        <PlaceholderVideo
                            key={video.id}
                            title={video.title}
                            description={video.description}
                            fileName={video.file_name}
                        />
                    ))
                ) : (
                    <p>Loading videos...</p>
                )}
            </div>
        </div >)
}


export default UserPage;