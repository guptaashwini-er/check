
import React from "react";
import "./Product.css";


import Button from "./Button";



function Product() {
    return ( 
        <div className="contener">
        <div className="product-container">
            <div style={{marginTop:"20px", alignItems:"center", textAlign:"center", display:"flex"}}>
        <ul className="nav-links">
        <li><a href="https://www.instagram.com/tech__ashwin?igsh=MXZ3aWJzdzdhbWVibA%3D%3D">Instagram</a></li>
        <li><a href="https://www.facebook.com/techashwin">Facebook</a></li><br/>
        <li><a href="https://www.snapchat.com/add/techashwin">Snapchat</a></li>
         <li><a href="http://www.youtube.com/@tech.ashwini">Youtube</a></li>
      </ul>
        </div>
            <Button/>
        </div>

        </div>
     );
}

export default Product ;