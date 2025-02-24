import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
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
  StyleSheet
} from 'react-native';

const App = () => {
  // Definição dos estados
  const [text, setText] = useState(''); // Estado para armazenar o texto do TextInput
  const [imageWidth, setImageWidth] = useState(200); // Estado para armazenar a largura da imagem
  const [isLoading, setIsLoading] = useState(false); // Estado para exibir o ActivityIndicator
  const [sliderValue, setSliderValue] = useState(0); // Estado para armazenar o valor do Slider

  // Dados para a FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para a SectionList (divididos em seções)
  const sections = [
    {
      title: 'Section 1',
      data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]
    },
    {
      title: 'Section 2',
      data: [{ id: 3, name: 'Item 3' }]
    }
  ];

  // Função que simula um carregamento ao clicar no botão
  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Button pressed!'); // Exibe um alerta após 2 segundos
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        {/* Texto inicial */}
        <Text style={styles.text}>Hello React Native!</Text>

        {/* Imagem que pode ter sua largura aumentada */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={[styles.image, { width: imageWidth }]}
        />

        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter text"
          value={text}
          onChangeText={setText}
        />

        {/* Botão que simula um carregamento */}
        <Button title="Press me" onPress={handlePress} />

        {/* TouchableOpacity para aumentar a largura da imagem ao ser pressionado */}
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => setImageWidth(imageWidth + 50)}>
          <Text style={styles.touchableOpacityText}>Increase Image Width</Text>
        </TouchableOpacity>

        {/* Indicador de carregamento */}
        <ActivityIndicator size="large" color="#0000ff" animating={isLoading} />

        {/* Slider para selecionar valores numéricos */}
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={setSliderValue}
        />
        <Text>Slider Value: {sliderValue.toFixed(0)}</Text>
      </View>

      {/* Lista simples utilizando FlatList */}
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />

      {/* Lista seccionada utilizando SectionList */}
      <SectionList
        sections={sections}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>}
      />
    </ScrollView>
  );
};

// Estilos do aplicativo
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
    height: 200,
    resizeMode: 'contain',
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
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  touchableOpacityText: {
    textAlign: 'center',
    color: 'white',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
