//script:  game screen 2 player
//author:  Steven Motz
//date:    2/14/2023
//purpose: This is the game screen where two players play against each other.
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

    // when the user presses a button, this function is called
  const press2PlayerHandler = (key) => {
  if(gameWinner == ''){ // no winner yet
    if(board[key].picture == 0){ // if the button has not been pressed yet
    if(player1Turn){ // if it is player 1's turn
      board[key].picture = Math.floor(Math.random() * 3) + 1;
      board[key].value = 'X';
      setTurn(false);
    }else{ // if its player 2's turn
      board[key].picture = Math.floor(Math.random() * 3) + 4;
      board[key].value = 'O';
      setTurn(true);
    }

  
    // check for a winner
    let winner = '';
    for(let i = 0; i < win.length; i++){
      let xWins = 0;
      let oWins = 0;
      // check each button in the winning combination
      for(let j = 0; j < win[i].length; j++){ 
        if(board[win[i][j]].value == 'X'){
          xWins++;
        }
        if(board[win[i][j]].value == 'O'){
          oWins++;
        }
    }
    // if there are 3 X's or 3 O's in a row, then there is a winner
    winner = winner == ''? (xWins == 3 ? 'X' : oWins == 3 ? 'O' : '') : winner;
    xWins = 0;
    oWins = 0;
    }

    // check if all the buttons have been pressed
    let spotsFilled = 0;
    board.forEach((item) => {
      if(item.picture != 0){
        spotsFilled++;
      }
    });

    setSubText(winner == 'X' ? '🎉Player 1 wins🎉' : winner == 'O' ? '🎉Player 2 wins🎉' : !player1Turn ? 'Player 1 turn' : 'Player 2 turn');
    if(spotsFilled == 9 && winner == ''){
      winner = 'tie';
      setSubText('Tie Game');
    }
    setWinner(winner);
    setBoard([...board]);
  }
  }
  }
  
  // reset the game
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
  