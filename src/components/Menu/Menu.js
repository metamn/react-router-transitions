import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "../Hero";
import Features from "../Features";
import Pricing from "../Pricing";
import Contact from "../Contact";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";

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
  "& ul": {
    listStyle: "none",
    display: "flex",
    "& li": {
      marginRight: "1em"
    }
  }
}));

/**
 * Displays the component
 */
const Menu = props => {
  return (
    <Container className="Menu">
      <Router>
        <Switch>
          <Route path="*">
            <ul>
              <li>
                <Link to="/Hero">Hero</Link>
              </li>
              <li>
                <Link to="/Features">Features</Link>
              </li>
              <li>
                <Link to="/Pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
            <div className="Content">
              <Hero />
              <Features />
              <Pricing />
              <Contact />
            </div>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
export { propTypes as MenuPropTypes, defaultProps as MenuDefaultProps };
