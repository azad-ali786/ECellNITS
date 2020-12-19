import React from "react";
import {Link} from "react-router-dom";
import "./navBar.css";
const navBar=()=>{
    return(<nav>
                <div className="logo">
                    <Link to="/"><h1>Logo</h1></Link>
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Collaborations</Link></li>
                        <li><Link to="/">Events</Link></li>
                        <li><Link to="/">Team</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>
           </nav>
        )
}

export default navBar;