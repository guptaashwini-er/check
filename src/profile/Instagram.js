import { useEffect, useState } from "react";
import "./instagram.css";

export default function Instagram() {
  const [followers, setFollowers] = useState(0);
  const [posts, setPosts] = useState(0);
  const [following, setFollowing] = useState(0);

  // Load saved data
  useEffect(() => {
    setFollowers(Number(localStorage.getItem("followers")) || 10800);
    setPosts(Number(localStorage.getItem("posts")) || 120);
    setFollowing(Number(localStorage.getItem("following")) || 50);
  }, []);

  // Save data whenever it changes
  useEffect(() => {
    localStorage.setItem("followers", followers);
    localStorage.setItem("posts", posts);
    localStorage.setItem("following", following);
  }, [followers, posts, following]);

  return (
    <div className="card">
      <h2>@yourusername</h2>

      <div className="stats">
        <div>
          <span>{followers}</span>
          <small>Followers</small>
        </div>
        <div>
          <span>{posts}</span>
          <small>Posts</small>
        </div>
        <div>
          <span>{following}</span>
          <small>Following</small>
        </div>
      </div>

      {/* Admin Panel */}
      <div className="admin">
        <input
          type="number"
          value={followers}
          onChange={(e) => setFollowers(Number(e.target.value))}
          placeholder="Followers"
        />
        <input
          type="number"
          value={posts}
          onChange={(e) => setPosts(Number(e.target.value))}
          placeholder="Posts"
        />
        <input
          type="number"
          value={following}
          onChange={(e) => setFollowing(Number(e.target.value))}
          placeholder="Following"
        />
      </div>
    </div>
  );
}
