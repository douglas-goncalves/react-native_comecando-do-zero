// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, } from '@expo-google-fonts/montserrat';
import AppLoading from "expo-app-loading";

import Cesta from './src/telas/cesta';
import mockCesta from './src/mocks/cesta'
export default function App() {

  const [fontsLoaded] = useFonts({
    "MonteserratRegular": Montserrat_400Regular,
    "MonteserratBold": Montserrat_700Bold
  })

  if (!fontsLoaded) {
    return AppLoading;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mockCesta}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
