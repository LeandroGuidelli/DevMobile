import React, { useState } from 'react';
import styles from '../estilos/recuperarSenhaStyles'; // Importa o arquivo de estilos da tela
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Componente da tela de Recuperação de Senha
export default function RecuperarSenhaScreen({ navigation }) {
  // Estado para armazenar o nome do usuário digitado
  const [usuario, setUsuario] = useState('');
  // Estado para armazenar a nova senha gerada
  const [novaSenha, setNovaSenha] = useState('');

  // Função que simula a recuperação de senha
  const recuperarSenha = () => {
    const senhaGerada = 'nova1234'; // Senha gerada automaticamente (simulação)
    setNovaSenha(senhaGerada); // Atualiza o estado com a nova senha
  };

  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.titulo}>Recuperar Senha</Text>

      {/* Campo de entrada para o nome do usuário */}
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      {/* Botão que dispara a simulação de recuperação de senha */}
      <View style={styles.botao}>
        <Button title="Recuperar Senha" onPress={recuperarSenha} />
      </View>

      {/* Exibe a nova senha gerada, caso exista */}
      {novaSenha !== '' && (
        <Text style={styles.resultado}>
          Sua nova senha é: <Text style={{ fontWeight: 'bold' }}>{novaSenha}</Text>
        </Text>
      )}

      {/* Botão para voltar à tela de login */}
      <View style={[styles.botao, styles.botaoSecundario]}>
        <Button title="Voltar para o Login" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
