import styles from './signup-page.module.css';
import { Link } from "react-router-dom";
import ButtonCreate from "../components/ButtonCreate";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SignupPage() 
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupSuccess, setSignupSuccess] = useState(false);
    const navigate = useNavigate();


    const signupHandle = async () => 
    {
        try
        {
            const res = await fetch("http://localhost:5000/auth/signup",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, password })
                }
            )
            const data = await res.json();
            if (res.status === 201)
            {
                console.log("Signing up is successful", data);
                setSignupSuccess(true);
            }
            else 
            {
                alert("Signup failed.");

            }
        }
        catch (error)
        {
            console.log("Error during signupHandle", error);
        }
    }

    return (
        <div>
            <Link to="/" style={{
                position: "absolute", top: "-8px", left: "20px", margin: 0, textDecoration: "none", color: "White"
            }}> <h1>Highest Peak</h1></Link>

            {!signupSuccess && (
                <div className={styles['signup-container']}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input type="text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="text" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <div className={styles["button-container"]}>
                        <ButtonCreate className="button" onClick={signupHandle} text="Submit" />
                    </div>
                </div>
            )}
            {signupSuccess && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                }}>
                    <p style={{ color: "#4CAF50", fontSize: "20px", marginBottom: "10px" }}>
                        Success!
                    </p>
                    <button
                        onClick={() => navigate("/login")}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "rgb(108, 99, 111)",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "16px"
                        }}
                    >
                        Click to Login
                    </button>
                </div>
            )}
        </div>
    )
}

export default SignupPage;