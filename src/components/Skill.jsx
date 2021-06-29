import Flippy, { FrontSide } from 'react-flippy';
import '../css/Skills.css';

const Skill = (props) => {
  const { name, front, icon, details } = props;
  return (
    <div className='skill-item'>
      <Flippy
        flipOnHover={false}
        flipOnClick={false}
        style={{
          'min-width': '250px',
          'min-height': '200px',
          backgroundColor: 'transparent',
        }}
      >
        <FrontSide
          style={{
            'text-align': 'center',
            'min-width': '250px',
            'min-height': '200px',
          }}
        >
          <h2 className='skill-title'>{name}</h2>
          <p>{front}</p>
          <i class={`${icon} icon`}></i>
          <div className='skill-details'>{details}</div>
        </FrontSide>
      </Flippy>
    </div>
  );
};

export default Skill;
