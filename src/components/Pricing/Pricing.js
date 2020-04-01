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
const Pricing = props => {
  return <Container className="Pricing">Pricing</Container>;
};

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;
export { propTypes as PricingPropTypes, defaultProps as PricingDefaultProps };
