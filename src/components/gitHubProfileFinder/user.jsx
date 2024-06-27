import "./gitHubProfile.css";
export default function User({ user }) {
    const { avatar_url, followers, following, public_repos, url, name, login, created_at } = user;
    const userJoined = new Date(created_at);
    return (
        <div className="user">
            <div>
                <img src={avatar_url} className="avatar" alt="User" />
            </div>
            <div className="name-container">
                <a href={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer">{name || login}</a>
                <p>User joined on {` ${userJoined.toDateString()}`}</p>
            </div>
            <div className="profile-info">
                <div>
                    <p>Public Repos</p>
                    <p>{public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Follwing</p>
                    <p>{following}</p>
                </div>
            </div>
        </div>
    )
}