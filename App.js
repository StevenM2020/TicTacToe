import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './screens/home';
import GameScreen1Player from './screens/gameScreen1Player';
import GameScreen2Player from './screens/gameScreen2Player';
import styles from './styles';

export default function App() {


  return (
    <NavigationContainer>{
      <Stack.Navigator>
      <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="2Player" component={GameScreen2Player} />
      <Stack.Screen name="1Player" component={GameScreen1Player} />
    </Stack.Navigator>
    }</NavigationContainer>
  );
}

const Stack = createNativeStackNavigator(); 