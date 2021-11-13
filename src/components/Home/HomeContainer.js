import React, { Component } from "react";
import Home from "./Home";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { getActivity } from "actions/scenicSpot";

class HomeContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    let data = {
      $top: 30,
    };
    this.props.getActivity(data);
  }

  render() {
    return <Home scenicSpot={this.props.scenicSpot} />;
  }
}

HomeContainer.propTypes = {};

function mapStateToProps(state) {
  return {
    scenicSpot: state.scenicSpot,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getActivity: bindActionCreators(getActivity, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
