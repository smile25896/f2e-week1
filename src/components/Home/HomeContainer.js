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
      $top: 10,
    };
    this.props.getActivity(data);
  }

  render() {
    console.log(this.props.scenicSpot.activityList);
    return <Home />;
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
