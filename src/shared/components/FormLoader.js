import React from 'react';

const Loader = () => (
  <div
    style={{
      width: '20px',
      height: 'auto',
      margin: 'auto',
      padding: 'auto',
    }}
  >
    <div
      className="load__icon-wrap mb-4 mt-3"
      style={{padding: '40%', textAlign: 'center'}}
    >
      <svg className="load__icon">
        <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
      </svg>
    </div>
  </div>
);

export default Loader;
