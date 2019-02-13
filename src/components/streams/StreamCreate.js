import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  //rendering the specific input fields, props that are passed down from the field componenet in redux-form
  renderError({ error, touched }) {
    return <div>{error}</div>;
  }

  renderInput(formProps) {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
    );
  }
  onSubmit(formValues) {}

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter a name" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter a description"
        />
        <button type="submit" className=" ui button primary">
          Submit
        </button>
      </form>
    );
  }
}

// redux-form uses this function to validate the formvalues that is submitet passed in down below
const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter som values for the titles!";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description!";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);
