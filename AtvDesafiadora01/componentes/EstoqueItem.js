import React from 'react';
import styles from '../estilos/estoqueItemStyles'; // Importa os estilos específicos do item de estoque
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Componente responsável por exibir cada item do estoque na lista
export default function EstoqueItem({ item, navigation }) {
  return (
    // TouchableOpacity permite que o item seja clicável (efeito de botão)
    <TouchableOpacity
      style={styles.card} // Estilo visual do cartão do item
      onPress={() => navigation.navigate('EditarPeca', { peca: item })} // Ao clicar, vai para tela de edição passando os dados da peça
    >
      {/* Nome da peça */}
      <Text style={styles.nome}>{item.nome}</Text>
      
      {/* Código da peça */}
      <Text style={styles.info}>Código: {item.codigo}</Text>
      
      {/* Quantidade disponível da peça */}
      <Text style={styles.info}>Quantidade: {item.quantidade}</Text>
    </TouchableOpacity>
  );
}
