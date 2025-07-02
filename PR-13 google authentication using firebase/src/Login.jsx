import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import "./GoogleLogin.css";

const Login = () => {
    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                alert(`Welcome ${result.user.displayName}`);
            })
            .catch((error) => {
                console.error("Login failed:", error.message);
            });
    };

    return (
        <div className="login-container">
            <h1>Sign in with Google in React</h1>
            <button className="google-btn" onClick={handleLogin}>
                <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google"
                />
                <span>Sign in with Google</span>
            </button>
        </div>
    );
};

export default Login;