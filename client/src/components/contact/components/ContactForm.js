import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="invalid-feedback" style={{marginBottom: ".25rem"}}>
          {error}
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `form-control ${meta.error && meta.touched ? 'is-invalid':''}`
    const type = label === 'Email' ? 'email': 'text';
    if (label === 'Message'){
      return (
        <div>
          <textarea {...input}
            className={className}
            placeholder={label}
            autoComplete="off"
            type = {type}
            />
          {this.renderError(meta)}
        </div>
      )
    }
    return (
      <div>
        <input {...input}
          className={className}
          placeholder={label}
          autoComplete="off"
          type = {type}
          />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit= (formValues) => {
    this.props.onSubmit(formValues);
  }



  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-row mb-3 contact-name">
          <div className="col">
            <Field name="firstName"
              component={this.renderInput}
              label="First Name" />
          </div>
          <div className="col">
            <Field name="lastName"
              component={this.renderInput}
              label="Last Name" />
          </div>
        </div>
        <div className="form-group mb-3">
          <Field name="email"
            component={this.renderInput}
            label="Email"
            />
        </div>
        <div className="form-group mb-3">
          <Field name="message"
            component={this.renderInput}
            label="Message"
            />
        </div>
        <button className="btn btn-primary btn-block" type="submit">
        {this.props.loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> }
        Submit
        </button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.firstName) {
    errors.firstName = "Invalid First Name";
  }
  if(!formValues.lastName) {
    errors.lastName = "Invalid Last Name";
  }
  if(!formValues.email) {
    errors.email = "Invalid Email";
  }

  return errors;
}

export default reduxForm({
  form: 'contactForm',
  validate: validate
})(ContactForm);
