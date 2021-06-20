import '../css/Header.css';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='bg-container'>
        <img
          className='bg-img'
          src='https://www.cyrillefabre.com/upload/banner.jpg'
          alt='How developers code'
        />

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
    </header>
  );
};

export default Header;
