import React from "react";
// import PropTypes from 'prop-types'

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__flipInX animate__delay-2s">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

// GifGridItem.propTypes = {}

export default GifGridItem;
