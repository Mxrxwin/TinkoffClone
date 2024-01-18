import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

    const loadFonts = async () => {
      await Font.loadAsync({
        tbold: require("./assets/fonts/TinkoffSansBold.ttf"),
        tmedium: require("./assets/fonts/TinkoffSansMedium.ttf"),
        tregular: require("./assets/fonts/TinkoffSansRegular.ttf")
      });
    };

    useEffect(() => {
      const loadFontAsync = async () => {
        await loadFonts();
        setFontLoaded(true);
      };
  
      loadFontAsync();
    }, []);
  
    if (!fontLoaded) {
      return null; 
    }
  

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'tregular', color: 'white'}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
