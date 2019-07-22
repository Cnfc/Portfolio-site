import React, { Component } from "react";
import isEmail from "validator/lib/isEmail";

import "./Form.css";

class Form extends Component {
  state = {
    fields: {
      name: [],
      email: ""
    },
    people: [],
    fieldErrors: {}
  };

  validate = person => {
    const errors = {};
    if (!person.name) errors.name = "Name Required";
    if (!person.email) errors.email = "EmailRequired";
    if (person.name && !isEmail(person.email)) errors.email = "Invalid Email";
    return errors;
  };

  onFormSubmit = e => {
    e.preventDefault();
    const people = [...this.state.people];
    const person = this.state.fields;
    const fieldErrors = this.validate(person);
    this.setState({ fieldErrors });
    if (Object.keys(fieldErrors).length) return;

    this.setState({
      people: people.concat(person),
      fields: {
        name: "",
        email: ""
      }
    });
  };

  onInputChange = e => {
    const fields = Object.assign({}, this.state.fields);
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  render() {
    return (
      <div className="form">
        <h3>Form: Form Input</h3>
        <h4>Sign Up Sheet</h4>
        <h5>Names</h5>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Name"
            name="name"
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />
          <span style={{ color: "red" }}>{this.state.fieldErrors.name}</span>
          <br />

          <input
            placeholder="Email"
            name="email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />
          <span style={{ color: "red" }}>{this.state.fieldErrors.email}</span>
          <br />

          <input type="submit" />
        </form>
        <div>Names</div>
        <ul>
          {this.state.people.map(({ name, email }, i) => (
            <li key={i}>
              {name} {email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Form;
