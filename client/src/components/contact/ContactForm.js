import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <p className="invalid-feedback">
          {error}
        </p>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`
    const type = label === 'Email' ? 'email' : 'text';
    if (label === 'Message') {
      return (
        <div>
          <textarea {...input}
            className={className}
            placeholder={label}
            autoComplete="off"
            type={type}
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
          type={type}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }



  render() {
    return (
      <form className='contact__content__form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="contact__content__form__name">
          <Field name="firstName"
            component={this.renderInput}
            label="First Name" />
          <Field name="lastName"
            component={this.renderInput}
            label="Last Name" />
        </div>
        <div className="contact__content__form__email">
          <Field name="email"
            component={this.renderInput}
            label="Email"
          />
        </div>
        <div className="contact__content__form__message">
          <Field name="message"
            component={this.renderInput}
            label="Message"
          />
        </div>
        <button className="contact__content__form__submit" type="submit">
          {this.props.loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
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
  if (!formValues.lastName) {
    errors.lastName = "Invalid Last Name";
  }
  if (!formValues.email) {
    errors.email = "Invalid Email";
  }

  return errors;
}

export default reduxForm({
  form: 'contactForm',
  validate: validate
})(ContactForm);
