import { Link } from "react-router-dom";
import './placeholder-text.css';

function PlaceholderText({ userId, ownerName, title, views, uploadDate }) {
    return (
        <div className="placeholder-container">

            <div className="placeholder-title">
                {title}
            </div>

            <div className="placeholder-owner">
                <Link to={`/user/${userId}`} className="placeholder-link">
                    {ownerName}
                </Link>
            </div>

            <div className="placeholder-bottom-row">
                <span className="placeholder-date">{uploadDate}</span>
                <span className="placeholder-views">{views} views</span>
            </div>
        </div>
    );
}

export default PlaceholderText;