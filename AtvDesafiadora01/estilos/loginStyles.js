import { Button, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#f9f9f9',
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  link: {
    marginTop: 15,
    color: '#1e90ff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
  erro: {
    color: '#ff4d4d',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 14,
  },
  Button: {
    color: '#6f42c1'
  }
});
