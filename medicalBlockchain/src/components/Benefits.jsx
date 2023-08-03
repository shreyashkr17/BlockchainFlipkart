import React, { useState } from 'react'
import './Benefits.css'

function Benefits({frontext,backtext}) {
    const [isFlipped,setIsFlipped] = useState(false)
    const handleClick = () =>{
        setIsFlipped(!isFlipped);
    };

  return (
    <>
        <div className={`flip-card${isFlipped ? " flipped" : ""}`} onClick={handleClick}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p>{frontext}</p>
                </div>
                <div className="flip-card-back">
                    <p>
                        {backtext}
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Benefits
