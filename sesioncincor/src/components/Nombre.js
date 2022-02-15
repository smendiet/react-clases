import React, { Component } from "react";
import PropTypes from "prop-types";

class Nombre extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    alert("Te damos la bienvenida " + this.props.nombre);
  }

  componentWillUnmount() {
    alert("Adiós");
  }

  render() {
    return (
      <div>
        {this.props.nombre}
        <button onClick={this.props.borrarNombreDeLista}>x</button>
      </div>
    );
  }
}

Nombre.propTypes = {
  nombre: PropTypes.string,
  borrarNombreDeLista: PropTypes.func
}

export default Nombre;