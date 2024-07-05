import { ParallaxProvider } from 'react-scroll-parallax';
import First from './slides/slide-1/First.jsx';
import Second from './slides/Second.jsx';
import Third from './slides/Third.jsx';
import Fourth from './slides/Fourth.jsx';
import Snow from './slides/Snow.jsx';
import Cover from './slides/Cover.jsx';
import StoryPanel from './slides/StoryPanel.jsx';
import { SlideFrameScrollProvider } from '../context/SlideFrameScrollContext.jsx';
import './SlideFrame.css';

const SlideFrame = () => {
  const slides = [Cover, First, Second, Third, Fourth];

  return (
    <SlideFrameScrollProvider>
      <ParallaxProvider scrollAxis="horizontal">
        {slides.map((SlideComponent, index) => (
          <div key={index} className="slide">
            <SlideComponent />
            <StoryPanel story='hihihi' />
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