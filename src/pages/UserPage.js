import SearchBar from "../components/SearchBar"
import Bar from "../components/Bar"
import PlaceholderVideo from "../components/PlaceholderVideo"
import styles from './home.module.css';
import ButtonCreate from "../components/ButtonCreate";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


function UserPage() 
{
    const { user, setUser } = useAuth();
    const { id } = useParams();
    const handleLogout = () =>
    {
        setUser(null);
        navigate("/");
    };
    
    const [userProfile, setUserProfile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => 
        {
          (async function userFetch() 
            {
                const res = await fetch(`http://localhost:5000/users?id=${id}&`);
                const data = await res.json();
                setUserProfile(data);
            })();
        }, [id]);

    return (
        <div>
            <SearchBar />
            <Link to="/" style={{
                position: "absolute", top: "-8px", left: "20px", margin: 0, textDecoration: "none", color: "White"
            }}> <h1>Highest Peak</h1></Link>

            <Bar />

            <div className={styles["button-container"]}>
                {user ? (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                        <Link to={`/user/${user.id}`} style={{ textDecoration: "none" }}>
                            <span style={{ color: "white", fontSize: "18px", }} >{user.name}</span>
                        </Link>
                        <ButtonCreate className="button" text="Logout" onClick={handleLogout} />
                    </div>

                ) : (
                    <>
                        <Link to="/signup">
                            <ButtonCreate className="button" text="Signup" />
                        </Link>
                        <Link to="/login">
                            <ButtonCreate className="button" text="Login" />
                        </Link>
                    </>
                )}
            </div>

            <div className={styles["video-container"]}>
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
                <PlaceholderVideo />
            </div>
        </div >)
}


export default UserPage;