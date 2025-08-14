import { Link } from "react-router-dom";

function PlaceholderText({ userId, ownerName, title, views, uploadDate }) {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
        const diffMinutes = Math.ceil(diffTime / (1000 * 60));

        if (diffMinutes < 60) {
            return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
        } else if (diffHours < 24) {
            return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
        } else if (diffDays < 7) {
            return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
        } else if (diffDays < 30) {
            const weeks = Math.floor(diffDays / 7);
            return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
        } else if (diffDays < 365) {
            const months = Math.floor(diffDays / 30);
            return `${months} month${months !== 1 ? 's' : ''} ago`;
        } else {
            const years = Math.floor(diffDays / 365);
            return `${years} year${years !== 1 ? 's' : ''} ago`;
        }
    };

    return (
        <div className="space-y-2">
            <div className="text-white font-semibold text-sm line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">
                {title}
            </div>

            <div className="text-gray-400 text-sm">
                <Link to={`/user/${userId}`} className="hover:text-blue-400 transition-colors duration-200">
                    {ownerName}
                </Link>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{formatDate(uploadDate)}</span>
                <span>{views} views</span>
            </div>
        </div>
    );
}

export default PlaceholderText;