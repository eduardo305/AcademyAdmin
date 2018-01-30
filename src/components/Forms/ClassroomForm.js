import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import ClassroomField from './ClassroomField';
import formFields from './ClassroomForm.config';

class ClassroomForm extends Component {
  renderFormFields() {
    return formFields.map(({ label, name }) => {
      return (
        <Field
          key={ name }
          component={ ClassroomField }
          type='text'
          label={ label }
          name={ name }
        />
      );
    });
  }

  render() {
    return (
      <div className='ClassroomForm'>
        <form onSubmit={ this.props.handleSubmit(this.props.onClassroomSubmit) }>
          { this.renderFormFields() }
          <button type='button'>
            Cancel
          </button>
          <button type='submit'>
            Next
          </button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  // console.log(values);
}

export default reduxForm({
  validate,
  destroyOnUnmount: false,
  form: 'classroomForm'
})(ClassroomForm);