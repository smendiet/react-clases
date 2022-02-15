// Componente de clase o inteligente o stateful

import React from "react";

class AntiHeroBox extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h1>Mi nombre es {this.props.name} y yo soy {this.props.antiHero}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default AntiHeroBox;