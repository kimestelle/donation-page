import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Second.css';

import streetLogo1 from './street-logo-1.jpg';
import streetLogo2 from './street-logo-2.jpg';
import streetLogo3 from './street-logo-3.jpg';
import streetLogo4 from './street-logo-4.jpg';
import streetLogo5 from './street-logo-5.jpg';
import streetLogo6 from './street-logo-6.jpg';
import streetLogo7 from './street-logo-7.jpg';
import streetLogo8 from './street-logo-8.jpg';
import streetLogo9 from './street-logo-9.jpg';
import streetLogo10 from './street-logo-10.jpg';
import streetLogo11 from './street-logo-11.jpg';
import streetLogo12 from './street-logo-12.jpg';
import streetLogo13 from './street-logo-13.jpg';
import streetLogo14 from './street-logo-14.jpg';
import cover from './street-cover.png'

const images = [
  streetLogo1,
  streetLogo2,
  streetLogo3,
  streetLogo4,
  streetLogo5,
  streetLogo6,
  streetLogo7,
  streetLogo8,
  streetLogo9,
  streetLogo10,
  streetLogo11,
  streetLogo12,
  streetLogo13,
  streetLogo14,
];

const Second = () => {
  const [isFlipped, setIsFlipped] = useState(Array(17).fill(false));
  const [isHovered, setIsHovered] = useState(Array(17).fill(false));

  const handleClick = (index) => {
    const newFlipped = [...isFlipped];
    newFlipped[index] = !newFlipped[index];
    setIsFlipped(newFlipped);
  };

  const handleMouseEnter = (index) => {
    const newHovered = [...isHovered];
    newHovered[index] = !newHovered[index];
    setIsHovered(newHovered);
  };

  const handleMouseLeave = (index) => {
    const newHovered = [...isHovered];
    newHovered[index] = !newHovered[index];
    setIsHovered(newHovered);
  };

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < 14; i++) {
      const isCardFlipped = isFlipped[i] || isHovered[i];
      cards.push(
        <div
          className="card-container"
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave(i)}
        >
          <ReactCardFlip isFlipped={isCardFlipped} flipDirection="horizontal">
            <div className="card-front">
              <img src={images[i]} alt={`street-logo-${i + 1}`} />
            </div>
            <div className="card-back">
              <div className="placeholder-back">street cover/pic</div>
            </div>
          </ReactCardFlip>
        </div>
      );
    }

    // Add the united placeholder spanning two vertical neighbors at the bottom leftmost spot
    cards.push(
      <div
        className="card-container cover-placeholder"
        key={14}
        onClick={() => handleClick(14)}
        onMouseEnter={() => handleMouseEnter(14)}
        onMouseLeave={() => handleMouseLeave(14)}
        style={{ gridRowStart: 3, gridColumnStart: 1, gridRowEnd: 'span 2' }}
      >
        <ReactCardFlip isFlipped={isFlipped[14] || isHovered[14]} flipDirection="horizontal">
          <div className="cover-front" key='front'>
          <img src={cover} className='cover-img'/>
          </div>
          <div className="cover-back" key='back'>
            <div className="placeholder-back">Back</div>
          </div>
        </ReactCardFlip>
      </div>
    );

    // Add an additional placeholder to keep the grid structure
    cards.push(
      <div
        className="card-container additional-placeholder"
        key={15}
        style={{ visibility: 'hidden' }}
      >
        <div className="card-front">
        <div className="placeholder-front">Front</div>
        </div>
        <div className="card-back">
          <div className="placeholder-back">Back</div>
        </div>
      </div>
    );

    return cards;
  };

  return (
    <div className="second">
      <h1>STREET</h1>
      <div className="grid">
        {renderCards()}
      </div>
    </div>
  );
};

export default Second;
