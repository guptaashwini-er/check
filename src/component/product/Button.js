import "./Button.css";

const data = [
  { id: 1, name: "Chasing Pods", img: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "MissMohini Loves", img: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "Big Boss Season 18", img: "https://i.pravatar.cc/40?img=3" }
];

export default function Button() {
  return (
    <div className="pill-wrapper">
      {data.map(item => (
        <button key={item.id} className="pill-btn">
          <img src={item.img} alt={item.name} />
          <span>{item.name}</span>
          <i>▾</i>
        </button>
      ))}

      <button className="pill-btn pill-solid">
        Buy My Course
      </button>
    </div>
  );
}
