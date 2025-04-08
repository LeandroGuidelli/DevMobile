import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RecuperarSenhaScreen from '../screens/RecuperarSenhaScreen';
import EstoqueScreen from '../screens/EstoqueScreen';
import AdicionarPecaScreen from '../screens/AdicionarPecaScreen';
import EditarPecaScreen from '../screens/EditarPecaScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaScreen} />
        <Stack.Screen name="Estoque" component={EstoqueScreen} />
        <Stack.Screen name="AdicionarPeca" component={AdicionarPecaScreen} />
        <Stack.Screen name="EditarPeca" component={EditarPecaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
