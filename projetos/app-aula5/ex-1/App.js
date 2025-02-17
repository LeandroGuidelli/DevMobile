import React, { useState } from 'react';  // Gerencia estado do componente
import { 
  View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, StyleSheet 
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');  // Estado para entrada de texto
  const [items, setItems] = useState([
    { id: '1', name: 'item 1' },
    { id: '2', name: 'item 2' },
    { id: '3', name: 'item 3' },
  ]);

  const handlePress = () => {
    alert('Botão pressionado');  // Alerta ao pressionar botão
  };

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), name: text }]);  // Adiciona item à lista
    setText('');  // Limpa entrada
  };

  return (
    <ScrollView style={styles.container}>  
      <View style={styles.header}>
        <Text style={styles.title}>Exemplo de App React Native</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={text}
        onChangeText={setText}
      />

      <Button title="Adicionar Item" onPress={addItem} />

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ocupa toda a tela
    padding: 20,  // Espaçamento geral
  },
  header: {
    alignItems: 'center',  // Centraliza elementos
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: 'white',  // Estilo de item da lista
    padding: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',  // Estilo do botão
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
