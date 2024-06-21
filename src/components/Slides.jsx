import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Slides.css';
import First from './slides/First.jsx';
import Second from './slides/Second.jsx';
import Third from './slides/Third.jsx';
import Fourth from './slides/Fourth.jsx';
import ParallaxSlide from './slides/ParallaxSlide.jsx';

const Slides = ({ showDonationPage }) => {
  const slides = [ParallaxSlide, First, Second, Third, Fourth];
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return (
    <div className="slides-container" ref={containerRef}>
      {showDonationPage ? (
        <iframe
          src="https://www.thedp.com/"
          title="Donation Page"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      ) : (
        slides.map((SlideComponent, index) => (
          <div key={index} className='slide'>
            <SlideComponent />
          </div>
        ))
      )}
    </div>
  );
}

Slides.propTypes = {
  showDonationPage: PropTypes.bool.isRequired,
};


export default Slides;
