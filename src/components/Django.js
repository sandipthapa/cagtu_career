import React from 'react';
import GoBack from './GoBack';
import JoinUs from './JoinUs';

function Django() {
  return (
    <div class="job-title">
        <div class="container">
            <h1>Backend Developer (Python/Django)</h1>
            <div class="job-details">
                <div class="job-desc">
                    <div class="upper-desc">
                        <h2>Job Responsibilities</h2>
                        <ol>
                            <li>Write effective, scalable code</li>
                            <li>Develop back-end components to improve responsiveness and overall performance</li>
                            <li>Integrate user-facing elements into applications</li>
                            <li>Test and debug programs</li>
                            <li>Improve functionality of existing systems</li>
                            <li>Implement security and data protection solutions</li>
                            <li>Assess and prioritize feature requests</li>
                            <li>Coordinate with internal teams to understand user requirements and provide technical solutions</li>
                        </ol>
                    </div>
                    <div class="lower-desc">
                        <h2>Requirements</h2>
                        <ol>
                            <li>Work experience as a Python Developer</li>
                            <li>Expertise in at least one popular Python framework (like Django, Flask or Pyramid)</li>
                            <li>Knowledge of object-relational mapping (ORM)</li>
                            <li>Familiarity with front-end technologies (like JavaScript and HTML5)</li>
                            <li>Team spirit and Good problem-solving skills</li>
                            <li>Understanding of databases</li>
                            <li>Working knowledge of CMS framework</li>
                            <li>In-depth understanding of the entire web development process (design, development and deployment)</li>
                            <li>BSc in Computer Science, Engineering or relevant field</li>
                        
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
  );
}

export default Django;
