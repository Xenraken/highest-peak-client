import PlaceholderBox from "./PlaceholderBox";
import PlaceholderText from "./PlaceholderText";
import { useNavigate } from "react-router";


function PlaceholderVideo({ title, description, fileName })
{
    const navigate = useNavigate();

    function handleClick() 
    {
        navigate(`/watch/${fileName}`, {
            state: { title, description }
        });
    };

    return (<div
        onClick={handleClick}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#bbb")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ccc")}>
        <PlaceholderBox />
        <div style={{ marginTop: "-8px" }}>
            <PlaceholderText title={title} />
        </div>
    </div>);
}


export default PlaceholderVideo;