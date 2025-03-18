import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

class CadastrScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            endereco: '',
            cep: '',
            cidade: '',
            telefone: '',
        };
    }

    imprimirDados = () => {
        const { nome, endereco, cidade, cep, telefone } = this.state;
        const { username, password } = this.props; // Recebe usuário e senha via props
        Alert.alert(
            'Dados do Cadastro',
            `Usuário: ${username}\nSenha: ${password}\nNome: ${nome}\nEndereço: ${endereco}\nCidade: ${cidade}\nCEP: ${cep}\nTelefone: ${telefone}`,
            [{ text: 'OK' }]
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    onChangeText={nome => this.setState({ nome })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Endereço"
                    onChangeText={endereco => this.setState({ endereco })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    onChangeText={cidade => this.setState({ cidade })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="CEP"
                    onChangeText={cep => this.setState({ cep })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    onChangeText={telefone => this.setState({ telefone })}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Imprimir" onPress={this.imprimirDados} />
                    <Button title="Voltar" onPress={() => this.props.onVoltar()} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});

export default CadastrScreen;
