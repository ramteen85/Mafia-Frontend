/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Badge.css';

const Badge = ({ number, style }) => {
  return (
    <div style={style} className="badge">
      {number}
    </div>
  );
};

export default Badge;
