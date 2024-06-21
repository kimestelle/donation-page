import { useRef, useEffect, useState } from 'react';
import './App.css';
import Slides from './components/Slides.jsx';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const App = () => {
  const targetRef = useRef(null);
  const [showDonationPage, setShowDonationPage] = useState(false);

  useEffect(() => {
    if (targetRef.current) {
      disableBodyScroll(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        enableBodyScroll(targetRef.current);
      }
    };
  }, []);

  const handleDonationClick = () => {
    setShowDonationPage(prev => !prev);
  };

  return (
    <div className="App">
      <div className='slides' ref={targetRef}>
        <Slides showDonationPage={showDonationPage} />
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
        <div className="donation-links" onClick={handleDonationClick}>
          {/* Donation links content */}
          Donation links here, for now click to access DP.com
        </div>
      </div>
    </div>
  );
}

export default App;
