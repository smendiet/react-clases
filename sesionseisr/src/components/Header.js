import React from "react";
import { Link } from "react-router-dom";
import { RUTAS } from "../helpers/constants";

const Header = () => {
  return (
    <div>
      {/* El html ancor <a> y href (to)   */}
      <Link to={RUTAS.inicio} >Inicio</Link>
      <Link to={RUTAS.planReact} >React</Link>
      <Link to={RUTAS.planRedux} >Redux</Link>
    </div>
  );
}

export default Header;