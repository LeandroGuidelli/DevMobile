import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';

export default function App() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mostrarPerfil, setMostrarPerfil] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        keyboardType="phone-pad"
        onChangeText={setTelefone}
      />
      <Button title="Enviar" onPress={() => setMostrarPerfil(true)} />

      {mostrarPerfil && (
        <>
          <OlaPerfilFuncao nome={nome} endereco={endereco} telefone={telefone} />
          <OlaPerfilClasse nome={nome} endereco={endereco} telefone={telefone} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});
