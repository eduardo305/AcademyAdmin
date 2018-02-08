import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import formFields from './ClassroomForm.config';
import goalsFields from './GoalsForm.config';
import NextButton from '../NextButton';
import CancelButton from '../CancelButton';

class ClassroomReviewForm extends Component {
  renderFormFieldReview() {
    const classroomFields = formFields.map(({ name, label }) => {
      return (
        <div key={ name }>
          <div>{ label }</div>
          <div>{ this.props.formValues[name] }</div>
        </div>
      );
    });

    const classroomGoals = goalsFields.map(({ name, label}) => {
      return (
        <div key={name}>
          <div>{label}</div>
          <div>{this.props.formValues[name]}</div>
        </div>
      );
    });

    return [ ...classroomFields, ...classroomGoals ];
  }

  render() {
    const { onBack } = this.props;
    console.log(this.props.formValues);

    return (
      <div className='Form ClassroomReviewForm'>

        { this.renderFormFieldReview() }
        
        <NextButton onClick={() => console.log(this.props.formValues)} />
        <CancelButton onClick={ onBack } />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    formValues: store.form.classroomForm.values
  };
};

export default connect(mapStateToProps)(ClassroomReviewForm);