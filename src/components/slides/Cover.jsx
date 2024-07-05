// Cover.jsx
import './Cover.css';
import { Parallax } from 'react-scroll-parallax';
import newspapers from '../../assets/newspapers.png';
import scroll from '../../assets/scroll.svg';

const Cover = () => {
  return (
    <div className='cover'>
      <Parallax translateX={[-30, 30]} className="parallax-layer">
        <img src={newspapers} className='newspapers' alt="Newspapers" />
      </Parallax>
      <Parallax translateX={[-50, 50]} className="parallax-layer scroll-layer">
        <div className='scroll-container'>
          <img src={scroll} className='scroll' alt="Scroll" />
        </div>
      </Parallax>
      <div className='gradient-overlay'/>
    </div>
  );
};

export default Cover;
