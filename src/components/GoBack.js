import React from 'react'
import {FaArrowLeft } from "react-icons/fa";


function GoBack() {
    const style = { fontSize: "14px",
        padding: "0 5px 0 0" }
    return (
        <div className="back">
            <a href="https://careers.cagtu.com/"><FaArrowLeft style={style}/> Go back to listings</a>
        </div> 
    )
}

export default GoBack
