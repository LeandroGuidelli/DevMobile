import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class OlaPerfilClasse extends Component {
  render() {
    const { nome, endereco, telefone } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Perfil (Classe)</Text>
        <Text>Nome: {nome}</Text>
        <Text>Endereço: {endereco}</Text>
        <Text>Telefone: {telefone}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OlaPerfilClasse;
