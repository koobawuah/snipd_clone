import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { Root, PodStack } from './src/navigation'

export default function App() {
  
  const customTheme = {
    ...DarkTheme,
    //dark: false,
    colors: {
      ...DarkTheme.colors,
      primary: 'rgb(17, 232, 166)',
      background: 'rgb(8, 8, 17)',
      card: 'rgb(8, 8, 17)',
    }
  }
  return (
    <View style={{flex:1}}>
      <NavigationContainer theme={customTheme}>
        <Root />
      </NavigationContainer>
    </View>
  );
}