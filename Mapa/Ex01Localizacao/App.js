import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import * as Location from "expo-location";

import styles from "./Styles";

const API_KEY = ""

const URL = `https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;


export default function WhereAmI() {

  const [address, setAddress] = useState("Loading...");

  const [latitude, setLatitude] = useState();

  const [longitude, setLongitude] = useState();

  useEffect(() => {
    function setPosition({
      coords: { latitude, longitude },
    }) {
      setLatitude(latitude);
      setLongitude(longitude);
    
      fetch(`${URL}${latitude},${longitude}`)
        .then((resp) => resp.json())
        .then(({ results }) => {
          if (results.length > 0) {
            setAddress(results[0].formatted_address);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
      let watcher;

      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          return;
        }

        let location = await Location.getCurrentPositionAsync({});

        setPosition(location);

        watcher = await Location.watchPositionAsync(
          { accuracy: Location.LocationAccuracy.Highest },
          setPosition
        );
      })();

    return () => {
      watcher?.remove();
    };
  }, []);

  return (
    <View style={styles.container}> 
      <Text style={styles.label}>Address: {address}</Text>
      <Text style={styles.label}>Latitude: {latitude}</Text>
      <Text style={styles.label}>Longitude: {longitude}</Text>
    </View>
  );
}