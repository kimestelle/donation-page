import { Parallax } from 'react-scroll-parallax';
import layerOne from './1-1.png';
import layerTwo from './1-2.png';
import layerThree from './1-3.png';
import paper from './1-paper.jpg'

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
      <div className='text'>
        <p>
            This is the first DP office??? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ratione vel explicabo nisi facere quae corrupti dolorem repellat nam optio voluptatum expedita porro sunt placeat obcaecati, aliquid, impedit fuga mollitia.
        </p>
      </div>
      <Parallax translateX={[-15, -20]} className='bg-image'>
            <img src={paper}/>
        </Parallax>
    </div>
  );
};

export default First;
