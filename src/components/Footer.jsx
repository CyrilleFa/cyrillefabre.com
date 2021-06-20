import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-logo'>
          <Link to='/'>
            <img
              src='http://www.cyrillefabre.com/upload/avatar-wink.png'
              alt='logo site'
              width='128'
              height='128'
            />
          </Link>
        </div>
        <div className='copyright'>
          © 2020 All rights reserved - Cyrille Fabre
        </div>
        <div className='social-container'>
          <h3 className='social-follow footer-titre'>Social Networks</h3>
          <div className='social-icons'>
            <a
              href='https://github.com/Cissou13'
              className='github social'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-github'></i>
            </a>
            <a
              href='https://www.facebook.com/Staycalmandcode'
              target='_blank'
              rel='noreferrer'
              className='facebook social'
            >
              <i className='fab fa-facebook'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//
