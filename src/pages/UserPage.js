import ButtonCreate from "../components/ButtonCreate";
import PlaceholderVideo from "../components/PlaceholderVideo"
import { useAuth } from "../contexts/AuthContext";
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
        <div className="min-h-screen bg-gray-900">
            <div className="container mx-auto px-6 py-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        {userProfile ? (
                            <h2 className="text-3xl font-bold text-white">{`${userProfile.name}'s page`}</h2>
                        ) : (
                            <div className="flex justify-center items-center py-20">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                                    <p className="text-gray-300 text-lg">User loading...</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {user && (
                        <Link to="/upload">
                            <ButtonCreate className="button" text="Upload Video" />
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {userVideos ? (
                        userVideos.map((video) => (
                            <PlaceholderVideo
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
                        ))
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


export default UserPage;
