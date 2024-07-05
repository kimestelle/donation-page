import { ParallaxProvider } from 'react-scroll-parallax';
import First from './slides/slide-1/First.jsx';
import Second from './slides/slide-2/Second.jsx';
import Third from './slides/slide-3/Third.jsx';
import Fourth from './slides/Fourth.jsx';
import Snow from './slides/Snow.jsx';
import Cover from './slides/Cover.jsx';
import StoryPanel from './slides/StoryPanel.jsx';
import { SlideFrameScrollProvider } from '../context/SlideFrameScrollContext.jsx';
import './SlideFrame.css';

const SlideFrame = () => {
  const slides = [Cover, First, Second, Third, Fourth];
  const years = [1885, 1975, 1995, 2013, 2023];
  const milestones = [
    'The Daily Pennsylvanian was founded and has since been continually published since with a brief hiatus during WWII.',
    'The DP moved from its 34th and Chestnut home to 4015 Walnut St.',
    'The DP launched its website theDP.com.',
    'The Board of Directors was established.',
    'The DP Foundation is established to manage the organization\'s assets and long-term planning.',
  ]

  return (
    <SlideFrameScrollProvider>
      <ParallaxProvider scrollAxis="horizontal">
        {slides.map((SlideComponent, index) => (
          <div key={index} className="slide">
            <SlideComponent />
            <StoryPanel story={years[index].toString()} milestones={milestones[index]}/>
          </div>
        ))}
        <div className="parallax-container">
          <Snow />
        </div>
      </ParallaxProvider>
    </SlideFrameScrollProvider>
  );
};

export default SlideFrame;
