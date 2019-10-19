import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import Dashboard from '../Dashboard/dashboard.js'

import style from "./App.scss";

/* connect need to connect component to redux store */

/* Create Statelfull component */
class App extends Component {
  componentDidMount() {
    console.log("START");
  }

  render() {
    return <div className={`${style.title}`}><Dashboard /></div>;
  }
}

/* propTypes need to validate props types */
App.propTypes = {};
/* Map data from redux store to component props */
const mapStateToProps = state => ({});

/* Map actions from redux to component props */
const mapDispatchtoProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(App);
