import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';
import futuresLogo from '../assets/futures-logo.png';
import pubsocLogo from '../assets/pubsoc-logo.png';
import streetLogo from '../assets/34st-logo.png';
import annualLogo from '../assets/annual-logo.png';
import './BottomBar.css';

const BottomBar = ({ currentSlide, handleDonationClick }) => {
  const logoClassName = currentSlide === 0 ? 'logo hidden' : 'logo visible';

  const buttonGlowColors = [
    'glow-blue',
    'glow-red', 
    'glow-green',
    'glow-purple',
    'glow-orange', 
  ];

  return (
    <div className='bottom-bar'>
      <img src={logo} className={`clickable ${logoClassName}`} onClick={handleDonationClick(' ')} alt="140 Years of the DP"/>
      <div className='vertical-line'/>
      {/* Donation links */}
      <div id='annual-campaign-link' className={`donation-box clickable ${buttonGlowColors[currentSlide]}`} onClick={handleDonationClick('annual-campaign')}>
        <img src={annualLogo} alt="DP Annual Advances Campaign"/>
        <p>ANNUAL ADVANCES</p>
      </div>

      <div id='capital-campaign-link' className={`donation-box clickable ${buttonGlowColors[currentSlide]}`} onClick={handleDonationClick('capital-campaign')}>
        <img src={futuresLogo} alt="DP Futures Campaign"/>
        <p>DP FUTURES CAMPAIGN</p>
      </div>

      <div id='34k-34th-link' className={`donation-box clickable ${buttonGlowColors[currentSlide]}`} onClick={handleDonationClick('34th-campaign')}>
        <img src={streetLogo} alt="34k for 34th Street Campaign"/>
        <p>34K for 34TH STREET</p>
      </div>

      <div id='publishers-society-link' className={`donation-box clickable ${buttonGlowColors[currentSlide]}`} onClick={handleDonationClick('pubsoc-campaign')}>
        <img src={pubsocLogo} alt="DP Publisher's Society Campaign"/>
        <p>PUBLISHERS SOCIETY</p>
      </div>
    </div>
  );
};

BottomBar.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  handleDonationClick: PropTypes.func.isRequired,
};

export default BottomBar;
