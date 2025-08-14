import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
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
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-lg bg-gray-800 p-6 rounded-lg shadow-xl">
                    You must be logged in to upload a video.
                </div>
            </div>
        );
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
        <div className="min-h-screen bg-gray-900">
            <div className="container mx-auto px-6 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-white mb-8 text-center">Upload Video</h1>

                    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Title</label>
                                <input
                                    type="text"
                                    placeholder="Enter video title"
                                    value={title}
                                    onChange={(e) => { setTitle(e.target.value) }}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Description</label>
                                <textarea
                                    placeholder="Enter video description"
                                    value={description}
                                    onChange={(e) => { setDescription(e.target.value) }}
                                    rows="4"
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Video File</label>
                                    <input
                                        type="file"
                                        accept="video/*"
                                        onChange={handleVideoUpload}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white text-sm font-medium mb-2">Thumbnail (Optional)</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleThumbnailUpload}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <ButtonCreate
                                    className="button"
                                    onClick={uploadHandle}
                                    text={isUploading ? "Uploading..." : "Upload Video"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadPage;
