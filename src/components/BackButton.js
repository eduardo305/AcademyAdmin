import React from 'react';
import '../styles/BackButton.css';
import '../fonts/icomoon/style.css';

export default ({ onBack }) => {
  return (
    <div
      onClick={ onBack }
      className='BackButton'>
      <span className="icon-arrow-left2"></span>
    </div>
  );
}