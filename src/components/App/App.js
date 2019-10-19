import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import style from "./App.scss";
import Layout from "./Layout";
import SignIn from '../SignIn';
import Events from '../Events';

/* connect need to connect component to redux store */

/* Create Statelfull component */
class App extends Component {
  componentDidMount() {
    console.log("START");
  }

  render() {
    return (
      <Router history={this.props.history}>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => "Home"} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/profile" render={() => "Profile"} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" render={() => "Sign up"} />
            <Route path="**" render={() => "404 NotFound"} />
          </Switch>
      </Layout>
      </Router>
    );
  }
}

/* propTypes need to validate props types */
App.propTypes = {};
/* Map data from redux store to component props */
const mapStateToProps = state => ({
  history: state.historyData.history
});

/* Map actions from redux to component props */
const mapDispatchtoProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(App);
