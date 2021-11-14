import React, { Component } from "react";
import { Header, Footer, Home } from "components";
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
        {/* <Header /> */}
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Footer />
      </>
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
