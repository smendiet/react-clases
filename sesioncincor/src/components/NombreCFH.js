import PropTypes from "prop-types";
import { useEffect } from "react";

const NombreCFH = (props) => {
  const didMount = () => {
    alert("Te damos la bienvenida " + props.nombre);
  }

  useEffect(didMount, []);

  const willUnmount = () => {
    return () => {
      alert('Adíos');
    }
  }

  useEffect(willUnmount, []);

  return (
    <div>
      {props.nombre}
      <button onClick={props.borrarNombreDeLista}>x</button>
    </div>
  );
}

NombreCFH.propTypes = {
  nombre: PropTypes.string,
  borrarNombreDeLista: PropTypes.func
}

export default NombreCFH;