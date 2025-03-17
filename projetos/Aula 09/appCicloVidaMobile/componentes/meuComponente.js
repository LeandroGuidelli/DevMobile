import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native'; // Importa TouchableOpacity para botões customizados

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
    this.setState({ mensagem: 'Nova mensagem!' });
  };

  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  exibirOcultarComponente = () => {
    this.setState({ exibirComponente: !this.state.exibirComponente });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.contador !== nextState.contador) {
      console.log('shouldComponentUpdate: Contador mudou, renderizando');
      return true;
    }
    console.log('shouldComponentUpdate: Contador não mudou, ignorando renderização');
    return false;
  }

  render() {
    if (!this.state.exibirComponente) {
      console.log('render: para não renderizar se exibirComponente.');
      return null;
    }

    console.log('render: renderizando Componente.');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.mensagem}</Text>
        <Text style={styles.text}>Contador: {this.state.contador}</Text>
        <TouchableOpacity style={styles.button} onPress={this.alterarMensagem}>
          <Text style={styles.buttonText}>Alterar Mensagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.incrementarContador}>
          <Text style={styles.buttonText}>Incrementar Contador</Text>
        </TouchableOpacity>
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
  button: {
      backgroundColor: '#007bEf',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
  },
});

export default MeuComponente;
