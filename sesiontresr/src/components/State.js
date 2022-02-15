import React, { Component } from 'react';

// ClockUsingClass

class State extends Component {
  // Ciclo de vida
  constructor(props) {
    super(props);

    // estado inicial
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    // modifico mi estado estructura o funcion para modificar el estado
    this.time = setInterval(() => {
      this.changeTime();
    }, 1000);
  }

  changeTime() {
    this.setState({ date: new Date() });
  }

  componentWillMount() {
    // limpio la información o estado fallecido
    clearInterval(this.state);
  }

  render() {
    return (
      <>
        <div>Hola desde un componente de clase</div>
        <div>
          <h1>La hora es: {this.state.date.toLocaleTimeString()}</h1>
        </div>
      </>
    );
  }
}

export default State;