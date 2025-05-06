import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';

import styles from './styles';

export default () => (
  <View style={styles.container}>
    <StatusBar style="dark" />
    <MapView
      style={styles.mapView}
      showsUserLocation={true}
      followsUserLocation={true}
    />
  </View>
);
