import React, { Component } from "react";
import Home from "./Home";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { getActivity, getRestaurant, getHotel } from "actions/scenicSpot";

class HomeContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    let data = {
      $top: 30,
    };
    this.props.getActivity(data);
    this.props.getRestaurant(data);
    this.props.getHotel(data);
  }

  render() {
    return <Home scenicSpot={this.props.scenicSpot} />;
  }
}

HomeContainer.propTypes = {
  getActivity: PropTypes.func.isRequired,
  getHotel: PropTypes.func.isRequired,
  getRestaurant: PropTypes.func.isRequired,
  scenicSpot: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    scenicSpot: state.scenicSpot,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getActivity: bindActionCreators(getActivity, dispatch),
    getRestaurant: bindActionCreators(getRestaurant, dispatch),
    getHotel: bindActionCreators(getHotel, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
