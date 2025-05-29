import styles from './login-page.module.css';
import { Link } from "react-router-dom";
import ButtonCreate from "../components/ButtonCreate";
import { useState } from 'react';

function LoginPage() 
{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginHandle()
    {
        try
        {
            fetch("http://localhost:5000/auth/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })

                }
            ).then(res => res.json()).then(data => console.log("Login is successful", data)).catch(error => console.log("Fetch error:", error));
        }
        catch (error)
        {
            console.log("Error during loginHandle", error);

        }

    }

    return (
        <div>
            <Link to="/" style={{
                position: "absolute", top: "-8px", left: "20px", margin: 0, textDecoration: "none", color: "White"
            }}> <h1>Highest Peak</h1></Link>
            <div className={styles['signup-container']}>
                <input type="text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="text" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <div className={styles["button-container"]}>
                    <ButtonCreate className="button" onClick={loginHandle} text="Login" />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;