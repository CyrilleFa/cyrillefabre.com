import { stack as Menu } from 'react-burger-menu';
import '../css/Sidebar.css';

const Sidebar = (props) => {
  return (
    <Menu right>
      <a className='menu-item' href='/'>
        Home
      </a>
      <a className='menu-item' href='/about'>
        About me
      </a>
      <a className='menu-item' href='/projects'>
        My Projects
      </a>
      <a className='menu-item' href='/skills'>
        Skills and Experience
      </a>
    </Menu>
  );
};

export default Sidebar;
