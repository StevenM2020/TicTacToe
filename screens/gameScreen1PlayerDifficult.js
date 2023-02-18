//script:  game screen 1 player
//author:  Steven Motz
//date:    2/14/2023
//purpose:  This is the game screen where a single player plays against the computer using the minimax algorithm.
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../styles';
import { win, images} from '../constants';



export default function GameScreen1PlayerDifficult() {
  const [board, setBoard] = useState([
    {key : 0, value : 'X', picture : 1},
    {key : 1, value : '', picture : 0},
    {key : 2, value : '', picture : 0},
    {key : 3, value : '', picture : 0},
    {key : 4, value : '', picture : 0},
    {key : 5, value : '', picture : 0},
    {key : 6, value : '', picture : 0},
    {key : 7, value : '', picture : 0},
    {key : 8, value : '', picture : 0}
  ]);

  const [player1Turn, setTurn] = useState(false);
  const [gameWinner, setWinner] = useState('');
  const [subText, setSubText] = useState('Player 1 turn');


const pressPlayerHandler = (key) => {
if(gameWinner == ''){
  if(board[key].picture == 0){
    board[key].picture = Math.floor(Math.random() * 3) + 4;
    board[key].value = 'O';
  }
}
checkGame();
if(gameWinner == ''){
  aiMove();
}
setBoard([...board]);
}


function checkGame(){
  let winner = '';
  for(let i = 0; i < win.length; i++){
    let xWins = 0;
    let oWins = 0;
    for(let j = 0; j < win[i].length; j++){
      if(board[win[i][j]].value == 'X'){
        xWins++;
      }
      if(board[win[i][j]].value == 'O'){
        oWins++;
      }
  }


  winner = winner == ''? (xWins == 3 ? 'X' : oWins == 3 ? 'O' : '') : winner;
  xWins = 0;
  oWins = 0;
  }
  setSubText(winner == 'X' ? 'You Lost' : winner == 'O' ? '🎉You win🎉' : !player1Turn ? 'AI turn' : 'Your turn');
  setWinner(winner);
}
const resetHandler = () => {
  setBoard([
    {key : 0, value : 'X', picture : 1},
    {key : 1, value : '', picture : 0},
    {key : 2, value : '', picture : 0},
    {key : 3, value : '', picture : 0},
    {key : 4, value : '', picture : 0},
    {key : 5, value : '', picture : 0},
    {key : 6, value : '', picture : 0},
    {key : 7, value : '', picture : 0},
    {key : 8, value : '', picture : 0}
  ]);
  setWinner('');
  setSubText('Player 1 turn');
}

function aiMove(){
  if(gameWinner == ''){
  console.log("ai move");
  let moves = [];
  for(let i = 0; i < board.length; i++){
    if(board[i].value == ''){
      let boardCopy =[];
      for(let j = 0; j < board.length; j++){
        boardCopy.push({key : j, value : board[j].value, picture : board[j].picture});
      }

      boardCopy[i].value = 'X';
      moves.push({key:board[i].key, score: minimax(boardCopy, 0, true)});
    }
  }
    moves.forEach(move => {
      console.log(move.key + " " + move.score);
    });
    let bestMove = Array.from(moves).sort((a, b) => b.score - a.score)[0];
    //press2PlayerHandler(bestMove.key);
    board[bestMove.key].value = 'X';
    board[bestMove.key].picture = Math.floor(Math.random() * 3) + 1;
    console.log(bestMove);
    console.log(board);
  }
}
function minimax(newBoard, score, turn){
  let winner = '';
  for(let i = 0; i < win.length; i++){
    let xWins = 0;
    let oWins = 0;
    for(let j = 0; j < win[i].length; j++){
      if(newBoard[win[i][j]].value == 'X'){
        xWins++;
      }
      if(newBoard[win[i][j]].value == 'O'){
        oWins++;
      }
  }


  winner = winner == ''? (xWins == 3 ? 'X' : oWins == 3 ? 'O' : '') : winner;
  xWins = 0;
  oWins = 0;
  }

  if(winner == 'X'){
    return 1;
  }else if(winner == 'O'){
    return -1;
  }
  // check if the board is full
  let full = true;
  for(let i = 0; i < newBoard.length; i++){
    if(newBoard[i].value == ''){
      full = false;
    }
  }
  if(full){
  return 0;
  }
  
  for(let i = 0; i < newBoard.length; i++){
    if(newBoard[i].value == ''){
      let boardCopy = newBoard;
      boardCopy[i].value = turn ? 'X' : 'O';
      score += minimax(boardCopy, score, !turn);
    }
  }
  return score;

  
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
        <TouchableOpacity onPress={() => pressPlayerHandler(item.key)}>
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
