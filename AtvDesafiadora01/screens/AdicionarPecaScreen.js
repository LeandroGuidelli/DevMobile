import React, { useState } from 'react'; // Importa React e o hook useState para lidar com estados
import styles from '../estilos/adicionarPecaStyles'; // Importa os estilos da tela
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'; // Importa componentes visuais do React Native

// Componente principal da tela de adicionar peça
export default function AdicionarPeca({ navigation }) {
  // Estados para armazenar os valores dos campos de entrada
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [codigo, setCodigo] = useState('');

  // Função chamada ao pressionar o botão "Salvar Peça"
  const salvarPeca = () => {
    // Verifica se todos os campos foram preenchidos
    if (!nome || !quantidade || !codigo) {
      alert('Preencha todos os campos!');
      return;
    }

    // Cria um objeto representando a nova peça
    const novaPeca = {
      nome,
      quantidade: parseInt(quantidade), // Converte para número inteiro
      codigo,
    };

    // Navega de volta para a tela de Estoque, passando a nova peça como parâmetro
    navigation.navigate('Estoque', { novaPeca });
  };

  // Renderiza a interface do usuário
  return (
    <View style={styles.container}>
      {/* Campo para nome da peça */}
      <Text style={styles.label}>Nome da Peça:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome} // Atualiza o estado conforme o usuário digita
        placeholder="Digite o nome"
      />

      {/* Campo para quantidade */}
      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
        placeholder="Digite a quantidade"
        keyboardType="numeric" // Exibe teclado numérico
      />

      {/* Campo para código */}
      <Text style={styles.label}>Código:</Text>
      <TextInput
        style={styles.input}
        value={codigo}
        onChangeText={setCodigo}
        placeholder="Digite o código(Ex:001)"
      />

      {/* Botão para salvar a peça */}
      <Button title="Salvar Peça" onPress={salvarPeca} />
    </View>
  );
}
