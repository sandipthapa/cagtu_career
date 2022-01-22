import React from 'react'
import '../assets/css/job-listings.css';
import GoBack from './GoBack';
import JoinUs from './JoinUs';
import {Helmet} from "react-helmet";
import meta from '../assets/images/meta.png'

function UiUxDeveloper() {
        //  var fbSrc = "https://www.facebook.com/plugins/share_button.php?href="+x+"&layout=button&size=small&width=94&height=20&appId"
    return (
        <div> 
            <Helmet>
                <title>Careers | UI/UX Designer</title>  
                <meta name="title" content="Careers | UI/UX Designer"/>
                <meta name="description" content="We are Hiring UI/UX Designer"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://careers-cagtu.herokuapp.com/ui"/>
                <meta property="og:title" content="Careers | UI/UX Designer"/>
                <meta property="og:description" content="We are Hiring UI/UX Designer"/>
                <meta property="og:image" content={meta}/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://careers-cagtu.herokuapp.com/ui"/>
                <meta property="twitter:title" content="Careers | UI/UX Designer"/>
                <meta property="twitter:description" content="We are Hiring UI/UX Designer"/>
                <meta property="twitter:image" content={meta}/>                            
            </Helmet>     
            <div className="job-title">
                <div className="container">
                    <h1>UI/UX Designer</h1>
                    <div className="job-details">
                        <div className="job-desc">
                            <div className="upper-desc">
                                <h2>Job Responsibilities</h2>
                                <ol>
                                    <li>Gather and evaluate user requirements in collaboration with product managers and engineers</li>
                                    <li>Illustrate design ideas using storyboards, process flows and sitemaps</li>
                                    <li>Design graphic user interface elements, like menus, tabs and widgets</li>
                                    <li>Build page navigation buttons and search fields</li>
                                    <li>Develop UI mockups and prototypes that clearly illustrate how sites function and look like</li>
                                    <li>Create original graphic designs (e.g. images, sketches and tables)</li>
                                    <li>Prepare and present rough drafts to internal teams and key stakeholders</li>
                                    <li>Identify and troubleshoot UX problems (e.g. responsiveness)</li>
                                    <li>Conduct layout adjustments based on user feedback</li>
                                    <li>Adhere to style standards on fonts, colors and images</li>

                                </ol>
                            </div>
                            <div className="lower-desc">
                                <h2>Requirements</h2>
                                <ol>
                                    <li>Proven work experience as a UI/UX Designer or similar role</li>
                                    <li>Portfolio of design projects</li>
                                    <li>Knowledge of wireframe tools (e.g. Wireframe.cc and InVision)</li>
                                    <li>Up-to-date knowledge of design software like Adobe Illustrator and Photoshop</li>
                                    <li>Team spirit; strong communication skills to collaborate with various stakeholders</li>
                                    <li>Good time-management skills</li>
                                    <li>BSc in Design, Computer Science or relevant field</li>
                                    

                                </ol>
                            </div>
                            <div className="extra-info">
                                <p>Job Categories:<span>Design</span></p>
                                <p>Job Experience:<span>2 years to 5 years</span></p>
                                <p>Job Location:<span>Kathmandu, Nepal</span></p>
                                <p>Job Type:<span>Full Time</span></p>
                            </div>
                            <GoBack/>
                        </div>
                        <JoinUs/>                     
                    </div>
                </div>
            </div>
            </div>
    )
}

export default UiUxDeveloper
