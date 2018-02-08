import React from 'react';
import classNames from 'classnames';

export default ({ input, name, label, type, placeholder, meta: { error, touched } }) => {
  let className = classNames({
    'ClassroomField form-group': true,
    'has-danger': touched && error
  });

  let inputClassName = classNames({
    'form-control': true,
    'is-invalid': touched && error
  });

  return (
    <div className={ className } >
      <input { ...input } type={type} placeholder={ placeholder } className={ inputClassName } />
      <div className='invalid-feedback'>{ touched && error }</div>
    </div>
  );
}