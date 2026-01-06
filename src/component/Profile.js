import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Profile.css";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  

  return (
    <div >
      
      {/* Toggle Theme */}
      

      {/* Profile Button */}
      <div className="profile-wrapper">
           <h1 className="logo">Welcome to Tech Ashwin's Profile</h1>
         
        <motion.div
          whileHover={{ y: -6, rotateX: 10 }}
          whileTap={{ scale: 0.95 }}
          className="profile-card"
          onClick={() => setOpen(!open)}
        >
           
          <img
            src="\profile.jpg"
            alt="User"
            className="avatar"
          />
          <span className="name">Tech Ashwin</span>
        </motion.div>

        

        {/* Dropdown */}
        {/* <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="dropdown"
            >
              <button>⚙ Settings</button>
              <button>👤 Profile</button>
              <button className="logout">🚪 Logout</button>
            </motion.div>
          )}
        </AnimatePresence> */}

      </div>



     
    </div>
  );
}
