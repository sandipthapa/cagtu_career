import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/job-lists.css';
import {FaArrowRight } from "react-icons/fa";

function JobList() {
    return (
        <div className='job-lists-container' style={{position:"relative"}}>
            <div className="section-title">
                <div className="container">
                    <h1>Job Openings</h1>
                </div>
            </div> 

            <div className="cards-section">
                <div className="container">
                    <div className="card-holder">
                        <div className="row">
                            <div className="column">
                                <div className="content-card">
                                    <div className="card-inner">
                                        <h3>UI/UX Designer</h3>
                                        <h4>Kathmandu, Nepal</h4>
                                        <Link to='/ui' href="ui.html" className="find-more">Find More <FaArrowRight className='arrow'/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="content-card">
                                    <div className="card-inner">
                                        <h3>Frontend Developer (React JS)</h3>
                                        <h4>Kathmandu, Nepal</h4>                                
                                        <Link to='/react' className="find-more">Find More <FaArrowRight className='arrow'/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="content-card">
                                    <div className="card-inner">
                                        <h3>Mobile App Developer (Flutter)</h3>
                                        <h4>Kathmandu, Nepal</h4>                                
                                        <Link to='/flutter' className="find-more">Find More <FaArrowRight className='arrow'/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="column">
                                <div className="content-card">
                                    <div className="card-inner">
                                        <h3>Backend Developer (Python/Django)</h3>
                                        <h4>Kathmandu, Nepal</h4>    
                                        <Link to='/django' className="find-more">Find More <FaArrowRight className='arrow'/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default JobList
