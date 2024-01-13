import React from 'react';
import './TestingInformation.css';

function TestingInformation() {
  return (
<div class="testing-information">
  <div class="info-box">
    <div class="info-label">FREQUENCY</div>
    <div class="info-value">54K Hz</div>
  </div>
  <div class="info-box">
    <div class="info-label">VOLTAGE</div>
    <div class="info-value">60W</div>
  </div>
  <div class="info-box">
    <div class="info-label">GAIN</div>
    <div class="info-value">98%</div>
  </div>
  <div class="info-box">
    <div class="info-label">SIGNAL-TO-NOISE RATIO</div>
    <div class="info-value">40 dB</div>
  </div>
</div>

  );
}

export default TestingInformation;
