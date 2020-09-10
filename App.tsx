import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import { AppLoading } from 'expo';

import { Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light, Poppins_200ExtraLight, useFonts }  from '@expo-google-fonts/poppins';
import AppStack from './src/routes/AppStack';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_200ExtraLight
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }else{
    return (
        <>
        <AppStack />
        <StatusBar style="light" />
        </>
    );
  
  }
 }
