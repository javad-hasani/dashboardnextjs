
"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'; 

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [isLightMode, setIsLightMode] = useState(!darkMode); 

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      setIsLightMode(false); 
    } else {
      document.body.classList.remove('dark-mode');
      setIsLightMode(true); 
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    return savedMode || false;
  }

  const handleToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="dark-mode-toggle">
      <label htmlFor="dark-mode-toggle-switch" className="toggle-label">
        <FontAwesomeIcon 
          className={`famoon ${isLightMode ? 'faSun' : ''}`} 
          icon={darkMode ? faSun : faMoon} 
        />
        <input
          type="checkbox"
          id="dark-mode-toggle-switch"
          checked={darkMode}
          onChange={handleToggle}
        />
      </label>
    </div>
  );
};

export default DarkModeToggle;
