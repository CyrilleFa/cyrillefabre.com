import { useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Cards = (props) => {
  const [isFlipped, toggle] = useState(false);

  return (
    <div>
      <Flippy
        flipOnHover={false}
        flipOnClick={true}
        flipDirection='horizontal'
        style={{ width: '200px', height: '200px' }}
      >
        {isFlipped ? (
          <BackSide style={{ backgroundColor: '#175852' }}>
            <h2>{props.details}</h2>
            <button onClick={() => toggle(!isFlipped)}>ROCKS</button>
          </BackSide>
        ) : (
          <FrontSide
            style={{
              backgroundColor: '#41669d',
            }}
          >
            <h2>
              {props.id} : {props.name}
            </h2>
            <button onClick={() => toggle(!isFlipped)}>RICK</button>
          </FrontSide>
        )}
      </Flippy>
    </div>
  );
};

export default Cards;
