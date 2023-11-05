"use client";

import React, { useState } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      <label className="switch">
        <input
          className="switch__input"
          type="checkbox"
          role="switch"
          name="dark"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <div className={`switch__icon ${isDarkMode ? 'dark' : 'light'}`}></div>
      </label>

    </div>
  );
}

export default DarkModeToggle;
