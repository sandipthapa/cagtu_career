import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
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
    <>
      <button onClick={toggleModal} className="btn-modal">
        Apply
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
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
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}