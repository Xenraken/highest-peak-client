import ButtonCreate from "../components/ButtonCreate";
import PlaceholderVideo from "../components/PlaceholderVideo"
import { useAuth } from "../contexts/AuthContext";
import styles from './home.module.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function UserPage() {
    const { id } = useParams();
    const [userProfile, setUserProfile] = useState(null);
    const [userVideos, setUserVideos] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        (async function userFetch() {
            const userRes = await fetch(`http://localhost:5000/users?id=${id}&`);
            const userData = await userRes.json();
            console.log("userdata here", userData); //delete later
            setUserProfile(userData.users[0]);
        })();

        (async function videoFetch() {
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

            <div style={{
                position: 'absolute',
                top: '100px',
                right: '20px',
                zIndex: 10
            }}>
                {user && (
                    <Link to="/upload">
                        <ButtonCreate className="button" text="Upload Video" />
                    </Link>
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
                            thumbnailFileName={video.thumbnail_path}
                        />
                    ))
                ) : (
                    <p>Loading videos...</p>
                )}
            </div>
        </div >)
}


export default UserPage;
