import Instagram from "../profile/Instagram";
import Navbar from "./NavBar";
import Product from "./product/ProductBUtton";
import ProfileMenu from "./Profile";

function Hero() {
    return ( 
        <>
        <Navbar/>


        <ProfileMenu/>
        <Product/>
        <Instagram/>
        
        
        </>
     );
}

export default Hero;