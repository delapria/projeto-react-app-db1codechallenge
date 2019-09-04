import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: props.inicio
    };
  }

  componentDidMount() {
    this.iniciarContador();
  }

  iniciarContador = () => {
    this.contadorInterval = setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, this.props.tempo);
  };

  componentWillUnmount() {
    clearInterval(this.contadorInterval);
  }

  render() {
    return (
      <p>
        <span>Contador:</span> <strong>{this.state.contador}</strong>
      </p>
    );
  }
}

export default Contador;
