import { Parallax } from 'react-scroll-parallax';
import layerOne from './1-1.png';
import layerTwo from './1-2.png';
import layerThree from './1-3.png';

import './First.css';
import '../Parallax.css';

const First = () => {
  return (
    <div className='first'>
      <div className='frame'>
        <Parallax translateX={[-20, 20]} className="newsroom-img">
          <img src={layerThree} alt="Layer 3" />
        </Parallax>
        <Parallax translateX={[-10, 10]} className="newsroom-img">
          <img src={layerTwo} alt="Layer 2" />
        </Parallax>
        <Parallax translateX={[-5, 5]} className="newsroom-img">
          <img src={layerOne} alt="Layer 1" />
        </Parallax>
      </div>
    </div>
  );
};

export default First;
