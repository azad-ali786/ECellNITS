import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

const Footer =()=>{
    return (
    <footer>
        <div className="section1">
                <h1>Logo</h1>
                <h3>CopyRight reserved by Ecell NITS</h3>
        </div>
        <div className="section2">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Collaborations</Link></li>
                        <li><Link to="/">Events</Link></li>
                        <li><Link to="/">Team</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>
        
        <div className="section3">
                <h3>Contacts</h3>
                <ul>
                    <li><Link>fb</Link></li>
                    <li><Link>fb</Link></li>
                    <li><Link>fb</Link></li>
                    <li><Link>fb</Link></li>
                    <li><Link>fb</Link></li>
                </ul>
        </div>
    </footer>)
}

export default Footer;