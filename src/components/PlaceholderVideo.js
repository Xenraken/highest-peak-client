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
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#bbb")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ccc")}
            style={{ cursor: "pointer", padding: "10px", backgroundColor: "#ccc", borderRadius: "8px" }}
        >
            {
                thumbnailUrl ? (
                    <img
                        src={thumbnailUrl}
                        alt="Video Thumbnail"
                        style={{
                            width: "100%",
                            maxWidth: "400px",
                            height: "auto",
                            borderRadius: "8px",
                            display: "block"
                        }}
                    />
                ) : (
                    <PlaceholderBox />
                )
            }

            <div style={{ marginTop: "-8px" }}>
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
