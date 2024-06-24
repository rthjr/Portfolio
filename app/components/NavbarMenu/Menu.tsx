
'use client';

import React from 'react';

const Menu = () => {
  return (
    <ul className="flex space-x-4 items-center">
      <li>
        <a href="#home" className="text-white hover:text-blue-200">
          Home
        </a>
      </li>
      <li>  
        <a href="#skill" className="text-white hover:text-blue-200">
          Skill
        </a>
      </li>
      <li>
        <a href="#contact" className="text-white hover:text-blue-200">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Menu;  
