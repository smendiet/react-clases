import React, { useState } from "react";
import Input from "./Input";

const Form2 = (props) => {
  const [state, setState] = useState({
    nombre: "",
    apellidos: ["", ""]
  });

  const editarNombre = (event) => setState({
    ...state,
    nombre: event.target.value
  });

  const editarApellidos = (atributo) => (event) => {
    let s = {...state};
    s.apellidos[atributo] = event.target.value;
    setState(s);
  };

  return (
    <div>
      <Input handleChange={editarNombre} />
      <Input handleChange={editarApellidos(0)} />
      <Input handleChange={editarApellidos(1)} />

      <p>
        Mi nombre es:<br />
        <strong>{state.nombre} {state.apellidos[0]} {state.apellidos[1]}</strong >
      </p>
    </div>
  );
}

export default Form2;