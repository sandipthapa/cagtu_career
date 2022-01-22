import React from 'react'
import '../assets/css/job-listings.css';
import GoBack from './GoBack';
import JoinUs from './JoinUs';

function ReactDeveloper() {
    return (
        <div class="job-title">
            <div class="container">
                <h1>Frontend Developer (React JS)</h1>
                <div class="job-details">
                    <div class="job-desc">
                        <div class="upper-desc">
                            <h2>Job Responsibilities</h2>
                            <ol>
                                <li>Produce fully functional programs writing clean, testable code</li>
                                <li>Collaborate with internal teams to identify system requirements</li>
                                <li>Integrate back-end API</li>
                                <li>Design user interface and web layout using HTML/CSS practices</li>
                                <li>Upgrade and repair existing programs</li>
                                <li>Perform periodical tests and debugging to maximize program efficiency</li>
                                <li>Create technical documentation for user support</li>
                                <li>Suggest new features to improve program navigation and operation</li>
                                <li>Follow security principles</li>
                                <li>Stay up-to-date with industry developments</li>
                            </ol>
                        </div>
                        <div class="lower-desc">
                            <h2>Requirements</h2>
                            <ol>
                                <li>Proven work experience as a Front-end developer</li>
                                <li>Hands on experience with markup languages</li>
                                <li>Experience with JavaScript, CSS and jQuery</li>
                                <li>Familiarity with browser testing and debugging</li>
                                <li>In-depth understanding of the entire web development process (design, development and deployment)</li>
                                <li>Understanding of layout aesthetics</li>
                                <li>Knowledge of SEO principles</li>
                                <li>Familiarity with software like Adobe Suite, Photoshop and content management systems</li>
                                <li>An ability to perform well in a fast-paced environment</li>
                                <li>Excellent analytical and multitasking skills</li>
                                <li>BSc degree in Computer Science or relevant field</li>
                            </ol>
                        </div>
                        <div class="extra-info">
                            <p>Job Categories:<span>Design, Development</span></p>
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
    )
}

export default ReactDeveloper
