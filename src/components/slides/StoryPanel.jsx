import PropTypes from 'prop-types';

import './StoryPanel.css'

const StoryPanel = ( {story} ) => {
    return (
        <div className='story-panel'>
            <h1>
            {story}
            </h1>
            <div className='milestones'>
            <ul>
                <li>
                    milestone 1
                </li>
                <li>
                    milestone 2
                </li>
                <li>
                    milestone 3
                </li>
            </ul>
            </div>
        </div>
    )
}

StoryPanel.propTypes = {
    story: PropTypes.string.isRequired,
  };

export default StoryPanel;