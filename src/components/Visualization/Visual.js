import React from 'react';
import './Visual.css';
import specImage from '../../assets/spec.png';

function Visual() {
  return (
    <div className="visual-container">
      <h2 className="visual-title">Visualization</h2>
      <div className="visual-content">Spectrogram</div>
      <div className="spec-placeholder">
        <img src={specImage} alt="Spectrogram" />
      </div>
    </div>
  );
}

export default Visual;
