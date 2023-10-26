import React from 'react'
import "./Navbar.css"
import Logo from "../../img/panda-logo.jpg"

// import Toggle from '../Toggle/Toggle';
import { Link } from "react-scroll";

const Navbar =()=>{
 return(
    <div className="n-wrapper">
        <div className="nav-left">
            <img src={Logo} alt="" />
            <div className="nav-name">Karthik</div>
            {/* <Toggle/> */}
        
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul style={{listStyleType:"none"}}>
                    <li> <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
              </li>
              <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            {/* <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li> */}
           
                </ul>
            </div>
            <Link to="contact" spy={true} smooth={true}>
            <button className='button nav-button'>Contact Us</button>
            </Link>
        </div>
    </div>

 );
}

export default Navbar;