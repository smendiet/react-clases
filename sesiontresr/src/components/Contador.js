import Boton from './Boton';
import React from 'react';

class Contador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0
    };
  }

  handleClick = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  }

  render() {
    return(
      <>
        <div>
          <Boton
            texto={this.state.contador}
            handleClick={this.handleClick}
          />
        </div>
      </>
    );
  }
}

export default Contador;