import Skill from './Skill.jsx';
import '../css/Skills.css';

const skillList = [
  {
    id: 1,
    name: 'React.js',
    icon: 'devicon-react-original',
    front: true,
    details: 'Call Api, Hooks',
  },
  {
    id: 2,
    name: 'Node.js',
    icon: 'devicon-nodejs-plain',
    front: false,
    details: 'Call Api, Hooks',
  },
  {
    id: 3,
    name: 'Javascript',
    icon: 'devicon-javascript-plain',
    front: true,
    details: 'Call Api, Hooks',
  },
  {
    id: 4,
    name: 'MySql',
    icon: 'devicon-mysql-plain',
    front: false,
    details: 'Call Api, Hooks',
  },
  {
    id: 5,
    name: 'Tools Front',
    icon: 'https://www.cyrillefabre.com',
    details: 'Call Api, Hooks',
  },
  {
    id: 6,
    name: 'Autre Tools',
    icon: 'https://region-sud.woozy.fr/',
    details: 'Call Api, Hooks',
  },
  {
    id: 7,
    name: 'Figma',
    icon: 'https://www.pokemonsteam.fr',
    front: true,
  },
  {
    id: 8,
    name: 'Postman',
    icon: 'https://www.pokemonsteam.fr',
    front: false,
  },
];

export default function SkillList() {
  return (
    <div className='skill-container'>
      {skillList.map((item) => {
        return (
          <Skill
            icon={item.icon}
            name={item.name}
            front={item.front}
            id={item.id}
          />
        );
      })}
    </div>
  );
}
