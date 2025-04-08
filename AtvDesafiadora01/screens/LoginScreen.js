import React, { useState } from 'react';
import styles from '../estilos/loginStyles'; // Importa os estilos definidos separadamente
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

// Componente de Login
export default function LoginScreen({ navigation }) {
  // Estados locais para armazenar os valores digitados no login e senha
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  // Função de autenticação (simples, apenas para teste ou protótipo)
  const autenticar = () => {
    // Verifica se usuário e senha correspondem aos valores fixos
    if (usuario === 'admin' && senha === '1234') {
      navigation.navigate('Estoque'); // Se válido, navega para a tela de Estoque
    } else {
      // Se inválido, mostra um alerta de erro
      Alert.alert('Erro', 'Usuário ou senha inválidos!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.titulo}>Login</Text>

      {/* Campo de entrada para o nome de usuário */}
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      {/* Campo de entrada para a senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry // Oculta os caracteres enquanto digita
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão que chama a função de autenticação */}
      <Button title="Entrar" onPress={autenticar} />

      {/* Link clicável para recuperar a senha */}
      <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
}
