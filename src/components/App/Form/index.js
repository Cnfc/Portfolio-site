import React, { Component } from "react";
import isEmail from "validator/lib/isEmail";

import "./Form.css";
import Field from "./Field";

class Form extends Component {
  state = {
    fields: {
      name: "",
      email: ""
    },
    people: [],
    fieldErrors: {}
  };

  onFormSubmit = e => {
    e.preventDefault();
    const people = this.state.people;
    const person = this.state.person;

    if (this.validate()) return;
    this.setState({
      people: people.concat(person),
      fields: {
        name: "",
        email: ""
      }
    });
  };

  validate() {
    const person = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessage = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

    if (!person.name) return true;
    if (!person.email) return true;
    if (errMessage.length) return true;
    return false;
  }

  onInputChange = ({ name, value, error }) => {
    const fields = Object.assign({}, this.state.fields);
    const fieldErrors = Object.assign({}, this.state.fieldErrors);

    fields[name] = value;
    fieldErrors[name] = error;
    this.setState({ fields, fieldErrors });
  };

  render() {
    return (
      <div className="form">
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <Field
            placeholder="Name"
            name="name"
            value={this.state.fields.name}
            onChange={this.onInputChange}
            validate={val => (val ? false : "Name Required")}
          />

          <br />

          <Field
            placeholder="Email"
            name="email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
            validate={val => (isEmail(val) ? false : "Invalid Email")}
          />

          <br />

          <input type="submit" disabled={this.validate()} />
        </form>

        <div>
          <h3>People</h3>
          <ul>
            {this.state.people.map(({ name, email }, i) => (
              <li key={i}>
                {name} ({email})
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Form;
