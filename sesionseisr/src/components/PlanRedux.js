import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const PlanRedux = (props) => {
  const {
    match: { url }
  } = props;

  return (
    <div>
      <h1>Redux</h1>
      <Link to={`${url}/ejemplo1`}>Ejemplo1</Link>
      <br />
      <Link to={`${url}/ejemplo2`}>Ejemplo2</Link>
    </div>
  );
}

/*
PlanRedux.PropTypes = {
  match: PropTypes.shape({
    url: PropTypes.string
  })
};
*/

export default PlanRedux;