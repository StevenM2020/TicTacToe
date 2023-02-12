import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#005ab3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      marginTop: 20
    },
    titleText: {
      fontSize: 30,
      fontWeight: "bold"
    },
    otherText: { 
      fontSize: 20,
      fontWeight: "bold"
    },
    square: {
      width: 100,
      height: 100,
    },
    board:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 2,
      marginTop: 20,
    },
    gameText: {
      fontSize: 20,
      marginTop: 20,
      marginBottom: 20,
      flex: 1,
    },
    gameTop: {
      flex: 1,
    }
  });