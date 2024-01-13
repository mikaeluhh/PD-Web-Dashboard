import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-scroll';
import { FaHome, FaSignal } from 'react-icons/fa';

function Sidebar() {
  const [activeLink, setActiveLink] = useState('dashboard');

  return (
    <div className='sidebar'>
      <section className='title'>ULTRASONIC TEST</section>
      <div className="divider"></div>
      <div className='sideMenu'>
        <Link
          to="dashboard"
          spy={true}
          smooth={true}
          className={`sideMenuItem ${activeLink === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveLink('dashboard')}
        >
          <div className={`menuIcon ${activeLink === 'dashboard' ? 'active' : ''}`}>
            <FaHome size={20} /> 
          </div>
          Dashboard
        </Link>

        <Link
          to="scans"
          spy={true}
          smooth={true}
          className={`sideMenuItem ${activeLink === 'scans' ? 'active' : ''}`}
          onClick={() => setActiveLink('scans')}
        >
          <div className={`menuIcon ${activeLink === 'scans' ? 'active' : ''}`}>
            <FaSignal size={20} /> 
          </div>
          Scans
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
