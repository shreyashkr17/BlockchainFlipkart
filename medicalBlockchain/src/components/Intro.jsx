import React from 'react'
import './intro.css'
import Video1 from "../assets/vid1.mp4"

function Intro() {
  return (
    <div className='IntroHome'>
      <div className="leftIntro">
        <p>
            <span>Welcome</span> to our cutting-edge platform, where healthcare meets the future. We harness the transformative power of blockchain technology to revolutionize medical assistance, ensuring a seamless and secure experience for patients and providers alike. With blockchain's immutable data storage, smart contracts, and decentralized architecture, we enhance data integrity, patient privacy, and interoperability. Our mission is to empower the healthcare industry with innovative solutions that streamline processes, optimize supply chains, and facilitate telemedicine. Embrace the possibilities of blockchain in healthcare, as we pave the way for a smarter, more efficient, and patient-centric medical ecosystem. Together, let's unlock the full potential of blockchain for a healthier tomorrow.
        </p>
      </div>
      <div className="rightIntro">
        <div className="medCap">
            <video src={Video1} loop autoPlay muted style={{width:"100%",margin:"auto"}}></video>
        </div>
      </div>
    </div>
  )
}

export default Intro
