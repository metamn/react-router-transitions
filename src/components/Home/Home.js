import React from "react";
import PropTypes from "prop-types";

import Hero from "../Hero";
import Features from "../Features";
import Pricing from "../Pricing";
import Contact from "../Contact";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const Home = props => {
  return (
    <div className="Home">
      <Hero />
      <Features />
      <Pricing />
      <Contact />
    </div>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
export { propTypes as HomePropTypes, defaultProps as HomeDefaultProps };
