import { useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSlideFrameScroll } from '../context/SlideFrameScrollContext.jsx'; // Correct import path

import SlideFrame from './SlideFrame'

import './Slides.css';

const getUrl = (donationPage) => {
  switch (donationPage) {
    case ' ':
      return ' ';
    case 'annual-campaign':
      return 'https://www.classy.org/give/506065/#!/donation/checkout';
    case 'capital-campaign':
      return 'https://host.nxt.blackbaud.com/donor-form/?svcid=tcs&formId=ab9c0c00-775d-4569-bd3d-d50a1cfce308&envid=p-BbGbRoTNyEqlmBrbIkE5nw&zone=usa';
    case '34th-campaign':
      return 'https://www.classy.org/campaign/usd34k-for-34th-street-magazine/c506707';
    case 'pubsoc-campaign':
      return 'https://www.classy.org/give/558150/?utm_source=Newsletters&utm_campaign=bf09d15d3e-EMAIL_CAMPAIGN_2024_02_06_03_20&utm_medium=email&utm_term=0_-bf09d15d3e-%5BLIST_EMAIL_ID%5D#!/donation/checkout';
    default:
      return ' ';
  }
};

const Slides = ({ donationPage }) => {
  const containerRef = useRef(null);
  const { setScrollPosition } = useSlideFrameScroll();
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = (event) => {
      if (container) {
        container.scrollLeft += event.deltaY;
        event.preventDefault();
        setScrollPosition(container.scrollLeft);
      }
    };

    const handleTouchStart = (event) => {
      startX.current = event.touches[0].pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const handleTouchMove = (event) => {
      const x = event.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX.current) * 3;
      container.scrollLeft = scrollLeft.current - walk;
      event.preventDefault();
      setScrollPosition(container.scrollLeft);
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
  }, [setScrollPosition]);

  const url = useMemo(() => getUrl(donationPage), [donationPage]);

  return (
    donationPage !== ' ' ? (
      <div className="slides-container" ref={containerRef}>
        <iframe
          src={url}
          title="Donation Page"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    ) : (
      <div className="slides-container" ref={containerRef}>
        <div className="overlay"></div>
        <SlideFrame />
      </div>
    )
  );
};

Slides.propTypes = {
  donationPage: PropTypes.string,
};

export default Slides;
