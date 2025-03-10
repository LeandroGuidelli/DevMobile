import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
import {OlaPerfilClasse} from './componentes/OlaPerfilClasse';

export default function App() {
  return (
    <View style={styles.container}>
      <OlaPerfilFuncao />
      <OlaPerfilClasse />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
