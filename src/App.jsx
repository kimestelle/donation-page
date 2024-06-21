import { useRef, useEffect } from 'react';
import './App.css';
import Slides from './components/Slides.jsx';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const App = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef) {
      disableBodyScroll(targetRef);
    }

    return () => {
      if (targetRef) {
        enableBodyScroll(targetRef);
      }
    };
  }, []);

  

  return (
    <div className="App">
      <div className='slides' ref={targetRef}>
        <Slides/>
      </div>
      <div className='side-bar'>
        <div className="logo">
          {/* Logo content */}
          Logo here
        </div>
        <div className="story">
          {/* Story content */}
          Story text here
        </div>
        <div className="donation-links">
          {/* Donation links content */}
          Donation links here
        </div>
      </div>
    </div>
  );
}

export default App;
