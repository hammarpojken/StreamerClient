import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput(formProps) {
    return (
      <div>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
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
        <button className=" ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
