import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import style from "./dashboard.scss";

/* Create Statelfull component */
class Dashboard extends Component {
    componentDidMount() {

    }
  
    render() {
      return <div className={`${style.globalCont}`}>
          <div className={`${style.header}`}>header</div>
          <div className={`${style.body}`}>body</div>
          <div className={`${style.footer}`}>footer</div>
      </div>;
    }
  }

Dashboard.propTypes = {};
/* Map data from redux store to component props */
const mapStateToProps = state => ({});
  
/* Map actions from redux to component props */
const mapDispatchtoProps = dispatch => ({});
  
export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Dashboard);