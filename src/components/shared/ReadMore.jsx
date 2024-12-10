import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ReadMore({ children }) {
  const text = children;
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
        style={{
          color: 'green', background: 'none', border: 'none', cursor: 'pointer',
        }}
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
