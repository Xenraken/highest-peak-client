import PlaceholderBox from "./PlaceholderBox";
import PlaceholderText from "./PlaceholderText";
import { useNavigate } from "react-router";


function PlaceholderVideo({ title, userId, userName, views, description, fileName, uploadDate, thumbnailFileName }) {
    const navigate = useNavigate();
    const thumbnailUrl = `http://localhost:5000/${thumbnailFileName}`;
    function handleClick() {
        navigate(`/watch/${fileName}`, {
            state: { title, description }
        });
    };

    return (
        <div
            onClick={handleClick}
            className="group cursor-pointer bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-700 transform hover:scale-105"
        >
            <div className="relative">
                {
                    thumbnailUrl ? (
                        <img
                            src={thumbnailUrl}
                            alt="Video Thumbnail"
                            className="w-full h-48 object-cover group-hover:brightness-110 transition-all duration-300"
                        />
                    ) : (
                        <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                            <PlaceholderBox />
                        </div>
                    )
                }
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {views} views
                </div>
            </div>

            <div className="p-4">
                <PlaceholderText
                    userId={userId}
                    ownerName={userName}
                    title={title}
                    views={views}
                    uploadDate={uploadDate}
                />
            </div>
        </div>);
}


export default PlaceholderVideo;
