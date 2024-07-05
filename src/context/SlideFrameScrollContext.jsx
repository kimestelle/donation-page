import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const SlideFrameScrollContext = createContext();

export const SlideFrameScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <SlideFrameScrollContext.Provider value={{ scrollPosition, setScrollPosition }}>
      {children}
    </SlideFrameScrollContext.Provider>
  );
};

SlideFrameScrollProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSlideFrameScroll = () => useContext(SlideFrameScrollContext);
