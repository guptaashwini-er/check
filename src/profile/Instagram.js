import { useEffect, useState } from "react";
import "./instagram.css";

export default function Instagram() {
  const [followers, setFollowers] = useState(1);
  const target = 2000;

  useEffect(() => {
    let count = 1;
    const interval = setInterval(() => {
      count += 25;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      setFollowers(count);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="insta-container">
      <div className="top">
        <div className="story">
          <img src="/profile.jpg" alt="profile" />
          <span className="plus">+</span>
        </div>

        <div className="stats">
          <div>
            <strong>11</strong>
            <span>posts</span>
          </div>
          <div>
            <strong>{followers}</strong>
            <span>followers</span>
          </div>
          <div>
            <strong>4</strong>
            <span>following</span>
          </div>
        </div>
      </div>

      <div className="bio">
        <h3>Tech Ashwin</h3>
        <p>🚀 Tech & AI for Creators</p>
        <p>🎬 Video Editing • AI Tools</p>
        <p>📱 Reels = Growth Hacks</p>
        <p>🎁 Free Tools & Resources ↓</p>
        <a href="https://check-9wf7.onrender.com" target="_blank" alt="link" rel="noreferrer">
          check-9wf7.onrender.com
        </a>
      </div>
    </div>
  );
}
