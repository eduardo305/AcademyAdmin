import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import CustomField from './CustomField';
import formFields from './GoalsForm.config';
import NextButton from '../NextButton';
import CancelButton from '../CancelButton';

class GoalsForm extends Component {
  renderFormFields() {
    return formFields.map(({ label, name, type, placeholder }) => {
      return (
        <Field
          key={name}
          component={CustomField}
          type={type}
          label={label}
          placeholder={placeholder}
          name={name}
        />
      );
    });
  }

  render() {
    const { onBack, onClassroomSubmit } = this.props;

    return (
      <div className='Form GoalsForm'>
        <form onSubmit={this.props.handleSubmit(onClassroomSubmit)}>
          { this.renderFormFields() }
          <NextButton />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'classroomForm'
})(GoalsForm);
