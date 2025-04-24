import React, { useState } from "react";

const InstagramScraper = () => {
    const [usernames, setUsernames] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const token = "apify_api_DhAPaOBvVzZJ06u2XHl66yYX6ftNfk2F6LPs";
    const actorId = "apify/instagram-scraper";

    const handleScrape = async () => {
        const userList = usernames
            .split(",")
            .map((u) => u.trim())
            .filter((u) => u.length > 0);

        if (userList.length == 0) {
            setError("Please enter at least one username.");
            return;
        }

        // 👇 Redirect to first profile
        const firstUsername = userList[0];
        window.open(`https://www.instagram.com/${firstUsername}/`, "_blank");

        // 👇 Scraping starts in background
        setLoading(true);
        setError("");
        setResults([]);

        try {
            const res = await fetch(
                `https://api.apify.com/v2/acts/${actorId}/run-sync-get-dataset-items?token=${token}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        usernames: userList,
                        resultsLimit: 3,
                        resultsType: "posts",
                        searchType: "user",
                        scrapePosts: true,
                        scrapeComments: false,
                    }),
                }
            );

            const data = await res.json();
            const allPosts = data.flatMap((user) => user?.posts || []);
            setResults(allPosts);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
            <h2>📸 Instagram Multi Scraper</h2>

            <input
                type="text"
                placeholder="e.g. cristiano, nasa, natgeo"
                value={usernames}
                onChange={(e) => setUsernames(e.target.value)}
                style={{
                    padding: 10,
                    width: "350px",
                    marginRight: 10,
                    borderRadius: 5,
                    border: "1px solid #ccc",
                }}
            />
            <button
                onClick={handleScrape}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: 5,
                }}
            >
                Scrape
            </button>

            {loading && <p style={{ marginTop: 20 }}>⏳ Fetching posts...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 20,
                    marginTop: 30,
                }}
            >
                {results.map((post, idx) => (
                    <div
                        key={idx}
                        style={{
                            width: 300,
                            border: "1px solid #ddd",
                            borderRadius: 10,
                            overflow: "hidden",
                            background: "#fff",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        }}
                    >
                        {post.imageUrl && (
                            <img
                                src={post.imageUrl}
                                alt="Post"
                                style={{
                                    width: "100%",
                                    height: 280,
                                    objectFit: "cover",
                                }}
                            />
                        )}
                        <div style={{ padding: 15 }}>
                            <h4>@{post.ownerUsername}</h4>
                            <p style={{ fontSize: 14 }}>
                                {post.caption?.slice(0, 100) || "No caption"}
                            </p>
                            <p style={{ fontSize: 12, color: "gray" }}>
                                ❤️ {post.likesCount ?? "N/A"} | 💬{" "}
                                {post.commentsCount ?? "N/A"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstagramScraper;