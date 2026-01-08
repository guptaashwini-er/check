import "./Navbar.css";


export default function Navbar() {

    

  return (
    <div>
    <nav className="navbar">
      <div style={{display:"flex"}}><img className="logoimg" src="\profile.jpg" alt="Logo"/>
       <div className="logo">Tech Ashwin</div>
      </div>
     

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
      {/* <button className="theme-btn" onClick={() => setDark(!dark)}>
        {dark ? "🌙 Dark" : "☀ Light"}
      </button> */}
    </nav>


    </div>
  );
}
