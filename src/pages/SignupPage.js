import { Link } from "react-router-dom";
import ButtonCreate from "../components/ButtonCreate";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupSuccess, setSignupSuccess] = useState(false);
    const navigate = useNavigate();


    const signupHandle = async () => {
        try {
            const res = await fetch("http://localhost:5000/auth/signup",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, password })
                }
            )
            const data = await res.json();
            if (res.status === 201) {
                console.log("Signup successful", data);
                setSignupSuccess(true);
            }
            else {
                console.log("Signup unsuccessful", data)
                alert(data.message);
            }
        }
        catch (error) {
            console.log("Error during signupHandle", error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="flex flex-col items-center justify-center min-h-screen px-6">
                {!signupSuccess ? (
                    <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
                        <div className="text-center mb-6">
                            <Link
                                to="/"
                                className="text-white text-2xl font-bold hover:text-blue-400 transition-colors duration-200 no-underline"
                            >
                                <h1>Highest Peak</h1>
                            </Link>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Account</h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                            <div className="pt-4">
                                <ButtonCreate className="button" onClick={signupHandle} text="Submit" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md text-center">
                        <p className="text-green-400 text-xl mb-4 font-semibold">
                            Success!
                        </p>
                        <ButtonCreate className="button" onClick={() => navigate("/login")} text="Click to Login" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default SignupPage;
