import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { SlideRight, SlideLeft } from 'animate-components';

import ClassroomForm from './ClassroomForm';
import ClassroomFormReview from './ClassroomReviewForm';

class ClassroomNew extends Component {
  state = {
    step: 1
  };

  renderFormStep() {
    if (this.state.step === 1) {
      return (
        <SlideLeft duration='0.5s' timingFunction='ease-out'>
          <ClassroomForm
            onClassroomSubmit={ () => this.setState({ step: 2 }) }
          />
        </SlideLeft>
      );
    }

    return (
      <SlideRight duration='0.5s' timingFunction='ease-in'>
        <ClassroomFormReview
          onCancel={ () => this.setState({ step: 1 }) }
        />
      </SlideRight>
    );
  }

  render() {
    return (
      <div>{ this.renderFormStep() }</div>
    );
  }
}

export default reduxForm({
  form: 'classroomForm'
})(ClassroomNew);