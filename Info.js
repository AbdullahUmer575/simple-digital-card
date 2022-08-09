import React from "react"

export default function Info () {
    
    return (
        
        <div>
            <img className = "portrait-img" src = "./portrait.jpg"/>
            <h1>Abdullah Umer</h1>
            <h3>Frontend Developer</h3>
            <p className = "website">sample.website</p>
            
            <div className = "buttons">
                <button className = "mail-button">
                    <img className = "mail-icon" src = "./Mail.png"/>
                    <h2 className = "mail-text">Email</h2>
                </button>
                <button className = "linked-button">
                    <img className = "linked-icon" src = "./Linked.png"/>
                    <h2 className = "linked-text">LinkedIn</h2>
                </button>
            </div>
        </div>
    )
}