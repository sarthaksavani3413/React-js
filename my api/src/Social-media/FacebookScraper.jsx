import React, { useState } from "react";
import "./App.css"; // Make sure you have this CSS file or rename it accordingly

const FacebookScraper = () => {
    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState("");

    const apiURL = "https://mocki.io/v1/3a91724a-5bb8-493d-93e1-d342f9910eb3";

    const searchProfile = async () => {
        const trimmedUsername = username.trim().toLowerCase();
        if (!trimmedUsername) {
            setError("Please enter a username");
            setProfile(null);
            return;
        }

        try {
            const res = await fetch(apiURL);
            const data = await res.json();

            const foundUser = data.users.find(
                (user) => user.username.toLowerCase() === trimmedUsername
            );

            if (foundUser) {
                setProfile(foundUser);
                setError("");
            } else {
                setProfile(null);
                setError("User not found");
            }
        } catch (err) {
            setError("Error fetching data");
            setProfile(null);
        }
    };

    return (
        <div className="container">
            <h1>Facebook Profile Viewer</h1>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Enter username (e.g., ronaldo)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={searchProfile}>Search</button>
            </div>

            {error && <p className="error">{error}</p>}

            {profile && (
                <div className="profile-box">
                    <img
                        src={profile.profile_picture}
                        alt={profile.full_name || "Profile"}
                        style={{ borderRadius: "50%", width: "150px", height: "150px" }}
                    />
                    <h2>{profile.full_name} (@{profile.username})</h2>
                    <p>{profile.bio}</p>
                    {profile.is_private && <p><strong>This profile is private</strong></p>}
                </div>
            )}

            <footer>
                <p>
                    Made with ❤️ by{" "}
                    <a
                        href="https://www.facebook.com/profile.php?id=100091838706721"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @sarthaksavani
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default FacebookScraper;