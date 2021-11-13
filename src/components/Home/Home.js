import React from "react";
// import { Banner, ChooseCities, Activity, Food, Hotel } from "components";
import { Banner, ChooseCities, Activity, Food, Hotel } from "./index";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

function Home({ scenicSpot }) {
  return (
    <>
      <Banner />
      <ChooseCities />
      <Activity list={scenicSpot.activityList} />
      <Food list={scenicSpot.restaurantList} />
      <Hotel list={scenicSpot.hotelList} />
    </>
  );
}

Home.propTypes = {};

export default Home;
