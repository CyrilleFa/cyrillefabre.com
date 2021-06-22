import '../css/Homepage.css';

export default function Homepage() {
  return (
    <section className='homepage-container'>
      <h1>
        Welcome to my website (Currently under live maintenance, so it might
        change)
      </h1>
      <p>Adding some cool features </p>
      <span class='dots-loader'>&#8230;</span>
      <h2>Website content</h2>
      <p className='intro-items'>
        This website introduces my differents projects. <br />
        I've done a lot of them remotely, and with a team, always using Scrum
        methodology.
      </p>
    </section>
  );
}
