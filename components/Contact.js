import React from "react";
function Contact(){
    const style={
        textAlign:"center",
        color:"white",
        backgroundColor:"gray",
    }
    
    return(
        <div className="contact">
            <h1 style={style}>CONTACT FORM</h1><br/>
            <input type="Username" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <input type="Message" placeholder="Enter your Message"/>
            <button type="button">Submit</button>

            <h3>Contact Us By Filling Ur Details Here...</h3>
        </div>
    )
}
export default Contact;