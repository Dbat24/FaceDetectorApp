import React from "react";
import { Tilt } from "react-tilt";
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma3 mt3">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 80 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner pa3"><img style={{paddingTop: '5px'}} alt="logo" src={brain}/></div>
      </Tilt>
    </div>
  );
};

export default Logo;



