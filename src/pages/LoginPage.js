import { Link } from "react-router-dom";
import ButtonCreate from "../components/ButtonCreate";
import FloatingLabelInput from "../components/FloatingLabelInput";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    function loginHandle() {
        try {
            fetch("http://localhost:5000/auth/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                }
            ).then(res => {
                res.json()
                    .then(data => {
                        if (res.status === 200) {
                            console.log("Login successful", data)
                            login(data);
                            navigate("/")
                        }
                        else {
                            console.log("Login unsuccessful", data)
                            alert(data.message)
                        }
                    })
            }).catch(error => { console.log("Fetch error:", error) });
        }
        catch (error) {
            console.log("Error during loginHandle", error);
        }
    }

    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center min-h-screen px-6">
                <div className="bg-gray-600 p-4 rounded-lg shadow-xl" >
                    <div className="text-center mb-6">
                        <Link
                            to="/"
                            className="text-white text-2xl font-bold hover:text-blue-400 transition-colors duration-200 no-underline"
                        >
                        </Link>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1 text-center">Highest Peak</h2>
                    <p className="text-white text-center mb-6 text-sm">Sign in to your account to continue</p>
                    <div className="space-y-7">
                        <FloatingLabelInput
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            label="Email"
                        />
                        <FloatingLabelInput
                            type="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            label="Password"
                        />
                        <div className="pt-4 flex justify-end">
                            <ButtonCreate className="button" onClick={loginHandle} text="Login" />
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default LoginPage;
