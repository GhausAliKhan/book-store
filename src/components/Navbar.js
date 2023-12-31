import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import '../styles/navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  return (
    <header>
      <h1 className="title">Bookstore GAK</h1>
      <nav className="list-container">
        <ul className="list">
          <li className="list-item">
            <NavLink className="list-text" exact to="/">Home</NavLink>
          </li>
          <li className="list-item">
            <NavLink className="list-text opacity" to="/categories">Categories</NavLink>
          </li>
        </ul>
      </nav>
      <span className="user-icon">
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <BsPersonCircle />
        </IconContext.Provider>
      </span>
    </header>
  );
}

export default Navbar;
