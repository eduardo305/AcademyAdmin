import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { SlideRight, SlideLeft } from 'animate-components';

import BackButton from '../BackButton';
import ClassroomForm from './ClassroomForm';
import GoalsForm from './GoalsForm';
import ClassroomFormReview from './ClassroomReviewForm';

class ClassroomNew extends Component {
  state = {
    step: 1
  };

  renderFormStep() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <SlideLeft duration='0.5s' timingFunction='ease-out'>
            <ClassroomForm
              onClassroomSubmit={() => this.setState({ step: 2 })}
            />
          </SlideLeft>
        );
      case 2:
        return (
          <SlideLeft duration='0.5s' timingFunction='ease-out'>
            <BackButton onBack={() => this.setState({ step: 1 })} />
            <GoalsForm
              onClassroomSubmit={() => this.setState({ step: 3 })}
            />
          </SlideLeft>
        );
      default:
        return (
          <SlideRight duration='0.5s' timingFunction='ease-in'>
            <BackButton onBack={() => this.setState({ step: 2 })} />
            <ClassroomFormReview
              onBack={() => this.setState({ step: 2 })}
            />
          </SlideRight>
        );
    }
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