import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import formFields from './ClassroomForm.config';

class ClassroomReviewForm extends Component {
  renderFormFieldReview() {
    return formFields.map(({ name, label }) => {
      return (
        <div key={ name }>
          <div>{ label }</div>
          <div>{ this.props.formValues[name] }</div>
        </div>
      );
    })
  }

  render() {
    const { onCancel } = this.props;

    return (
      <div className='ClassroomReviewForm'>

        { this.renderFormFieldReview() }
        
        <button onClick={ onCancel }>Back</button>
        <button onClick={ () => console.log(this.props.formValues) }>Confirm</button>
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