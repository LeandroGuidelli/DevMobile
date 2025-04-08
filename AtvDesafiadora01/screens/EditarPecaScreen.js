import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../estilos/editarPecaStyles'; // Importa o arquivo de estilos da tela de edição

// Componente da tela de edição de uma peça
export default function EditarPeca({ route, navigation }) {
  // Recebe os parâmetros da peça selecionada, vindos da tela anterior (Estoque)
  const { codigo, nome, quantidade } = route.params;

  // Cria estados para armazenar os novos valores editados
  const [novoCodigo, setNovoCodigo] = useState(codigo);
  const [novoNome, setNovoNome] = useState(nome);
  const [novaQuantidade, setNovaQuantidade] = useState(String(quantidade ?? ''));

  // Função executada ao clicar no botão de salvar
  const salvarAlteracao = () => {
    // Verifica se todos os campos foram preenchidos corretamente
    if (!novoCodigo || !novoNome || isNaN(parseInt(novaQuantidade))) {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    // Cria um novo objeto com os dados atualizados da peça
    const pecaAtualizada = {
      codigo: novoCodigo,
      nome: novoNome,
      quantidade: parseInt(novaQuantidade),
    };

    // Retorna para a tela de Estoque passando os dados atualizados
    navigation.navigate('Estoque', { pecaEditada: pecaAtualizada });
  };

  // Interface da tela de edição
  return (
    <View style={styles.container}>
      {/* Campo de texto para editar o nome da peça */}
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={novoNome}
        onChangeText={setNovoNome} // Atualiza o estado conforme o usuário digita
      />

      {/* Campo de texto para editar o código da peça */}
      <Text style={styles.label}>Código:</Text>
      <TextInput
        style={styles.input}
        value={novoCodigo}
        onChangeText={setNovoCodigo}
      />

      {/* Campo de texto para editar a quantidade */}
      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        value={novaQuantidade}
        onChangeText={setNovaQuantidade}
        keyboardType="numeric" // Mostra teclado numérico no celular
      />

      {/* Botão para salvar as alterações feitas */}
      <Button title="Salvar Alteração" onPress={salvarAlteracao} />
    </View>
  );
}
