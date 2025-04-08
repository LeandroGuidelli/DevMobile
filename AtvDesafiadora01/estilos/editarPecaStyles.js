import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    padding: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
    color: '#555',
  },
  input: {
    height: 48,
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
});
