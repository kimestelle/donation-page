import PropTypes from 'prop-types'

const Story = ({ currentSlideIndex }) => {
    let storyContent = '';
  
    switch (currentSlideIndex) {
      case 0:
        storyContent = "This is the story content for slide 0.";
        break;
      case 1:
        storyContent = "This is the story content for slide 1.";
        break;
      case 2:
        storyContent = "This is the story content for slide 2.";
        break;
      case 3:
        storyContent = "This is the story content for slide 3.";
        break;
      case 4:
        storyContent = "This is the story content for slide 4.";
        break;
      default:
        storyContent = "No story content available.";
    }
  
    return (
      <div className="story-content">
        <p>{storyContent}</p>
      </div>
    );
  };

  Story.propTypes = {
    currentSlideIndex: PropTypes.number.isRequired,
  };
  
  export default Story;