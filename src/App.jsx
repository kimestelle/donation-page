import { useRef, useEffect, useState } from 'react';
import './App.css';
import Slides from './components/Slides.jsx';
import Story from './components/Story.jsx';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { GlowCapture, Glow} from '@codaworks/react-glow';
import logo from './assets/logo.svg';
import futuresLogo from './assets/futures-logo.png';
import pubsocLogo from './assets/pubsoc-logo.png';
import streetLogo from './assets/34st-logo.png';
import annualLogo from './assets/annual-logo.png';

const App = () => {
  const targetRef = useRef(null);
  const [showDonationPage, setShowDonationPage] = useState(' ');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

  const handleDonationClick = (page) => {
    if (page != showDonationPage) {
    return () => {
      setShowDonationPage(page);
      console.log(page);
    };}
  };

  const handleSlideChange = (index) => {
    setCurrentSlideIndex(index); 
  };

  return (
    <div className="App">
      <div className='slides' ref={targetRef}>
        <Slides donationPage={showDonationPage} onSlideChange={handleSlideChange} />
      </div>
      <GlowCapture size='800'>
      <Glow>
      <div className='side-bar'>
        <div className="logo clickable" onClick={handleDonationClick(' ')}>
          <img src={logo} alt="140 Years of the DP"/>
        </div>
        <div className="story">
          {/* Story content */}
          <Story currentSlideIndex={currentSlideIndex} /> {/* Render Story component with currentSlideIndex */}
        </div>
        <div className="donation-links">
          {/* Donation links */}
          <div id='annual-campaign-link' className="donation-box clickable" onClick={handleDonationClick('annual-campaign')}>
            <img src={annualLogo} alt="DP Annual Advances Campaign"/>
          </div>

          <div id='capital-campaign-link' className="donation-box clickable" onClick={handleDonationClick('capital-campaign')}>
            <img src={futuresLogo} alt="DP Futures Campaign"/>
          </div>

          <div id='34k-34th-link' className="donation-box clickable" onClick={handleDonationClick('34th-campaign')}>
            <img src={streetLogo} alt="34k for 34th Street Campaign"/>
          </div>

          <div id='publishers-society-link' className="donation-box clickable" onClick={handleDonationClick('pubsoc-campaign')}>
            <img src={pubsocLogo} alt="DP Publisher's Society Campaign"/>
          </div>
          <p className='return-text clickable' onClick={handleDonationClick(' ')}>return to story</p>
          
        </div>
      </div>
      </Glow>
      </GlowCapture>
    </div>
  );
}

export default App;
