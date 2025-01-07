import React from 'react';

const ColorDisplay = ({ colorData }) => {
  const { hex = '#000000', rgb = 'rgb(0, 0, 0)', name = 'Unknown Color', css, scss, less } = colorData;

  return (
    <div className="color-display">
      <div
        className="color-preview"
        style={{
          backgroundColor: hex,
          width: '100px',
          height: '100px',
          borderRadius: '5px',
          marginBottom: '10px',
        }}
      ></div>
      <h2>{name}</h2>
      <ul>
        <li><p className='color-type'>HEX:</p> <p>{hex}</p></li>
        <li><p className='color-type'>RGB:</p> <p>{rgb}</p></li>
        <li><p className='color-type'>CSS:</p>  <p>{css || 'Not Available'}</p></li>
        <li><p className='color-type'>SCSS:</p> <p>{scss || 'Not Available'}</p></li>
        <li><p className='color-type'>LESS:</p> <p>{less || 'Not Available'}</p></li>
      </ul>
    </div>
  );
};

export default ColorDisplay;
