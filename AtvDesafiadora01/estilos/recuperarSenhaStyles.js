import { Button, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 45,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 12,
    borderRadius: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  senhaNova: {
    marginTop: 20,
    fontSize: 16,
    color: '#2e7d32',
    textAlign: 'center',
    backgroundColor: '#e8f5e9',
    padding: 10,
    borderRadius: 8,
  },
  botao: {
    marginTop: 10,
  },
  botaoSecundario: {
    marginTop: 20, // dá mais espaço entre os botões
  },  
});
