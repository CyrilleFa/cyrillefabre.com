import '../css/About.css';

export default function About() {
  return (
    <div className='intro-container'>
      <h1>Want to know some about me ?</h1>
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
          You'll find more about my skills and languages upon the right section
          in the navbar.
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
      <div className='contact-container'>
        <ul className='contact-flex'>
          <li className='contact-item'>Phone Number : On my resume</li>
          <li className='contact-item'>Mail : On my resume</li>
          <li className='contact-item'>Website : </li>
        </ul>
      </div>
    </div>
  );
}
