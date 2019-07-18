import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import "../App/App.css";

class SignUp extends Component {
  onSubmit = formProps => {
    console.log(formProps);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="signup_form">
        <fieldset>
          <label>Email</label>
          <Field name="email" type="text" component="input" autoComplete="on" />
        </fieldset>

        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="on"
          />
        </fieldset>
        <button>Sign Up</button>
      </form>
    );
  }
}

export default reduxForm({ form: "signup" })(SignUp);
