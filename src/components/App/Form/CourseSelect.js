import React, { Component } from "react";

import Core from "./api/core.json";
import Electives from "./api/electives.json";

const Courses = {
  core: Core,
  electives: Electives
};

class CourseSelect extends Component {
  state = {
    department: null,
    course: null,
    courses: [],
    _loading: false
  };

  getDerivedStateToProps(update) {
    return {
      department: update.department,
      course: update.course
    };
  }

  fetch = department => {
    this.setState({ _loading: true, courses: [] });
    apiClient(department).then(courses => {
      this.setState({ _loading: false, courses });
    });
  };

  renderDepartmentSelect = e => {
    return (
      <select
        onChange={this.onSelectDepartment}
        value={this.state.department || ""}
      >
        <option value="">Which Department</option>
        <option value="core">Node School: Core</option>
        <option value="electives">Node School: Electives</option>
      </select>
    );
  };

  renderCourseSelect = () => {
    if (this.state._loading) return <img src="./loading.svg" alt="loading" />;
    if (!this.state.department || this.state.courses.length) return <span />;

    return (
      <select
        onChange={this.onSelectDepartment}
        value={this.state.course || ""}
      >
        Which course?
        {[
          <option value="" key="course-none">
            Which Option
          </option>,

          ...this.state.courses.map((course, i) => {
            <option value={course} key={i}>
              {course}
            </option>;
          })
        ]}
      </select>
    );
  };

  render() {
    return (
      <div>
        {this.renderDepartmentSelect()}
        <br />
        {this.renderCourseSelect()}
      </div>
    );
  }
}

function apiClient(department) {
  return {
    then: function(cb) {
      setTimeout(() => {
        cb(Courses[department]);
      }, 1000);
    }
  };
}

export default CourseSelect;
