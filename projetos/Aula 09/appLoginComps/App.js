import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './componentes/LoginScreen';
import CadastrScreen from './componentes/CadastrScreen';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false, username: '', password: '' };
    }

    handleLogin = (username, password) => {
        this.setState({ loggedIn: true, username, password });
    };

    handleVoltar = () => {
        this.setState({ loggedIn: false, username: '', password: '' });
    };

    render() {
        return (
            <View style={styles.container}>
                {this.state.loggedIn ? (
                    <CadastrScreen
                        onVoltar={this.handleVoltar}
                        username={this.state.username}
                        password={this.state.password}
                    />
                ) : (
                    <LoginScreen onLogin={this.handleLogin} />
                )}
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
});
