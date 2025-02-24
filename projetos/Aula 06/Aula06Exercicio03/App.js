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
  Switch,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const App = () => {
  // Definição dos estados
  const [text, setText] = useState(''); // Estado para armazenar o texto do TextInput
  const [isLoading, setIsLoading] = useState(false); // Estado para exibir o ActivityIndicator
  const [sliderValue, setSliderValue] = useState(0); // Estado para armazenar o valor do Slider
  const [switchValue, setSwitchValue] = useState(false); // Estado para armazenar o valor do Switch

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
      data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }],
    },
    {
      title: 'Section 2',
      data: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }],
    },
  ];

  // Função que simula um carregamento ao clicar no botão
  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Imagem de fundo */}
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/300' }}
        style={styles.imageBackground}
      >
        <Text style={styles.title}>Exemplo de Código React Native</Text>
      </ImageBackground>

      <View style={styles.content}>
        {/* Exibição de uma imagem */}
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />

        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.input}
          placeholder="Digite algo"
          value={text}
          onChangeText={setText}
        />

        {/* Botão com função de carregamento */}
        <Button title="Clique aqui" onPress={handlePress} />

        {/* Botão TouchableOpacity para interações personalizadas */}
        <TouchableOpacity style={styles.button} onPress={() => alert('TouchableOpacity pressionado!')}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>

        {/* Indicador de carregamento */}
        <ActivityIndicator animating={isLoading} />

        {/* Slider para selecionar valores numéricos */}
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={setSliderValue}
        />
        <Text>Valor do Slider: {sliderValue}</Text>

        {/* Switch (botão liga/desliga) */}
        <Switch value={switchValue} onValueChange={setSwitchValue} />
        <Text>Valor do Switch: {switchValue ? 'Ligado' : 'Desligado'}</Text>

        {/* Lista simples utilizando FlatList */}
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
          renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>}
        />
      </View>
    </ScrollView>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
