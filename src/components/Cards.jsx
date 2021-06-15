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
          'min-width': '200px',
          'min-height': '200px',
          backgroundColor: 'gray',
        }}
      >
        {isFlipped ? (
          <BackSide
            style={{
              backgroundColor: '#DDDDDD',
              'text-align': 'center',
              'max-width': '400px',
              height: '200px',
            }}
          >
            <h2>
              {props.id} / {props.name}
            </h2>
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
              'min-width': '200px',
              'min-height': '200px',
            }}
          >
            <a href={props.url} target='_blank' rel='noreferrer'>
              <h2>
                {props.id} / {props.name} ( {props.type} )
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
