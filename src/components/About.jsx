import '../css/About.css';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='intro-container'>
      <h2>Who am I ?</h2>
      <div className='presentation'>
        <img
          src='https://www.cyrillefabre.com/upload/portrait.jpg'
          className='portrait'
          alt='Cyrille Fabre'
          width='300'
          height='auto'
        />
        <p className='intro-items' id='first-item'>
          Cyrille Fabre, junior web developer, using fullstack Javascript
          languages (React.js And Node.js). <br />
          You'll find more about my skills and languages upon the{' '}
          <Link to='/skills'>right section</Link>
        </p>
      </div>
      <h2>Why picking me first ?</h2>

      <p className='intro-items'>
        Among all my experiences, I've succeeded in learning multiples fields,
        such as bank, IT, health insurances. <br /> I'm curious and I really
        enjoy broadening my skills with new professional challenges. <br />I
        worked remotely for 6 months at the Wild Code School, with different
        working groups, using Scrum methodology to develop our projects.
        <br /> I'm used to Git / Github, co-working, and networking softwares
        such as Slack, Discord, Google Meet, Microsoft Teams, Zoom.
        <br />
        Feel free to download my resume. <br />
        <br />
        <button
          type='button'
          className='btn'
          target='_blank'
          onClick={(e) => {
            e.preventDefault();
            window.open(
              'http://www.cyrillefabre.com/upload/CvDev.pdf',
              '_blank'
            );
          }}
        >
          Check my resume
        </button>
      </p>
      <h2>How to reach me ?</h2>
      <p className='contact-container intro-items'>
        <ul className='contact-flex'>
          <li className='contact-item'>
            <i class='fas fa-mobile-alt'></i> :{' '}
            <a href='tel:+33661828655' title='+33661828655'>
              Call me
            </a>
          </li>
          <li className='contact-item'>
            <i class='fas fa-envelope'></i> :{' '}
            <a
              href='mailto:cyrille.fabre@gmail.com'
              title='cyrille.fabre@gmail.com'
            >
              Email me
            </a>
          </li>
          <li className='contact-item'>
            <i class='fas fa-at'></i> :{' '}
            <a
              href='https://www.facebook.com/Staycalmandcode'
              title='https://www.facebook.com/Staycalmandcode'
            >
              {' '}
              Web Page
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
}
