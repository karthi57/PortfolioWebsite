import React from 'react'
import heartemoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import './Services.css'
import Card from '../Card/Card'
import Resume from "../Services/Resume.pdf"
import { useContext } from "react";
import { themeContext } from '../../Context';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="services" id='services'>
    {/* left side */}
    <div className="awesome">
        <span style={{color:darkMode? "#fff": "",
    }}>My Awesome</span>
        <span>Services</span>
        <span style={{color:darkMode? "#fff": "",
    }}>I've successfully contributed to diverse tech projects, harnessing skills in HTML, CSS, JavaScript, React, and Python to deliver high-quality services. My dedication to excellence ensures that every project I undertake is executed with precision and professionalism.</span>
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
    </div>

    {/* right side */}
    <div className="cards">
        <div style={{left:"14rem"}}>
        <Card
             emoji = {heartemoji} 
             heading = {"Design"}
             details = {'Figma, Photopea, Dora, AdobeXD, Spline'}
        />
        </div>
        <div  style={{top:'12rem', left:'-4rem'}}>
        <Card
             emoji={Glasses}
             heading={"Developer"}
             details={'Html, Css, JavaScript, React, Tailwind Css'}
          />
      </div>
        <div style={{top:"21rem", left:'11rem'}}>
        <Card
            emoji={Humble}
            heading={"UI/UX"}
            details={
              "Persona,Journey-Maps,Wireframming, Prototyping,User-centric approaches"
            }
            />
        </div>
        <div className=" blur s-blur"style={{backgroundz : "var(--purple"}}></div>
    </div>
   </div>
  )
}

export default Services