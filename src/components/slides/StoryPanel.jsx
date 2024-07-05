import PropTypes from 'prop-types';

import './StoryPanel.css'

const StoryPanel = ( {story} ) => {
    return (
        <div className='story-panel'>
            {story}
        </div>
    )
}

StoryPanel.propTypes = {
    story: PropTypes.string.isRequired,
  };

export default StoryPanel;