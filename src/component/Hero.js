import Instagram from "../profile/Instagram";
import Navbar from "./NavBar";
import Product from "./product/ProductBUtton";
import ProfileMenu from "./Profile";
import Radhe from "../radhe/Radhe";

function Hero() {
    return ( 
        <>
        <Navbar/>


        <ProfileMenu/>
        <Product/>
        <Instagram/>
        <Radhe/>
        
        
        </>
     );
}

export default Hero;