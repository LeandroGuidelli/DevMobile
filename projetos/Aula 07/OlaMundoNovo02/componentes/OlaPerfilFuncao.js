import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OlaPerfilFuncao = ({ nome, endereco, telefone }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil (Função)</Text>
      <Text>Nome: {nome}</Text>
      <Text>Endereço: {endereco}</Text>
      <Text>Telefone: {telefone}</Text>
    </View>
  );
};

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

export default OlaPerfilFuncao;
