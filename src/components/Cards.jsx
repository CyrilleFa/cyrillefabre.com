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
          'min-height': '250px',
          'background-image': "url('{props.img}')",
        }}
      >
        {isFlipped ? (
          <BackSide
            style={{
              backgroundColor: '#4F8FDB',
              'text-align': 'center',
              'min-width': '499px',
              'min-height': '250px',
              cursor: 'unset',
            }}
          >
            <a href={props.url} target='_blank' rel='noreferrer'>
              <span className='goTo'> Website</span>
            </a>
            <div className='project-image rotate'>
              <img
                className='thumbnail'
                src={props.img}
                alt={props.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  opacity: '0.8',
                }}
              />
            </div>

            <button
              type='button'
              className='btn-card'
              onClick={() => toggle(!isFlipped)}
            >
              Infos
            </button>
          </BackSide>
        ) : (
          <FrontSide
            style={{
              backgroundColor: '#63CAF2',
              'text-align': 'center',
              'min-width': '499px',
              'min-height': '250px',
            }}
          >
            <a href={props.url} target='_blank' rel='noreferrer'>
              <h2 className='front'>
                {props.name} {'   '}
                {props.solo ? (
                  <i class='fas fa-user'></i>
                ) : (
                  <i class='fas fa-users'></i>
                )}
              </h2>
            </a>

            <p>{props.infos}</p>
            <h3>Languages</h3>
            <p className='language'>{props.details}</p>
            <button className='btn-card' onClick={() => toggle(!isFlipped)}>
              Preview
            </button>
          </FrontSide>
        )}
      </Flippy>
    </div>
  );
};

export default Cards;
