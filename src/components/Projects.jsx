import Cards from './Cards.jsx';
import '../css/Projects.css';

const cards = [
  {
    id: 1,
    name: 'Tribute to Mom',
    url: 'https://www.michelemeja.com/',
    img: 'https://www.cyrillefabre.com/upload/miniatures/portfolio/thumbnails/mum-min.JPG',

    details: 'Front : React.js, Javascript, Back : Node.js',
    infos: '(WIP) Tribute to the most important person to me',
    solo: true,
    hackathon: false,
  },
  {
    id: 2,
    name: 'Wild Trip',
    url: 'https://www.wildtrip.fr',
    img: 'https://www.cyrillefabre.com/upload/miniatures/portfolio/thumbnails/wildtrip-min.JPG',
    details: 'Front : HTML / CSS / Javascript, Back : None',
    infos: 'A simple travel blog, with validating error contact form.',
    solo: false,
    hackathon: false,
  },
  {
    id: 3,
    name: 'Adopt1gueux',
    url: 'https://www.adopte1gueux.com',
    img: ' https://www.cyrillefabre.com/upload/miniatures/portfolio/thumbnails/adopt1gueux-min.JPG',
    details: 'Front : React / CSS, Back : Node / Express',
    infos: 'A meeting app for poor people back to Middle-Age',
    solo: false,
    hackathon: true,
  },
  {
    id: 4,
    name: 'Hearthstone Finder',
    url: 'https://www.hearthstone-finder.com/',
    img: 'https://www.cyrillefabre.com/upload/miniatures/portfolio/thumbnails/hearthstone-min.JPG',
    details: 'Front : React / CSS, Back : Node / Express',
    infos: 'An app to find some Hearthstone cards into an online catalog.',
    solo: false,
    hackathon: false,
  },
  {
    id: 5,
    name: 'My Mood Market',
    url: 'https://www.cyrillefabre.com',
    img: 'https://www.cyrillefabre.com/upload/miniatures/portfolio/thumbnails/mymoodmarket-min.JPG',
    details: 'Front : React / CSS, Back : Node / Express',
    infos: 'A react e-commerce app, we decided to sell feelings.',
    solo: false,
    hackathon: true,
  },
  {
    id: 6,
    name: 'Region Sud',
    url: 'https://region-sud.woozy.fr/',
    img: 'https://www.cyrillefabre.com/upload/miniatures/portfolio/thumbnails/regionsud-min.JPG',
    details: 'Front : React / CSS, Back : Laravel',
    infos: 'A react regional encyclopedia made for Region Sud',
    solo: false,
    hackathon: false,
  },
  {
    id: 7,
    name: 'Pokemon Steam',
    url: 'https://www.pokemonsteam.fr',
    img: 'https://www.cyrillefabre.com/upload/miniatures/portfolio/thumbnails/pkmnsteam-min.JPG',
    details: 'Front : React / CSS',
    infos: 'A front-end website, designed for a fangame Pokemon',
    solo: true,
    hackathon: false,
  },
  {
    id: 8,
    name: 'My Portfolio',
    url: 'https://www.cyrillefabre.com',
    img: 'https://www.cyrillefabre.com/upload/miniatures/portfolio/thumbnails/cyrillefabre-min.JPG',
    details: 'Front : React / CSS',
    infos: 'A front-end website, designed to introduce my projects',
    solo: true,
    hackathon: false,
  },
];

export default function Projects() {
  return (
    <div className='project-container'>
      {cards.map((card) => {
        return (
          <Cards
            name={card.name}
            details={card.details}
            key={card.id}
            url={card.url}
            img={card.img}
            id={card.id}
            infos={card.infos}
            solo={card.solo}
          />
        );
      })}
    </div>
  );
}
