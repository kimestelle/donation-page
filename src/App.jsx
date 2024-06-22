import { useRef, useEffect, useState } from 'react';
import './App.css';
import Slides from './components/Slides.jsx';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import logo from './assets/logo.svg';

const App = () => {
  const targetRef = useRef(null);
  const [showDonationPage, setShowDonationPage] = useState('');

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

  return (
    <div className="App">
      <div className='slides' ref={targetRef}>
        <Slides donationPage={showDonationPage} />
      </div>
      <div className='side-bar'>
        <div className="logo clickable" onClick={handleDonationClick(' ')}>
          <img src={logo} alt="140 Years of the DP"/>
        </div>
        <div className="story">
          {/* Story content */}
          Story text here
        </div>
        <div className="donation-links">
          {/* Donation links */}
          <div id='annual-campaign-link' className="donation-box clickable" onClick={handleDonationClick('annual-campaign')}>
            Annual Campaign
          </div>
          <div id='capital-campaign-link' className="donation-box clickable" onClick={handleDonationClick('capital-campaign')}>
            Capital Campaign
          </div>
          <div id='34k-34th-link' className="donation-box clickable" onClick={handleDonationClick('34th-campaign')}>
            34K for 34th Campaign
          </div>
          <div id='publishers-society-link' className="donation-box clickable" onClick={handleDonationClick('pubsoc-campaign')}>
            Publishers Society
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
