import { useState, useRef } from "react";
import "./radhe.css";


const flowerEmojis = ["🌸", "🌼", "🌹", "🌺", "🌻", "💐"];

export default function Radhe() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const [flowers, setFlowers] = useState([]);

  const audioRef = useRef(null);

  const handleClick = () => {
    setCount(c => c + 1);
    setList(l => [...l, "Radhe Radhe"]);

    // 📳 vibration
    if (navigator.vibrate) {
      navigator.vibrate([40, 30, 40]);
    }

    // 🔊 sound
    audioRef.current.currentTime = 0;
    audioRef.current.play();

    // 🖼️ image pop
    setShowImage(true);
    setTimeout(() => setShowImage(false), 1200);

    // 🌸 flower rain
    const newFlowers = Array.from({ length: 45 }).map(() => ({
      id: Math.random(),
      left: Math.random() * 100,
      size: 18 + Math.random() * 26,
      duration: 3 + Math.random() * 3,
      emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)]
    }));

    setFlowers(prev => [...prev, ...newFlowers]);

    setTimeout(() => {
      setFlowers(prev => prev.filter(f => !newFlowers.includes(f)));
    }, 7000);
  };

  // 🔄 RESET BUTTON FUNCTION
  const handleReset = () => {
    setCount(0);
    setList([]);
    setFlowers([]);
    setShowImage(false);
  };

  return (
    <div className="container">
      <audio ref={audioRef} src="audio/radhe.mp3" preload="auto" />

      {/* 🌸 Flower Rain */}
      {flowers.map(f => (
        <span
          key={f.id}
          className="flower"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}px`,
            animationDuration: `${f.duration}s`
          }}
        >
          {f.emoji}
        </span>
      ))}

      {/* 🖼️ Radhe Image */}
      {showImage && (
        <img src="/radhe.png" alt="Radhe" className="radhe-img" />
      )}

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button className="btn" onClick={handleClick}>
          🙏 Radhe Radhe
        </button>
        
        <div>
            <img src="image/crosbutton.jpg" alt="Radhe" className="cros-btn" onClick={handleReset} />
        </div>

        {/* Follow image  */}

        <div>
            <a href="https://www.instagram.com/tech__ashwin?igsh=MXZ3aWJzdzdhbWVibA%3D%3D" target="_blank" rel="noopener noreferrer">
            <img src="/profile.jpg" alt="follow" className="follow-img" />
            
            </a>
        </div>
        
      </div>

      <div className="count">Count: {count}</div>

      <div className="box">
        {list.map((item, index) => (
          <div key={index} className="radhe">
            {item}
          </div>
        ))}
      </div>

    
    </div>
  );
}
