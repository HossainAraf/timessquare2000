import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/read-more.css';

function ReadMore({ children }) {
  // Convert React children into an array and extract the text content
  const text = React.Children.toArray(children).map((child) => {
    if (typeof child === 'string') {
      return child;
    }
    if (React.isValidElement(child)) {
      return child.props.children;
    }
    return '';
  }).join(' ');

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <button
        type="button"
        onClick={toggleReadMore}
        className="read-or-hide"
      >
        {isReadMore ? '...read more' : ' show less'}
      </button>
    </p>
  );
}

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReadMore;
