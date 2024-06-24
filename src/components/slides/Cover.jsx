import './Cover.css';
import { Parallax } from 'react-scroll-parallax';
import newspapers from '../../assets/newspapers.png';
import scroll from '../../assets/scroll.svg';

const Cover = () => {
  return (
    <div className='cover'>
      <Parallax translateX={[-50, 50]} className="parallax-scroll">
        <div className='scroll-container'>
          <img src={scroll} className='scroll' alt="Scroll" />
        </div>
      </Parallax>
      <img src={newspapers} alt="Newspapers" />
    </div>
  );
};

export default Cover;

