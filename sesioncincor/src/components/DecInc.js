import { useState } from "react";
import Boton from "./Boton";

const DecInc = (props) => {
  const [state, setState] = useState(0);
  const decremento = () => setState(state - 1);
  const incremento = () => setState(state + 1);
  
  return (
    <div>
      <Boton handleClick={incremento} text="Sumar" />
      {state}
      <Boton handleClick={decremento} text="Restar" />
    </div>
  );
}

export default DecInc;