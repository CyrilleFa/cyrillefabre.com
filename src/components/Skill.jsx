import Flippy, { FrontSide } from 'react-flippy';
import '../css/Skills.css';

const Skill = (props) => {
  return (
    <div className='project-item'>
      {props.id !== 5 && props.id !== 6 ? (
        <Flippy
          flipOnHover={false}
          flipOnClick={false}
          style={{
            'min-width': '499px',
            'min-height': '230px',
            backgroundColor: 'transparent',
          }}
        >
          <FrontSide
            style={{
              'text-align': 'center',
              'min-width': '499px',
              'min-height': '230px',
            }}
          >
            <h2>{props.name}</h2>
            <p>{props.front}</p>
            <i class={`${props.icon} icon`}></i>
          </FrontSide>
        </Flippy>
      ) : (
        <div>{props.name}</div>
      )}
    </div>
  );
};

export default Skill;
