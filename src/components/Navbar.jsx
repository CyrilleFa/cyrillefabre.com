import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar-container hidden-desktop'>
        <ul className='menu-list'>
          <li className='menu-list-item'>
            <NavLink to='/'>HOME</NavLink>
          </li>
          <li className='menu-list-item'>
            <NavLink to='/about'>ABOUT ME</NavLink>
          </li>
          <li className='menu-list-item'>
            <NavLink to='/projects'>MY PROJECTS</NavLink>
          </li>
          <li className='menu-list-item'>
            <NavLink to='/skills'>SKILLS & EXPERIENCES</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
