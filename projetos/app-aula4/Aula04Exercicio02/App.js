import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

// Criação de uma variável para conter as informações do app
const App = () => {

  // variável para conter o nome digitado
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  // variável que contém a ação do click do botão
  const lidarComClique = () => {

    // condicional que verifica se o nome esta sendo digitado, se não estiver, ele retorna um "erro"
    if (nome) {
      setMensagem(`Olá, ${nome}!`);
    } else {
      setMensagem('Por favor, digite seu nome.');
    }
  };

  // retorna a composição estrutural do app para a tela, com a ação das variáveis
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Exemplo Interativo</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome}
        value={nome}
      />

      <Button title="Enviar" onPress={lidarComClique} />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Clique Aqui</Text>
      </TouchableOpacity>

      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;
