import React from 'react'
import "./Home.css"
import DoctorHome from '../assets/1.jpg'
import Navbar from './Navbar'
import Intro from './Intro'
import Benefits from './Benefits'
import {CARDS_DATA} from "../jsonFile/info.js"

function Home() {
  return (
    <>
      <Navbar/>
      <div className='Home'>
      <div className="leftHome">
        <h1>Ensuring Transparency and Security in Healthcare with Blockchain</h1>
      </div>
      <div className="RightHome">
        <img src={DoctorHome} alt="" />
      </div>
      </div>
      <div>
        <Intro/>
      </div>
      <div className='cards-container snap-child'>
        <h2 className="cards-heading">Benefits of Blockchain Encryption</h2>
        <div className="s-contain">
          {CARDS_DATA.map((item) => (
            <Benefits
              key={item.id}
              frontext={item.frontext}
              backtext={item.backtext}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
