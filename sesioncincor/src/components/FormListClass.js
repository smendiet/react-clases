import React, { Component } from "react";
import Nombre from "./Nombre"

class FormListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      mensaje: "",
      listaNombres: ["Bedu"]
    };
  }

  // En los componentes de clase state inicia el estado y tambien retiene el valor modificado por
  // el setState que es modificador del estado
  // Modificar el estado
  // los ciclos de vida: DidMount, WillUnmount, DidUpdate.
  // Modificar el estado del padre por medio de funciones mandadas como props
  // Entender en que momento se ejecuta cada uno
  // Usar los eventos onClick y onChange

  componentDidUpdate(prevProps, prevState) {
    if (this.state.listaNombres !== prevState.listaNombres)
      this.setState({
        mensaje: `Longitud de la lista es: ${this.state.listaNombres.length}`
      });
  }

  handleInputChange = (event) => {
    this.setState({
      nombre: event.target.value
    });
  }

  handleClick = (event) => {
    const nombreEnEstado = this.state.nombre;

    if (!nombreEnEstado) return;

    const listaActualizada =[
      ...this.state.listaNombres,
      nombreEnEstado
    ];

    this.setState({
      nombre: "",
      listaNombres: listaActualizada 
    });
  }

  // Validar si el nombre existe (que no este vacio)
  // Añadir el nombre a la lista de nombres
  // Actualizar el estado (añadir nombre a la lista y limpiar el nombre)

  borrarNombreDeLista = (key) => {
    const copiaDeLista = [...this.state.listaNombres];
    copiaDeLista.splice(key, 1);
    
    this.setState({
      listaNombres: copiaDeLista
    });
  }

  render() {
    return (
      <div>
        {this.state.mensaje}
        <br />
        <input
          value={this.state.nombre}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleClick}>Agregar</button>
        <ul>
          {this.state.listaNombres.map((nmbr, key) => (
            <li key={key}>
              <Nombre nombre={nmbr} borrarNombreDeLista={this.borrarNombreDeLista} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FormListClass;