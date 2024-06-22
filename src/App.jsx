import { useRef, useEffect, useState } from 'react';
import './App.css';
import Slides from './components/Slides.jsx';
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
      <GlowCapture size='800'>
      <Glow>
      <div className='side-bar'>
        <div className="logo clickable" onClick={handleDonationClick(' ')}>
          <img src={logo} alt="140 Years of the DP"/>
        </div>
        <div className="story">
          {/* Story content */}
          Story: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, at quo! Cumque, sed dicta. Sapiente ut laudantium, itaque, deleniti natus perspiciatis nulla aliquam minima harum omnis voluptas beatae reprehenderit distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptates labore! Perspiciatis quidem qui, quibusdam rerum deserunt quis cumque, aspernatur modi praesentium nihil nam? Blanditiis at magni aut aliquid quidem?
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
        </div>
      </div>
      </Glow>
      </GlowCapture>
    </div>
  );
}

export default App;
