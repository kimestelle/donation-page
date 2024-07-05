import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import './StoryPanel.css';

const StoryPanel = ({ story, milestones }) => {
  return (
    <Parallax translateY={[0, -10]}>
      <div className='story-panel'>
        <h1>{story}</h1>
        <div className='milestones'>
          {milestones}
        </div>
      </div>
    </Parallax>
  );
};

StoryPanel.propTypes = {
  story: PropTypes.string.isRequired,
  milestones: PropTypes.string,
};

export default StoryPanel;
