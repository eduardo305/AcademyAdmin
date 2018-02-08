import React from 'react';

const NextButton = ({ label }) => {
  return (
    <button
      className='btn btn-outline-success btn-block'
      type='submit'>
      { label }
    </button>
  );
}

NextButton.defaultProps = {
  label: 'Next'
};

export default NextButton;