import React from 'react';

const History = ({ history }) => {
  return (
    <div className="history">
      <h2>History</h2>
      <ul>
        {history.map((color, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            {/* Miniatura koloru */}
            <div
              style={{
                backgroundColor: color.hex,
                width: '20px',
                height: '20px',
                marginRight: '10px',
                borderRadius: '50%',
              }}
            ></div>
            {/* Kod HEX i nazwa koloru */}
            <div className='history-color-name'>
              <span style={{ fontWeight: 'bold' }}>{color.name || 'Unknown Color'}</span>
              <br />
              <span>{color.hex}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
