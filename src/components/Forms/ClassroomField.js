import React from 'react';

export default ({ input, name, label, meta: { error, touched } }) => {
  return (
    <div className='ClassroomField form-group'>
      <input { ...input } placeholder={ label } className='form-control' />
      <div className='Error'>{ touched && error }</div>
    </div>
  );
}