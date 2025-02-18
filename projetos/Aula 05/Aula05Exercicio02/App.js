import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');  // Estado para armazenar o nome
  const [mensagem, setMensagem] = useState('');  // Estado para armazenar a mensagem

  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Olá, ${nome}!`);  // Define a mensagem com o nome inserido
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}> {/* Título centralizado */}
        <Text style={styles.text}>
          Exemplo de elementos gráficos interativos em React Native
        </Text>
      </View>

      <View style={styles.inputContainer}> {/* Campo de entrada e botão de envio */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={setNome}
          value={nome}
        />
        <Button title="Enviar" onPress={lidarComClique} />
      </View>

      {mensagem ? (
        <View style={styles.messageContainer}> {/* Exibe a mensagem se houver */}
          <Text style={styles.message}>{mensagem}</Text>
        </View>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={() => {}}> {/* Botão interativo */}
        <Text style={styles.buttonText}>{mensagem || 'Clique aqui'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  messageContainer: {
    marginTop: 10,
  },
  message: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
