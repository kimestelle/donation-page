import { useRef, useEffect, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Slides from './components/Slides.jsx';
import logo from './assets/logo.svg';
import futuresLogo from './assets/futures-logo.png';
import pubsocLogo from './assets/pubsoc-logo.png';
import streetLogo from './assets/34st-logo.png';
import annualLogo from './assets/annual-logo.png';
import './App.css';
import { SlideFrameScrollProvider } from './context/SlideFrameScrollContext.jsx';

const App = () => {
  const targetRef = useRef(null);
  const [showDonationPage, setShowDonationPage] = useState(' ');

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
    return () => {
      setShowDonationPage(page);
      console.log(page);
    };
  };

  return (
    <SlideFrameScrollProvider>
      <div className="App">
        <div className='top-bar'>
          <a href="https://www.dailypennalumni.com/" rel="noreferrer">
            Visit the DPAA Website!
          </a>
        </div>

        <div className='slides' ref={targetRef}>
          <Slides donationPage={showDonationPage} />
        </div>

        <div className='bottom-bar'>
          <img src={logo} className='logo clickable' onClick={handleDonationClick(' ')} alt="140 Years of the DP"/>
          <div className='vertical-line'/>
          {/* Donation links */}
          <div id='annual-campaign-link' className="donation-box clickable" onClick={handleDonationClick('annual-campaign')}>
            <img src={annualLogo} alt="DP Annual Advances Campaign"/>
            <p>ANNUAL ADVANCES</p>
          </div>

          <div id='capital-campaign-link' className="donation-box clickable" onClick={handleDonationClick('capital-campaign')}>
            <img src={futuresLogo} alt="DP Futures Campaign"/>
            <p>DP FUTURES CAMPAIGN</p>
          </div>

          <div id='34k-34th-link' className="donation-box clickable" onClick={handleDonationClick('34th-campaign')}>
            <img src={streetLogo} alt="34k for 34th Street Campaign"/>
            <p>34K for 34TH STREET</p>
          </div>

          <div id='publishers-society-link' className="donation-box clickable" onClick={handleDonationClick('pubsoc-campaign')}>
            <img src={pubsocLogo} alt="DP Publisher's Society Campaign"/>
            <p>PUBLISHERS SOCIETY</p>
          </div>
        </div>
      </div>
    </SlideFrameScrollProvider>
  );
}

export default App;
