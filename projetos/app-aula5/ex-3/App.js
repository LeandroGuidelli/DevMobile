import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, SectionList, StyleSheet } from 'react-native';

const App = () => {
  // Estado para armazenar o texto digitado pelo usuário
  const [text, setText] = useState('');
  
  // Estado para armazenar a lista de itens
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
  ]);

  // Lista de seções para a SectionList
  const sections = [
    {
      title: 'Seção 1',
      data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }],
    },
    {
      title: 'Seção 2',
      data: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }],
    },
  ];

  // Função chamada ao pressionar o botão
  const handlePress = () => {
    if (text.trim() === '') return; // Evita adicionar itens vazios
    setItems([...items, { id: items.length + 1, name: text }]); // Adiciona um novo item
    setText(''); // Limpa o campo após adicionar
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Texto de exemplo</Text>
        
        {/* Exibição de imagem com uma URL externa */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />
        
        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.TextInput}
          placeholder="Digite algo"
          onChangeText={setText}
          value={text}
        />
        
        {/* Botão para adicionar itens */}
        <Button title="Clique aqui" onPress={handlePress} />
      </View>
      
      {/* Lista simples de itens */}
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      
      {/* Lista com seções agrupadas */}
      <SectionList
        sections={sections}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Adiciona espaço ao redor do conteúdo para melhor espaçamento
  },
  view: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
