import React from "react";
import  ReactDOM  from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import App from './App.js';
// import Footer from "./components/Footer.js";


const AppLayout=()=>{
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <App/>
                {/* <Footer/> */}
            </BrowserRouter>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)