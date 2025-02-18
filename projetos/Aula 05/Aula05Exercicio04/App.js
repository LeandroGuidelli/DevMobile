import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const SECTIONS = [
  {
    title: 'Seção 1',
    data: [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' },
    ],
  },
  {
    title: 'Seção 2',
    data: [
      { id: '3', name: 'Item 3' },
      { id: '4', name: 'Item 4' },
    ],
  },
];

const ListItem = ({ name }) => <Text style={styles.listItem}>{name}</Text>;

const App = () => {
  const [text, setText] = useState(''); // Gerencia o texto digitado
  const [isLoading, setIsLoading] = useState(false); // Gerencia o estado de carregamento
  const [data, setData] = useState([ // Lista de dados inicial
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  // Função chamada quando o botão é pressionado
  const handlePress = () => {
    if (text.trim() === '') return; // Impede a adição de texto vazio
    const newItem = { id: String(data.length + 1), name: text }; // Cria um novo item com o texto
    setData([...data, newItem]); // Atualiza a lista de dados com o novo item
    setText(''); // Limpa o campo de texto
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Olá, mundo!</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Digite algo"
          value={text}
          onChangeText={setText} // Atualiza o estado de 'text' com o que foi digitado
        />
        <Button title="Clique aqui" onPress={handlePress} /> {/* Botão que aciona o handlePress */}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Toque aqui</Text>
        </TouchableOpacity>
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />} {/* Indicador de carregamento */}
      </View>

      <FlatList
        data={data} // Exibe os itens na lista
        renderItem={({ item }) => <ListItem name={item.name} />} // Renderiza cada item da lista
        keyExtractor={(item) => item.id} // Define a chave única para cada item
      />

      <SectionList
        sections={SECTIONS} // Exibe seções
        renderItem={({ item }) => <ListItem name={item.name} />} // Renderiza itens dentro das seções
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text> // Renderiza o título de cada seção
        )}
        keyExtractor={(item) => item.id} // Define a chave única para cada item dentro das seções
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  view: {
    marginBottom: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#555',
  },
});

export default App;
