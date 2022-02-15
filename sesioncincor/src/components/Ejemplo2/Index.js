import React, { useState, Fragment } from "react";

// Renderizado condicional
// Directa
// Ternaria
// Por función

const RenderizadoCondicional = () => {
  const [mostrarUsuarios, setMostrarUsuarios] = useState(true);
  const componente = <span>Hola mundo!!!</span> 
  const componenteDos = <span>Hola Universo!!!</span> 
  const renderizarUsuarios = () => {
    if (mostrarUsuarios) return componente;

    return componenteDos;
  }
  return (
    <Fragment>
      {/* Directa */}
      {/* {condicionParaRevisar && componenteParaRenderizar} */ }
      {/* {mostrarUsuarios && componente} */}

      {/* Ternaria */}
      {/* { mostrarUsuarios ? componente : componenteDos */}

      {/* Por función */}
      {renderizarUsuarios()}
    </Fragment>
  );
}

export default RenderizadoCondicional;