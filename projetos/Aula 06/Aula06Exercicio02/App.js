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

const App = () => {
  // Estado para armazenar o texto digitado pelo usuário
  const [text, setText] = useState('');
  // Estado para controlar a exibição do indicador de carregamento
  const [isLoading, setIsLoading] = useState(false);

  // Dados para a FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para a SectionList, divididos em seções
  const sections = [
    {
      title: 'Section 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }] },
  ];

  // Função chamada ao pressionar o botão
  const handleButtonPress = () => {
    setIsLoading(true); // Ativa o indicador de carregamento
    setTimeout(() => {
      setIsLoading(false); // Desativa o indicador após 2 segundos
      alert('Button Pressed'); // Exibe um alerta
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        {/* Exibe uma imagem */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />
        
        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter text"
          value={text}
          onChangeText={setText}
        />
        
        {/* Botão que chama a função handleButtonPress ao ser pressionado */}
        <Button title="Press Me" onPress={handleButtonPress} />
        
        {/* Botão customizado usando TouchableOpacity */}
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.touchableOpacityText}>Touch Me</Text>
        </TouchableOpacity>
        
        {/* Indicador de carregamento */}
        <ActivityIndicator animating={isLoading} />

        {/* Lista de itens utilizando FlatList */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />

        {/* Lista seccionada utilizando SectionList */}
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  touchableOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  touchableOpacityText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
