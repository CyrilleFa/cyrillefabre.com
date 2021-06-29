import Skill from './Skill.jsx';
import '../css/Skills.css';

const skillList = [
  {
    id: 1,
    name: 'React.js',
    icon: 'devicon-react-original',
    front: true,
    details: 'Call Api, Hooks, Router',
  },
  {
    id: 2,
    name: 'Node.js',
    icon: 'devicon-nodejs-plain',
    front: false,
    details: 'Route, CRUD, Express',
  },
  {
    id: 3,
    name: 'Javascript',
    icon: 'devicon-javascript-plain',
    front: true,
    details: 'DOM manipulation',
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
    name: 'Postman',
    icon: '',
    front: false,
    details: 'Call Api, Hooks',
  },
  {
    id: 6,
    name: 'Git / GitHub',
    icon: 'devicon-github-original',
    details: 'Versioning / Working Flow',
  },
  {
    id: 7,
    name: 'Figma',
    icon: 'devicon-figma-plain',
    front: true,
    details: 'Wireframing',
  },
  {
    id: 8,
    name: 'Web Hosting',
    icon: '',
    front: false,
    details: 'O2switch',
  },
  {
    id: 9,
    name: 'Slack',
    icon: 'devicon-slack-plain',
    details: '6 months remotely with school',
  },
  // {
  //   id: 10,
  //   name: '',
  //   icon: '',
  //   front: false,
  //   details: '',
  // },
  // {
  //   id: 11,
  //   name: '',
  //   icon: '',
  //   front: false,
  //   details: '',
  // },
  // {
  //   id: 12,
  //   name: '',
  //   icon: '',
  //   front: false,
  //   details: '',
  // },
];

export default function SkillList() {
  return (
    <div className='skill-container'>
      {skillList.map(({ icon, name, front, details, id }) => {
        return (
          <Skill
            icon={icon}
            name={name}
            front={front}
            details={details}
            id={id}
          />
        );
      })}
    </div>
  );
}
