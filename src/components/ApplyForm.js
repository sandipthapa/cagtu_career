import React from 'react'

function ApplyForm() {
    return (
        <form id="my-form" action="https://formspree.io/f/mknyowde" method="POST">
            <div className="name">
                <label for="fullname" name="fullname">Full name</label><span>*</span><br/>
                <input type="text"/>
            </div>

            <div className="">
                <label for="email" name="email">Email</label><span>*</span><br/>
            <input type="text"/>
            </div>

            <div className="cover">
                <label for="cover-letter" name="cover-letter">Cover Letter</label><span>*</span><br/>
                <input type="text"/>
            </div>

            <div className="resume">
                <label for="resume" name="resume">Upload Resume</label><span>*</span><br/>
            <input type="file"/>
            </div>

            <div className="check">
                <input type="checkbox"/>
                <label for="lname" className="">By checking this form you agree with the storage and handling of your data by this website. *</label><br/>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default ApplyForm
