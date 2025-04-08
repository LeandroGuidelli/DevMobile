import React, { useState, useCallback } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Hook para executar algo sempre que a tela é focada
import EstoqueItem from '../componentes/EstoqueItem'; // Componente que renderiza cada item do estoque
import styles from '../estilos/estoqueStyles'; // Estilos da tela
import { estoqueGlobal } from '../data/dadosEstoque'; // Dados globais do estoque, simulando um banco em memória

// Componente principal da tela de estoque
export default function EstoqueScreen({ navigation, route }) {
  // Estado local que representa a lista de peças em estoque
  const [estoque, setEstoque] = useState(estoqueGlobal);

  // Hook que executa quando a tela volta a ficar em foco
  useFocusEffect(
    useCallback(() => {
      // Verifica se uma nova peça foi adicionada pela tela "AdicionarPeca"
      if (route.params?.novaPeca) {
        // Evita duplicatas verificando se o código já existe
        const jaExiste = estoqueGlobal.some(p => p.codigo === route.params.novaPeca.codigo);
        if (!jaExiste) {
          estoqueGlobal.push(route.params.novaPeca); // Adiciona nova peça ao estoque global
        }
        setEstoque([...estoqueGlobal]); // Atualiza o estado para refletir a mudança na tela
        navigation.setParams({ novaPeca: null }); // Limpa o parâmetro para evitar reprocessamento
      }

      // Verifica se uma peça foi editada pela tela "EditarPeca"
      if (route.params?.pecaEditada) {
        const index = estoqueGlobal.findIndex(p => p.codigo === route.params.pecaEditada.codigo);
        if (index !== -1) {
          // Atualiza os dados da peça editada
          estoqueGlobal[index] = { ...route.params.pecaEditada };
          setEstoque([...estoqueGlobal]); // Atualiza o estado local com as alterações
        }
        navigation.setParams({ pecaEditada: null }); // Limpa o parâmetro
      }
    }, [route.params?.novaPeca, route.params?.pecaEditada]) // Roda de novo se esses parâmetros mudarem
  );

  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.titulo}>Estoque de Peças</Text>

      {/* Lista de peças no estoque */}
      <FlatList
        data={estoque} // Dados a serem renderizados
        keyExtractor={(item) => item.codigo} // Chave única para cada item
        renderItem={({ item }) => (
          <EstoqueItem item={item} navigation={navigation} />
        )} // Componente que renderiza cada item
      />

      {/* Botão para adicionar nova peça */}
      <Button
        title="Adicionar Peça"
        onPress={() => navigation.navigate('AdicionarPeca')} // Navega para a tela de adicionar
      />
    </View>
  );
}
