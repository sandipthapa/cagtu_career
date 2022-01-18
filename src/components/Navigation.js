import React from 'react'
import '../assets/css/navigation.css';
import logo from '../assets/images/logo-white.png';

function Navigation() {
    function myFunc(){
        var x = document.getElementById("nav-links-active-hide");
        if (x.className === "nav-links-active") {
            x.className = " nav-links-active-hide";
        } else {
            x.className = "nav-links-active";
        }
    }
    return (
        <div className="nav">
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    <a href="https://cagtu.com/"><img src={logo} alt=""></img></a>
                </div>
                <div className="nav-links" id="nav-links">
                    <ul>
                        <a href="https://cagtu.com/"><li>Home</li></a>
                        <a href="https://careers.cagtu.com/"><li>Career</li></a>
                    </ul>
                </div>
                <div className="toggle">
                    <a href="#" className="toggle_btn" onClick={myFunc}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </a>
                </div>
            </div>
            <div className="nav-links-active-hide" id="nav-links-active-hide">
                <ul>
                    <a href="https://cagtu.com/"><li>Home</li></a>
                    <a href="https://careers.cagtu.com/"><li>Career</li></a>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Navigation
