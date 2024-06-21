import { Parallax } from 'react-scroll-parallax';
import './Parallax.css'

const ParallaxSlide = () => {
  return (
    <div className="slide">
      <Parallax speed={-10}>
        <div className="parallax-element">
          <h1>Paper</h1>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxSlide;