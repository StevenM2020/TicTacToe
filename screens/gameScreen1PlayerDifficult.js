//script:  game screen 1 player
//author:  Hunter Hockman
//date:    2/14/2023
//purpose:  This is the game screen where a single player plays against the difficult computer using a hardcoded tictactoe algorithm.
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from "../styles";
import { win, images } from "../constants";

export default function GameScreen1DifficultPlayer() {
  const [board, setBoard] = useState([
    { key: 0, value: "X", picture: 1 },
    { key: 1, value: "", picture: 0 },
    { key: 2, value: "", picture: 0 },
    { key: 3, value: "", picture: 0 },
    { key: 4, value: "", picture: 0 },
    { key: 5, value: "", picture: 0 },
    { key: 6, value: "", picture: 0 },
    { key: 7, value: "", picture: 0 },
    { key: 8, value: "", picture: 0 },
  ]);

  const [player1Turn, setTurn] = useState(true);
  const [gameWinner, setWinner] = useState("");
  const [subText, setSubText] = useState("Player 1 turn");

  // called when the player presses a square
  const pressPlayerHandler = (key) => {
    if (gameWinner == "") {
      // if there is no winner
      if (board[key].picture == 0) {
        board[key].picture = Math.floor(Math.random() * 3) + 4;
        board[key].value = "O";

        checkDifficultGame();
        // if there is no winner, the ai will make a move
        if (gameWinner == "") {
          aiMove();
        }
        setBoard([...board]);
      }
    }
  };

  // this function will check if there is a winner
  function checkDifficultGame() {
    let winner = "";
    for (let i = 0; i < win.length; i++) {
      let xWins = 0;
      let oWins = 0;
      for (let j = 0; j < win[i].length; j++) {
        if (board[win[i][j]].value == "X") {
          xWins++;
        }
        if (board[win[i][j]].value == "O") {
          oWins++;
        }
      }

      // if there is a winner, the winner will be set to the winner
      winner =
        winner == "" ? (xWins == 3 ? "X" : oWins == 3 ? "O" : "") : winner;
      xWins = 0;
      oWins = 0;
    }

    // check if all the buttons have been pressed
    let spotsFilled = 0;
    board.forEach((item) => {
      if (item.picture != 0) {
        spotsFilled++;
      }
    });

    setSubText(
      winner == "X"
        ? "🎉Player 1 wins🎉"
        : winner == "O"
        ? "🎉Player 2 wins🎉"
        : !player1Turn
        ? "Player 1 turn"
        : "Player 2 turn"
    );
    if (spotsFilled == 9 && winner == "") {
      winner = "tie";
      setSubText("Tie Game");
    }
    setWinner(winner);
  }
  const resetHandler = () => {
    setBoard([
      { key: 0, value: "X", picture: 1 },
      { key: 1, value: "", picture: 0 },
      { key: 2, value: "", picture: 0 },
      { key: 3, value: "", picture: 0 },
      { key: 4, value: "", picture: 0 },
      { key: 5, value: "", picture: 0 },
      { key: 6, value: "", picture: 0 },
      { key: 7, value: "", picture: 0 },
      { key: 8, value: "", picture: 0 },
    ]);
    setWinner("");
    setSubText("Player 1 turn");
  };

  // this function will make the ai move
  function aiMove() {
    if (gameWinner == "") {
      console.log("ai move");
      let moves = [];
      // for each empty square, the ai will make a move and check the score
      for (let i = 0; i < board.length; i++) {
        if (board[i].value == "") {
          let boardCopy = [];
          for (let j = 0; j < board.length; j++) {
            boardCopy.push({
              key: j,
              value: board[j].value,
              picture: board[j].picture,
            });
          }

          boardCopy[i].value = "X";
          moves.push({ key: board[i].key });
        }
      }

      let length = moves.length;

      switch (moves.length > 0) {
        //these cases are used to make sure the ai blocks any attempts for the player to win
        case board[3].value == "O" && board[5].value == "O" && board[4].value == '':
          board[4].value = "X";
          board[4].picture = 2;
          break;

        case board[3].value == "O" && board[4].value == "O" && board[5].value == '':
          board[5].value = "X";
          board[5].picture = 2;
          break;

        case board[5].value == "O" && board[4].value == "O" && board[3].value == '':
          board[3].value = "X";
          board[3].picture = 2;
          break;

        case board[2].value == "O" && board[4].value == "O" && board[6].value == '':
          board[6].value = "X";
          board[6].picture = 2;
          break;

        case board[2].value == "O" && board[6].value == "O" && board[4].value == '':
          board[4].value = "X";
          board[4].picture = 2;
          break;

        case board[4].value == "O" && board[6].value == "O" && board[2].value == '':
          board[2].value = "X";
          board[2].picture = 2;
          break;

        case board[1].value == "O" && board[4].value == "O" && board[7].value == '':
          board[7].value = "X";
          board[7].picture = 2;
          break;

        case board[1].value == "O" && board[7].value == "O" && board[4].value == '':
          board[4].value = "X";
          board[4].picture = 2;
          break;

        case board[7].value == "O" && board[4].value == "O" && board[1].value == '':
          board[1].value = "X";
          board[1].picture = 2;
          break;

        //the following cases are to check if the ai can win with the optimal TicTacToe algorithm
        case board[0].value == "X" &&
          board[2].value == "X" &&
          board[1].value == "":
          board[1].value = "X";
          board[1].picture = 2;
          break;

        case board[2].value == "X" &&
          board[8].value == "X" &&
          board[5].value == "":
          board[5].value = "X";
          board[5].picture = 2;
          break;

        case board[0].value == "X" &&
          board[6].value == "X" &&
          board[3].value == "":
          board[3].value = "X";
          board[3].picture = 2;
          break;

        case board[6].value == "X" &&
          board[8].value == "X" &&
          board[7].value == "":
          board[7].value = "X";
          board[7].picture = 2;
          break;

        //The remaining cases are used to have the ai setup the tictactoe board in a way that it can either force a draw or win
        case moves[length - 1].key == 8 && board[8].value == "" && board[8].value == '':
          board[8].value = "X";
          board[8].picture = 2;
          break;

        case moves[length - 2].key == 6 && board[6].value == "" && board[6].value == '':
          board[6].value = "X";
          board[6].picture = 2;
          break;

        case moves[length - (length - 1)].key == 2 && board[2].value == "" && board[2].value == '':
          board[2].value = "X";
          board[2].picture = 2;
          break;

        case moves[length - 2].key == 3 && board[3].value == "" && board[3].value == '':
          board[3].value = "X";
          board[3].picture = 2;
          break;

        case moves[length - 1].key == 7 && board[7].value == "" && board[7].value == '':
          board[7].value = "X";
          board[7].picture = 2;
          break;

        default:
          console.log("No Works");
          break;
      }

      for (let i = 0; i < board.length; i++) {
        console.log(board[i]);
      }
    }
    checkDifficultGame();
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.gameTop}></View>
      <Text style={styles.gameTitle}>Tic Tac Toe</Text>
      <Text style={styles.gameText}>{subText}</Text>
      <View style={styles.board}>
        <FlatList
          numColumns={3}
          keyExtractor={(item) => item.key}
          data={board}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressPlayerHandler(item.key)}>
              <Image source={images[item.picture]} style={styles.square} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.gameButtonContainer}>
        <Button title="Reset" onPress={resetHandler} />
      </View>
    </View>
  );
}
