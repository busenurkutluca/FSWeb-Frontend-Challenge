import React from "react"
import { useState, useEffect } from 'react';
import axios from "axios"


function ModeSwitch() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
      });
    
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
    
      useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
      }, [darkMode]);
      console.log(darkMode);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
    <header className="app-header">
      
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
     
    </div>
  );
}

export default ModeSwitch;