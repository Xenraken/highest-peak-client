import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import styles from './login-page.module.css';
import ButtonCreate from "../components/ButtonCreate";


function UploadPage() {
    const { user } = useAuth();
    const [title, setTittle] = useState();
    const [description, setDescription] = useState();
    const [videoFile, setVideoFile] = useState(null);

    if (!user) {
        return <div style={{ color: "white", fontSize: "18px" }}>You must be logged in to upload a video.</div>;
    }

    function handleVideoUpload(e) {
        setVideoFile(e.target.files[0]);
    }

    function uploadHandle() {
        if (!videoFile) {
            alert("Please select a video file");
            return;
        }
        const formData = new FormData();
        formData.append("user_id", user.user_id)
        formData.append("title", title);
        formData.append("description", description);
        formData.append("video", videoFile);


        fetch("http://localhost:5000/videos/upload",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${user.token}`
                },
                body: formData
            });
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Title" value={title} onChange={(e) => { setTittle(e.target.value) }} />
                <input type="text" placeholder="Video Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </div>
            <div className={styles["button-container"]}>
                <input type="file" accept="video/*" onChange={handleVideoUpload} />
                <ButtonCreate className="button" onClick={uploadHandle} text="Upload Video" />
            </div>
        </div>
    );
}

export default UploadPage;