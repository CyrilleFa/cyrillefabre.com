import '../css/Header.css';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className='bg-container'>
        <img
          className='bg-img'
          src='https://www.cyrillefabre.com/upload/banner.jpg'
          alt='How developers code'
        />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
