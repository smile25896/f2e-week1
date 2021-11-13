import React from "react";
// import { Banner, ChooseCities, Activity, Food, House } from "components";
import { Banner, ChooseCities, Activity, Food, House } from "./index";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

function Home(props) {
  return (
    <>
      <Banner />
      <ChooseCities />
      <Activity />
      <Food />
      <House />
    </>
  );
}

Home.propTypes = {};

export default Home;
