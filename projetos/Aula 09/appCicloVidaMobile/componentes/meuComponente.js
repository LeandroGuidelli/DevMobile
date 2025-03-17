import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

class MeuComponente extends Component {
  constructor(props) {
    super(props);
    this.state = { mensagem: 'Olá!', contador: 0, exibirComponente: true };
    console.log('constructor: Componente montado!');
  }

  componentDidMount() {
    console.log('componentDidMount: Componente montado!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Componente atualizado:', prevState, this.state);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Componente desmontado!');
  }

  alterarMensagem = () => {
    if (this.state.exibirComponente) {
      this.setState({ mensagem: 'Leandro Soares Guidelli' });
    }
  };

  incrementarContador = () => {
    if (this.state.exibirComponente) {
      this.setState({ contador: this.state.contador + 1 });
    }
  };

  exibirOcultarComponente = () => {
    this.setState({ exibirComponente: !this.state.exibirComponente });
  };

  render() {
    if (!this.state.exibirComponente) {
      console.log('render: não renderizar, exibirComponente é false.');
      return (
        <View style={styles.container}>
          <Button title="Exibir Componente" onPress={this.exibirOcultarComponente} />
        </View>
      );
    }

    console.log('render: renderizando Componente.');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.mensagem}</Text>
        <Text style={styles.text}>Contador: {this.state.contador}</Text>
        <Button title="Alterar Mensagem" onPress={this.alterarMensagem} />
        <Button title="Incrementar Contador" onPress={this.incrementarContador} />
        <Button title="Exibir/Ocultar Componente" onPress={this.exibirOcultarComponente} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});

export default MeuComponente;
