import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../styles';
import images from '../constants';
import win from '../constants';


export default function GameScreen1Player() {
    const [board, setBoard] = useState([
      {key : 0, value : '', picture : 0},
      {key : 1, value : '', picture : 0},
      {key : 2, value : '', picture : 0},
      {key : 3, value : '', picture : 0},
      {key : 4, value : '', picture : 0},
      {key : 5, value : '', picture : 0},
      {key : 6, value : '', picture : 0},
      {key : 7, value : '', picture : 0},
      {key : 8, value : '', picture : 0}
    ]);
  
  
  
  
  
  
    return (
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.gameText}>
        <Text>Game Screen</Text>
        <Text>1 player</Text>
        </View>
        {board.map((item) => {
        return (
          <View Key={item.key} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Image source={images[item.picture]} style={styles.square} />
          </View>
        )
      })}
      </View>
  
  
    );
  }

