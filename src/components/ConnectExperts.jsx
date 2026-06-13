import React from 'react';
import './ConnectExperts.css';

// Naye Section ke Assets
import RobotAsset from '../assets/connect/robot.png'; 
import WavesBgAsset from '../assets/connect/wave3.png'; 

function ConnectExperts() {
  return (
    <div className="connect-experts-section" style={{ backgroundImage: `url(${WavesBgAsset})` }}>
      <div className="connect-content-container">
        
        {/* Left Side Typo Block */}
        <div className="connect-text-block">
          <h2 className="connect-title-heading">
            <span className="multi-color-gradient-text">Connect</span> <br />
            <span className="connect-dark-subhead">with our</span> <br />
            <span className="connect-serif-highlight">team or Expertes</span>
          </h2>
        </div>

        {/* Right Side Floating Robot Graphic */}
        <div className="connect-robot-graphic-block">
          <img src={RobotAsset} alt="AI Robot Assistant" className="floating-robot-img" />
        </div>
        
      </div>
    </div>
  );
}

export default ConnectExperts;