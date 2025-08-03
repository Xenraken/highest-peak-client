import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import styles from './login-page.module.css';
import ButtonCreate from "../components/ButtonCreate";
import { useNavigate } from "react-router-dom";



function UploadPage() {
    const { user } = useAuth();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [videoFile, setVideoFile] = useState(null);
    const navigate = useNavigate();
    const [isUploading, setIsUploading] = useState(false);
    const [thumbnailFile, setThumbnailFile] = useState(null);

    if (!user) {
        return <div style={{ color: "white", fontSize: "18px" }}>You must be logged in to upload a video.</div>;
    }

    function handleVideoUpload(e) {
        setVideoFile(e.target.files[0]);
    }

    function handleThumbnailUpload(e) {
        setThumbnailFile(e.target.files[0]);
    }

    async function uploadHandle() {
        try {
            if (!videoFile) {
                alert("Please select a video file");
                return;
            }
            setIsUploading(true);
            const formData = new FormData();
            formData.append("user_id", user.id);
            formData.append("user_name", user.name);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("video", videoFile);
            if (thumbnailFile) {
                formData.append("thumbnail", thumbnailFile);
            }

            const response = await fetch("http://localhost:5000/videos/upload", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${user.token}`
                },
                body: formData
            });

            if (!response.ok) {
                const errorData = (await response.json());
                const error = new Error(errorData.message);
                error.status = response.status;
                throw error;
            }
        }
        catch (error) {
            console.error("Error during video upload", error);
            return alert(`Error during video upload: ${error.message}`);
        }
        console.log("Video uploaded successfully", title);
        alert("Video uploaded successfully",)
        navigate(`/user/${user.id}`);
    }
    return (
        <div>
            <div>
                <input type="text" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <input type="text" placeholder="Video Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </div>
            <div className={styles["button-container"]}>
                <input type="file" accept="video/*" onChange={handleVideoUpload} />
                <input type="file" accept="image/*" onChange={handleThumbnailUpload} />
                <ButtonCreate className="button" onClick={uploadHandle} text={isUploading ? "Uploading..." : "Upload Video"} />
            </div>
        </div>
    );
}

export default UploadPage;
