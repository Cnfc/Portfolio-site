import React, { Component } from "react";

class Field extends Component {
  state = {
    value: this.props.value,
    error: false
  };

  getDerivedStateToProps(nextProps) {
    return { value: nextProps.value };
  }

  onChange = e => {
    const name = this.props.name;
    const value = e.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;

    this.setState({ value, error });

    this.props.onChange({ name, value, error });
  };

  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.onChange}
        />
        <span style={{ color: "red" }}>{this.state.error}</span>
      </div>
    );
  }
}

export default Field;
