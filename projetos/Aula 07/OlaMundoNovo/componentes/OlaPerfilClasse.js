import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class OlaPerfilClasse extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Text>Olá, meu nome é Leandro Soares Guidelli</Text>
            <Text>Moro na rua Homero de Oliveira, no Parque Fehr</Text>
            <Text>Meu telefone é 16992765200</Text>
            <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
