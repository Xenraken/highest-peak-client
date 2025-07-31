import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import ButtonCreate from "../components/ButtonCreate";
import { Link } from "react-router-dom";



function WatchPage() {
    const { user } = useAuth();
    const { fileName } = useParams();
    const videoUrl = `http://localhost:5000/videos/${fileName}`;
    const [videoData, setVideoData] = useState(null);
    const navigate = useNavigate();
    const [isDeleting, setIsDeleting] = useState(false);
    const [comment, setComment] = useState();
    const [videoComments, setVideoComments] = useState();

    async function handleVideoDelete() {
        try {
            const response = await fetch(`http://localhost:5000/videos/${fileName}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            });
            if (!response.ok) {
                const errorData = (await response.json());
                const error = new Error(errorData.message);
                error.status = response.status;
                throw error;
            }
        }
        catch (error) {
            console.error("Error during video delete", error);
            return alert("Error during video delete", error);
        }
        setIsDeleting(true);
        console.log("Video deleted successfully", videoData.title);
        alert("Video deleted successfully",)
        navigate(`/user/${user.id}`);
    }

    async function handleMakeComment() {
        try {
            const response = await fetch(`http://localhost:5000/comments/upload`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.token}`
                },
                body: JSON.stringify({
                    userId: user.id,
                    videoId: videoData.id,
                    userName: user.name,
                    comment: comment
                })
            });
            if (!response.ok) {
                const errorData = (await response.json());
                const error = new Error(errorData.message);
                error.status = response.status;
                throw error;
            }
        }
        catch (error) {
            console.error("Error during making a comment", error);
            return alert("Something went wrong: No access to making comments");
        }
        return alert("Comment successful");
    }
    useEffect(() => {
        if (!videoData?.id) return;

        async function handleGetComments() {
            try {
                const response = await fetch(`http://localhost:5000/comments?videoId=${videoData.id}`);
                const commentsData = await response.json();
                if (!response.ok) {
                    const error = new Error(commentsData.message);
                    error.status = response.status;
                    throw error;
                }
                console.log(commentsData);
                setVideoComments(commentsData);
            }
            catch (error) {
                console.error("Error during loading comments", error);
                return alert("Something went wrong: Can not load the comments");
            }
        }
        handleGetComments();

    }, [videoData]);

    useEffect(() => {
        (async function videoWatchFetch() {
            const videoResponse = await fetch(`http://localhost:5000/videos/data/${fileName}`);
            const videoDataRes = await videoResponse.json();
            setVideoData(videoDataRes.dbVideoRecord[0]);
        })()
    }, [fileName]);

    useEffect(() => {
        console.log("Video data here:", videoData);

    }, [videoData]);

    return (
        <div>
            <h2>{videoData?.title || "Loading..."}</h2>

            <video width="720" height="480" controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {videoData &&
                <Link to={`/user/${videoData.user_id}`} >
                    <h1>{videoData.user_name}</h1>
                </Link>}
            {videoData && <p>{videoData.description}</p>}

            <div>
                {user && videoData && user.id === videoData.user_id && (<ButtonCreate className="button" onClick={handleVideoDelete} text={isDeleting ? "Deleting Video..." : "Delete This Video"} />)}
            </div>

            <div>
                {user && (<input
                    type="text"
                    placeholder="Make a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />)}
            </div>

            <div>
                <ButtonCreate className="button" onClick={handleMakeComment} text="Make a comment" />
            </div>



            <div>
                {videoComments?.comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            <Link to={`/user/${comment.user_id}`} >
                                <h5>{comment.user_name}:</h5>
                            </Link>

                            <p>{comment.comment}</p>
                        </div>
                    );
                })}
            </div>

        </div >)
}

export default WatchPage;
