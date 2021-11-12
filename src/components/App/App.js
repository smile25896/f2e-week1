import React, { Component } from "react";
import {
  Header,
  Banner,
  ChooseCities,
  Activity,
  Food,
  House,
} from "components";
import {
  Route,
  Switch,
  // Redirect
} from "react-router-dom";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { bindActionCreators } from "redux";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <Header />
        <Banner />
        <ChooseCities />
        <Activity />
        <Food />
        <House />
      </>
      // <Switch>
      //   {/* <Route path="/" component={Header} exact /> */}
      // </Switch>
    );
  }
}

App.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
