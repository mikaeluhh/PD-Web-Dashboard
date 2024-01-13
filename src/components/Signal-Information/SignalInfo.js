import React from 'react';
import './SignalInfo.css'; 
import chartImage from '../../assets/Graph.png';

function SignalInfo() {

  return (
    <div className="signal-info-container">
      <h2 className="signal-info-title">SIGNAL INFORMATION</h2>
      <div className="signal-chart-placeholder">
      <img src={chartImage}/>
      </div>
    </div>
  )
}

export default SignalInfo;

