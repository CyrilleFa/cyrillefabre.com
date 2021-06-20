import { useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const SkillList = (props) => {
  const [isFlipped, toggle] = useState(false);

  return (
    <div className='project-item'>
      <h1>WIP</h1>
      <Flippy
        flipOnHover={false}
        flipOnClick={true}
        flipDirection='horizontal'
        style={{
          'min-width': '499px',
          'min-height': '230px',
          backgroundColor: 'transparent',
        }}
      >
        {isFlipped ? (
          <BackSide
            style={{
              backgroundColor: '#DDDDDD',
              'text-align': 'center',
              'min-width': '499px',
              'min-height': '230px',
            }}
          >
            <a href={props.url} target='_blank' rel='noreferrer'>
              <h2>
                {props.id} / {props.name}
              </h2>
            </a>
            <p>{props.details}</p>
            <button className='btn-card' onClick={() => toggle(!isFlipped)}>
              Infos
            </button>
          </BackSide>
        ) : (
          <FrontSide
            style={{
              backgroundColor: '#1687a7',
              'text-align': 'center',
              'min-width': '499px',
              'min-height': '230px',
            }}
          >
            <a href={props.url} target='_blank' rel='noreferrer'>
              <h2>
                {props.id} / {props.name} ( {props.type} )
              </h2>
            </a>
            <p>
              {props.infos} {props.type ? 'Solo' : 'Team'}
            </p>
            <button className='btn-card' onClick={() => toggle(!isFlipped)}>
              Languages
            </button>
          </FrontSide>
        )}
      </Flippy>
    </div>
  );
};

export default SkillList;