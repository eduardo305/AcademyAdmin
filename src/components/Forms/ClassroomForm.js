import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { each } from 'lodash';

import CustomField from './CustomField';
import formFields from './ClassroomForm.config';
import NextButton from '../NextButton';
import CancelButton from '../CancelButton';

import '../../styles/form.css';
import '../../styles/DatePicker.css';

class ClassroomForm extends Component {
  renderFormFields() {
    return formFields.map(({ label, name, type, placeholder }) => {
      return (
        <Field
          key={ name }
          component={ CustomField }
          type={ type }
          label={ label }
          placeholder={ placeholder }
          name={ name }
        />
      );
    });
  }

  render() {
    const { onBack, onClassroomSubmit } = this.props;
    return (
      <div className='Form ClassroomForm' >
        <form onSubmit={this.props.handleSubmit(onClassroomSubmit)}>
          { this.renderFormFields() }
          <NextButton />
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  each(formFields, (field) => {
    if (!values[field.name]) {
      errors[field.name] = 'You must provide something in here';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  destroyOnUnmount: false,
  form: 'classroomForm'
})(ClassroomForm);