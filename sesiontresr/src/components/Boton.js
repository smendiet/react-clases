import React from "react";
import PropTypes from "react";

const Boton = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.texto}
      </button>
    </div>
  )
}

// Buenas practicas
Boton.propTypes = {
  texto: PropTypes.string,
  handleClick: PropTypes.func
}

export default Boton;