import { useEffect, useState } from "react"
import User from "./user";
export default function GitHubProfileFinder() {

    const [userName, setUserName] = useState("srinivazCoder");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);




    function handleSubmit() {
        console.log(userName)
        fetchGitHubUserData();
    }

    async function fetchGitHubUserData() {
        setLoading(true);
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`)
            const data = await res.json();
            console.log(data)
            if (data) {
                setUserData(data);
                setLoading(false);
            }

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchGitHubUserData()
    }, []);



    return (
        <div className="github-profile-container">
            <h1>GitHub Profile Finder</h1>
            <div className="input-wrapper">
                <input
                    name="search-by-username"
                    type="text"
                    placeholder="Search GitHub Username..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}

                />
                <button onClick={handleSubmit}>Search</button>
            </div>

           { loading ? <h1>Loading...</h1> : null}
        
            {
                userData && <User user={userData}/>
            }

        </div>
    )
}