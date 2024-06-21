import { useEffect, useRef } from 'react';
import './Slides.css';
import First from './slides/First.jsx';
import Second from './slides/Second.jsx';
import Third from './slides/Third.jsx';
import Fourth from './slides/Fourth.jsx';

const Slides = () => {
  const slides = [First, Second, Third, Fourth];
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
      {slides.map((SlideComponent, index) => (
        <div key={index} className='slide'>
          <SlideComponent />
        </div>
      ))}
    </div>
  );
}

export default Slides;

