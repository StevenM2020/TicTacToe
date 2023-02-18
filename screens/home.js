//script:  home screen
//author:  Steven Motz
//date:    2/14/2023
//purpose:  This is the home screen for the tic tac toe game.  It has three buttons that navigate to the 2 player, 1 player, and 1 player difficult screens.
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../styles';

export default function HomeScreen({ navigation }) {

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Tic Tac Toe</Text>
        <Text>By Steven Motz</Text>
        <View style={styles.buttonContainer}>
          <Button title='2 Player' onPress={() => navigation.navigate('2Player')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title='1 Player Easy' onPress={() => navigation.navigate('1Player')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title='1 Player Difficult' onPress={() => navigation.navigate('1PlayerDifficult')} />
        </View>
      </View>
    );
  }
  