import React from "react";
function Login(){
    const style={
        textAlign:"center",
        color:"black",
        backgroundColor:"aqua",
    }
    return(
        <div className="containers">
            <h1 style={style}>LOGIN FORM</h1><br/>
            <input type="Username" placeholder="username"/>
            <input type="password" placeholder="password"/>
            {/* <input type="checkbox" placeholder="Remember me"/> */}
            <a href="#">Forget password?</a>
            <button type="button">Login</button>
        </div>
    )
}
export default Login;