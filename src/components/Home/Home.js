import React from "react";
// import { Banner, ChooseCities, Activity, Food, House } from "components";
import { Banner, ChooseCities, Activity, Food, House } from "./index";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

function Home({ scenicSpot }) {
  return (
    <>
      <Banner />
      <ChooseCities />
      <Activity list={scenicSpot.activityList} />
      <Food list={scenicSpot.restaurantList} />
      <House />
    </>
  );
}

Home.propTypes = {};

export default Home;
