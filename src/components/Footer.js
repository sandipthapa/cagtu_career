import React from 'react'
import '../assets/css/footer.css';
import {FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";


function Footer() {
    return (
        <div className="footer">
        <div className="container">
            <div className="upper-footer">
                <div className="footer-inner">
                    <div className="row">
                        <div className="fcolumn">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="https://cagtu.com/">Home</a></li>
                                <li><a href="https://careers.cagtu.com/">Career</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="fcolumn">
                            <h3>Contact Us</h3>
                            <ul>
                                <li>Cagtu Nepal Pvt Ltd</li>
                                <li>Kathmandu, Nepal</li>
                                <li>+977- 9823416855</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row social-media">
                        <div className="fcolumn">
                            <h3>Social Links</h3>
                            <div className="social">
                                <a href="https://www.facebook.com/cagtuaustralia" target="_blank"><FaFacebook/></a>
                                <a href="https://www.linkedin.com/company/cagtu/mycompany/" target="_blank"><FaLinkedin/></a>
                                <a href="https://twitter.com/cagtuaustralia" target="_blank"><FaTwitter/></a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="lower-footer">
                <p>&copy; Copyright <strong> Cagtu Nepal Pvt. Ltd.</strong> All Rights Reserved</p>
            </div>
        </div>
    </div>
    )
}

export default Footer
