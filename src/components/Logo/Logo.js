import React from "react";
import Tilt from 'react-parallax-tilt';
import sunglasses from './sunglasses.png';
import "./Logo.css"



const Logo = () => {
    return (
        <Tilt className="parallax-effect mx-auto" perspective={500}>
    <div className="inner-element">
      <div>
        <img className="p-20" src={sunglasses} alt="logo" />
      </div>
    </div>
  </Tilt>
    )
}

export default Logo;