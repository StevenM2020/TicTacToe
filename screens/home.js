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
          <Button title='1 Player' onPress={() => navigation.navigate('1Player')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title='2 Player' onPress={() => navigation.navigate('2Player')} />
        </View>
      </View>
    );
  }
  