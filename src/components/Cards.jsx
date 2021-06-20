import { useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Cards = (props) => {
  const [isFlipped, toggle] = useState(false);

  return (
    <div className='project-item'>
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
              backgroundColor: '#4F8FDB',
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
              backgroundColor: '#63CAF2',
              'text-align': 'center',
              'min-width': '499px',
              'min-height': '230px',
            }}
          >
            <a href={props.url} target='_blank' rel='noreferrer'>
              <h2>
                {props.name} {'   '}
                {props.solo ? (
                  <i class='fas fa-user'></i>
                ) : (
                  <i class='fas fa-users'></i>
                )}
              </h2>
            </a>
            <p>{props.infos}</p>
            <button className='btn-card' onClick={() => toggle(!isFlipped)}>
              Languages
            </button>
          </FrontSide>
        )}
      </Flippy>
    </div>
  );
};

export default Cards;

// {props.id}
