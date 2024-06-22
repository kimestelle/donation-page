import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Slides.css';
import First from './slides/First.jsx';
import Second from './slides/Second.jsx';
import Third from './slides/Third.jsx';
import Fourth from './slides/Fourth.jsx';
import ParallaxSlide from './slides/ParallaxSlide.jsx';
import Cover from './slides/Cover.jsx';

const Slides = ({ donationPage }) => {
  const slides = [Cover, ParallaxSlide, First, Second, Third, Fourth];
  const containerRef = useRef(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = (event) => {
      if (container) {
        container.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    const handleTouchStart = (event) => {
      startX.current = event.touches[0].pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const handleTouchMove = (event) => {
      const x = event.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX.current) * 3; //scroll-fast
      container.scrollLeft = scrollLeft.current - walk;
      event.preventDefault();
    };

    if (container) {
      container.addEventListener('wheel', handleScroll);
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  

  return (
    <div className="slides-container" ref={containerRef}>
      {!(donationPage === ' ') ? (
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
  donationPage: PropTypes.string.isRequired,
};

export default Slides;
