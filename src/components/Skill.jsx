import SkillList from './SkillList.jsx';
import '../css/Skills.css';

const skillList = [
  {
    id: 1,
    name: 'Tribute to Mom',
    url: 'https://www.michelemeja.com/',
    details: 'Front : React.js, Javascript, Back : Node.js',
    infos:
      '(WIP) Tribute to the most important person to me, she inspired me to do what i was made for : coding.',
    type: 'Solo',
    hackathon: false,
  },
  {
    id: 2,
    name: 'Wild Trip',
    url: 'https://www.wildtrip.fr',
    details: 'Front : HTML / CSS / Javascript, Back : None',
    infos: 'A simple travel blog, with validating error contact form.',
    type: 'Team',
    hackathon: false,
  },
  {
    id: 3,
    name: 'Adopt1gueux',
    url: 'https://www.adopte1gueux.com',
    details: 'Front : React / CSS, Back : Node / Express',
    infos: 'A react meeting app for poor people back to Middle-Age',
    type: 'Team',
    hackathon: true,
  },
  {
    id: 4,
    name: 'Hearthstone Finder',
    url: 'https://www.hearthstone-finder.com/',
    details: 'Front : React / CSS, Back : Node / Express',
    infos:
      'A react app to find some Hearthstone skills into an online catalog.',
    type: 'Team',
    hackathon: false,
  },
  {
    id: 5,
    name: 'My Mood Market',
    url: 'https://www.cyrillefabre.com',
    details: 'Front : React / CSS, Back : Node / Express',
    infos: 'A react e-commerce app, we decided to sell feelings.',
    type: 'Team',
    hackathon: true,
  },
  {
    id: 6,
    name: 'Regional encyclopedia : Region Sud',
    url: 'https://region-sud.woozy.fr/',
    details: 'Front : React / CSS, Back : Laravel',
    infos: 'A react regional encyclopedia made for Region Sud',
    type: 'Team',
    hackathon: false,
  },
  {
    id: 7,
    name: 'Pokemon Steam',
    url: 'https://www.pokemonsteam.fr',
    details: 'Front : React / CSS, No Back-End so far',
    infos:
      'A front-end website, designed to describe briefly a fangame Pokemon project',
    type: 'Solo',
    hackathon: false,
  },
];

export default function Skill() {
  return (
    <div className='skill-container'>
      {skillList.map((skill) => {
        return (
          <SkillList
            name={skill.name}
            details={skill.details}
            key={skill.id}
            url={skill.url}
            id={skill.id}
            infos={skill.infos}
            type={skill.type}
          />
        );
      })}
    </div>
  );
}
