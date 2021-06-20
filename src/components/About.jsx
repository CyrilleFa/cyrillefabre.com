import '../css/About.css';

export default function About() {
  return (
    <div className='intro-container'>
      <h1>Quelques mots sur moi</h1>
      <h2>Qui suis-je ?</h2>
      <div className='presentation'>
        <img
          src='https://www.cyrillefabre.com/upload/portrait.jpg'
          className='portrait'
          alt='Cyrille Fabre'
          width='300'
          height='auto'
        />
        <p className='intro-items' id='first-item'>
          Cyrille Fabre, développeur web junior, stack Javascript.
        </p>
      </div>
      <h2>Pourquoi me choisir ?</h2>

      <p className='intro-items'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quaerat
        quam architecto ullam corporis, nostrum obcaecati sed sint eos natus
        corrupti praesentium at illo perferendis accusantium ratione expedita
        quia numquam voluptatem aliquid magnam! Sapiente enim officia laudantium
        at id tenetur itaque accusamus, omnis voluptas magni optio, fuga qui
        consectetur error.
      </p>
      <h2>Comment me contacter?</h2>
      <p className='intro-items'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error quia
        architecto sequi aliquam explicabo recusandae quibusdam dolor, illo,
        voluptate earum quos cum a ipsam maxime accusamus delectus. Est aperiam
        repellendus fuga at, porro totam nulla ipsam! Veniam esse recusandae
        voluptatibus autem repellendus nihil doloremque asperiores perspiciatis?
        Beatae rem dolore ullam officia commodi laudantium est modi incidunt
        enim. Rerum quia ad, vero eos ipsa mollitia dicta dolores reiciendis
        distinctio consectetur. Voluptatibus sapiente necessitatibus officia
        temporibus.
      </p>
    </div>
  );
}
