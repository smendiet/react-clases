import { useEffect, useState } from "react";
import NombreCFH from "./NombreCFH";

const FormListCFH = (props) => {
  const [state, setState] = useState({
    nombre: "",
    mensaje: "",
    listaNombres: ["Bedu"]
  });
// TODO: realizar las funciones en este componente funcional
// Reto: componente de clases

  const didUpdate = () => {
    setState({
      ...state,
      mensaje: `Longitud de la lista es: ${state.listaNombres.length}`
    });
  }

  useEffect(didUpdate, [state.listaNombres]);

  const handleInputChange = (event) => {
    setState({
      ...state,
      nombre: event.target.value
    });
  }

  const handleClick = (event) => {
    const nombreEnEstado = state.nombre;

    if (!nombreEnEstado) return;

    const listaActualizada =[
      ...state.listaNombres,
      nombreEnEstado
    ];

    setState({
      ...state,
      nombre: "",
      listaNombres: listaActualizada 
    });
  }

  const borrarNombreDeLista = (key) => {
    const copiaDeLista = [...state.listaNombres];
    copiaDeLista.splice(key, 1);
    
    setState({
      ...state,
      listaNombres: copiaDeLista
    });
  }

  return (
    <div>
      {state.mensaje}
        <br />
        <input
          value={state.nombre}
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>Agregar</button>
        <ul>
          {state.listaNombres.map((nmbr, key) => (
            <li key={key}>
              <NombreCFH nombre={nmbr} borrarNombreDeLista={borrarNombreDeLista} />
            </li>
          ))}
        </ul>
    </div>
  );
}

export default FormListCFH;