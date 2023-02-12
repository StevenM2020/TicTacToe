import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../styles';
import { win, images} from '../constants';

export default function GameScreen2Player() {
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
  
    const [player1Turn, setTurn] = useState(true);
    const [gameWinner, setWinner] = useState('');
    const [subText, setSubText] = useState('Player 1 turn');

  const press2PlayerHandler = (key) => {
  if(gameWinner == ''){
    if(board[key].picture == 0){
    if(player1Turn){
      board[key].picture = Math.floor(Math.random() * 3) + 1;
      board[key].value = 'X';
      setTurn(false);
    }else{
      board[key].picture = Math.floor(Math.random() * 3) + 4;
      board[key].value = 'O';
      setTurn(true);
    }
  //console.log("button:"+key+" changed to picture "+board[key].picture);
    }else{
      //console.log("button:"+key+" already changed to picture "+board[key].picture+"");
    }
  
    let winner = '';
    for(let i = 0; i < win.length; i++){
      let xWins = 0;
      let oWins = 0;
      for(let j = 0; j < win[i].length; j++){
        //console.log(board[win[i][j]].value);
        if(board[win[i][j]].value == 'X'){
          xWins++;
          //console.log(board[win[i][j]].value + "at "+win[i][j]+"");
        }
        if(board[win[i][j]].value == 'O'){
          oWins++;
          //console.log(board[win[i][j]].value + "at "+win[i][j]+"");
        }
    }
  
  
    winner = winner == ''? (xWins == 3 ? 'X' : oWins == 3 ? 'O' : '') : winner;
    xWins = 0;
    oWins = 0;
    //console.log("winner"+winner);
    }
    //console.log("winner"+winner);
    setSubText(winner == 'X' ? '🎉Player 1 wins🎉' : winner == 'O' ? '🎉Player 2 wins🎉' : !player1Turn ? 'Player 1 turn' : 'Player 2 turn');
    setWinner(winner);
    setBoard([...board]);
  }
  }
  

  const resetHandler = () => {
    setBoard([
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
    setTurn(true);
    setWinner('');
    setSubText('Player 1 turn');
  }
  
    return (
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.gameTop}></View>
        <Text style={styles.gameTitle}>Tic Tac Toe</Text>
        <Text style={styles.gameText}>{subText}</Text>
        <View style={styles.board}>
        <FlatList
        numColumns={3}
        keyExtractor={(item) => item.key}
        data={board}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => press2PlayerHandler(item.key)}>
          <Image source={images[item.picture]} style={styles.square} />
          </TouchableOpacity>
        )}
      />
      </View>
      <View style={styles.gameButtonContainer}>
          <Button title='Reset' onPress={resetHandler} />
        </View>
      </View>
  
  
    );
  }
  