import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/page1">Page 1</NavLink></li>
        <li><NavLink to="/page2">Page 2</NavLink></li>
        <li><NavLink to="/page3">Page 3</NavLink></li>
        <li><NavLink to="/page4">Page 4</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;