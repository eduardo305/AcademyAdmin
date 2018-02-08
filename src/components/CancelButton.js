import React from 'react';

const CancelButton = ({ label, onClick }) => {
  return (
    <button
      onClick={ onClick }
      className='btn btn-outline-danger btn-block'
      type='submit'>
      { label }
    </button>
  );
}

CancelButton.defaultProps = {
  label: 'Cancel',
  onClick: () => console.log('cancel clicked')
};

export default CancelButton;