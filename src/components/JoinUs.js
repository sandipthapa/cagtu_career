import React, { useState } from "react";
import { ShareSocial } from "react-share-social";
import img from '../assets/images/resume.png';
import {FaWindowClose } from "react-icons/fa";
import "./Modal/Modal.css";

function JoinUs() {
    var x = document.URL;
    const style = {
        borderRadius: 3,
        border: 0,
        color: 'black',
        padding: '0 30px',
      };
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <div className="form">
            <div className="form-wrapper">
                <h2>Join With Us</h2>
                <img src={img} alt=""/>
                <p>Please send us your resume at<a href="mailto:careers@cagtu.com"><strong>careers@cagtu.com</strong></a></p>
                <p className="or">or</p>
                <input type="submit" value="Apply Now" onClick={toggleModal}/>


      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <form id="my-form" action="https://formspree.io/f/mknyowde" method="POST">
            <div className="name">
                <label for="fullname" name="fullname">Full name</label><span>*</span><br/>
                <input type="text" required/>
            </div>

            <div className="">
                <label for="email" name="email">Email</label><span>*</span><br/>
            <input type="text" required/>
            </div>

            <div className="cover">
                <label for="cover-letter" name="cover-letter">Cover Letter</label><span>*</span><br/>
                <input type="text" required/>
            </div>

            <div className="resume">
                <label className="resumeText" for="resume" name="resume">Upload Resume</label><span>*</span><br/>
                <input type="file" className="resumeUpload" required/>
            </div>

            <div className="check">
                <input type="checkbox" required/>
                <label for="lname" className="">By checking this form you agree with the storage and handling of your data by this website. *</label><br/>
            </div>
            <input type="submit" value="Submit"/>
        </form>
            <button className="close-modal" onClick={toggleModal}>
            <FaWindowClose/>
            </button>
          </div>
        </div>
      )}
    <div className="share">
        <p>Please Share:</p>
        <div className="social-share">
            <ShareSocial className="shareSocial" url={x} socialTypes={["facebook", "twitter", "linkedin"]} style={style}/>
        </div>
    </div>
            </div>

                        </div>
    )
}

export default JoinUs
