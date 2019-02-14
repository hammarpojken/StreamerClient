import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  //rendering the specific input fields, props that are passed down from the field componenet in redux-form
  renderError(meta) {
    console.log(meta);
    if (meta.touched && meta.error) {
      console.log("inside");
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  }

  renderInput = formProps => {
    const className = `field ${
      formProps.meta.touched && formProps.meta.error ? "error" : ""
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
    );
  };
  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter a name" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter a description"
        />
        <button className=" ui button primary">Submit</button>
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
