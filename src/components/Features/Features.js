import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component
 */
const Container = styled("div")(props => ({
  minHeight: "100vh",
  borderBottom: "1px solid"
}));

/**
 * Displays the component
 */
const Features = props => {
  return <Container className="Features">Features</Container>;
};

Features.propTypes = propTypes;
Features.defaultProps = defaultProps;

export default Features;
export { propTypes as FeaturesPropTypes, defaultProps as FeaturesDefaultProps };
