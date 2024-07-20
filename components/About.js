import React from "react";
function About(){
    const myStyle={
        textAlign:"center",
        color:"black",
    }
    return(
        <div className="aboutpage">
           <b><h1 style={myStyle}>About Web Page Designing</h1></b>
            <p>Website design is an important matter and should not be taken lightly. A well-designed website can help you form a good impression on your prospective customers. 
                It can also help you nurture your leads and get more conversions.</p><br/>
             <p>But, more importantly, it provides good user experience and helps your website visitors access and navigate your website with ease.</p><br/>
             <p>
             So, if you are looking for designers to create your website, vet them well and ensure that they are capable of designing user-friendly and accessible websites.
                If you already have a website, you can always conduct a site audit and optimize it to provide a better user experience and to improve accessibility.
             </p>
        </div>
    )
}
export default About;