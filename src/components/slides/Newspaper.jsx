import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';
import './Newspaper.css';

const Newspaper = ({ slideIndex }) => {
  const parallaxPositions = [
    { y: [100, -100], x: [0, 0], rotate: [0, 0] },    // Cover
    { y: [-30, 30], x: [0, 0], rotate: [5, -5] },     // First
    { y: [-10, 10], x: [20, -20], rotate: [-3, 3] },  // Second
    { y: [-15, 15], x: [-30, 30], rotate: [0, 0] },   // Third
    { y: [-25, 25], x: [0, 0], rotate: [-5, 5] },     // Fourth
  ];

  const { y, x, rotate } = parallaxPositions[slideIndex];

  return (
    <Parallax className="parallax-element" y={y} x={x} rotate={rotate}>
      <h5>Parallax Tester</h5>
    </Parallax>
  );
};

Newspaper.propTypes = {
  slideIndex: PropTypes.number.isRequired,
};
export default Newspaper;
