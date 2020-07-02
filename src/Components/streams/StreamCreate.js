import React, { Component } from "react";
import { Field, reduxForm, formValues } from "redux-form";

class StreamCreate extends Component {
  renderInput({input,label}) {
    // console.log({input});
    return (
      <div className="field">
          <label>{label}</label>
          <input {...input}
      />
      </div>
    );
  }
  onSubmit(formValues){
    console.log(formValues)
  }

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>

        <button className="ui button primary">Submit</button>
      </form>
    );
  };
};

const validate = (formValues)=>{
    const errors={}
    if(!formValues.title){
        //only ran if user did not answer title
        errors.title="you must enter a title";
    }
    if(!formValues.description){
        //only ran if user did not answer title
        errors.description="you must enter a description";
    }
    return errors;
}

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
