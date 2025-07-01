import SearchBar from "./SearchBar"
import Bar from "./Bar"
import ButtonCreate from "./ButtonCreate";
import styles from "../pages/home.module.css";
import { useAuth } from "../contexts/AuthContext";
import { Outlet, Link, useNavigate } from "react-router-dom";


function Layout() {

    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        navigate("/");
    };

    return (
        <div>
            <div>
                <SearchBar />
                <Link to="/" style={{
                    position: "absolute", top: "-8px", left: "20px", margin: 0, textDecoration: "none", color: "White"
                }}> <h1>Highest Peak</h1></Link>
                <Bar />
            </div>

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
            <Outlet />
        </div>
    )
}

export default Layout;