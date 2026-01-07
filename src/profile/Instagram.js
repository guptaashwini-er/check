import { useRef } from "react";
import "./instagram.css";

export default function Instagram() {
  const cardRef = useRef(null);

  const tilt = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 12;
    const rotateY = ((x / rect.width) - 0.5) * -12;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const reset = () => {
    cardRef.current.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <div className="page">
      <div
        className="ig-card"
        ref={cardRef}
        onMouseMove={tilt}
        onMouseLeave={reset}
      >
        {/* Top section */}
        <div className="top">
          <img
            src="https://i.imgur.com/8Km9tLL.jpg"
            alt=""
            className="dp"
          />

          <div className="stats">
            <div><b>120</b><span>Posts</span></div>
            <div><b>10.8K</b><span>Followers</span></div>
            <div><b>50</b><span>Following</span></div>
          </div>
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>yourusername</h2>
          <p>
            Tech Creator 🚀 <br />
            Reels | Web | AI <br />
            🇮🇳 India
          </p>

          <button className="follow">Follow</button>
        </div>

        {/* Highlights */}
        <div className="highlights">
          <div>🔥</div>
          <div>🎥</div>
          <div>💻</div>
          <div>🤖</div>
        </div>

        {/* Grid Preview */}
        <div className="grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="post"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
