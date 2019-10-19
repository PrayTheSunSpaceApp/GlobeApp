import React, { Component } from "react";
// import PropTypes from "prop-types";
import propTypes from 'prop-types'
import { connect } from "react-redux";
import { Link } from "react-router-dom"

import style from "./header.scss";

/* connect need to connect component to redux store */

/* Create Statelfull component */
export class Header extends Component {
  componentDidMount() {
    
  }

  loginSigin(){
    if (user) return (
             <Link to=''>My Account</Link>
    )
    else return (
        <div>
            <div>
                <Link to=''>Sign In</Link>
            </div>
            <div>
                <Link to=''>Log In</Link>
            </div>
        </div>
    )
  }

  render() {
    return <div className={`${style.header}`}>
        <div>Kartinka</div>
        <div>
            Latest Events
        </div>
        <div>
            Near event
        </div>
        <div>
            {/* {this.loginSigin()} */}
        </div>
    </div>;
  }
}

/* propTypes need to validate props types */
Header.propTypes = {
    loginSigin: propTypes.func
};
/* Map data from redux store to component props */
const mapStateToProps = state => ({});

/* Map actions from redux to component props */
const mapDispatchtoProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Header);
