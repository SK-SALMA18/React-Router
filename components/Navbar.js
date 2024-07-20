import React from "react";
import {Link} from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="container">
            <div className="logo">
                LOGO
            </div>
            <nav className="item">
                <ul className="ul">
                    <li><Link to='/'>🏠 HOME</Link></li>
                    <li><Link to='/about'>📚 ABOUT US</Link></li>
                    <li><Link to='/contact'>☎️ CONTACT US</Link></li>
                    <li><Link to='/services'>🌐 SERVICES</Link></li>
                    <li><Link to='/login'>👤 LOGIN</Link></li>
                </ul>
            </nav>
        </div>
    )
}
<div className="footer">
        <p>&copy; WEBSITE FOOTER PAGE</p>
</div>
export default Navbar;