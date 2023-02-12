import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
//import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {


  return (
    <NavigationContainer>{
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="2Player" component={GameScreen2Player} />
      <Stack.Screen name="1Player" component={GameScreen1Player} />
    </Stack.Navigator>
    }</NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
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


let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


function GameScreen2Player() {
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

  let winner = '1';
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


  winner = xWins == 3 ? 'X' : oWins == 3 ? 'O' : '1';
  xWins = 0;
  oWins = 0;
  console.log("winner"+winner);
  }
  //console.log("winner"+winner);
  setBoard([...board]);
}
}


  return (
  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.gameTop}></View>
      <Text>Game Screen</Text>
      <Text>2 player</Text>
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
    </View>


  );
}
function GameScreen1Player() {
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


const images = { 
  0: require('./assets/Square.png'),
  1: require('./assets/X1.png'),
  2: require('./assets/X2.png'),
  3: require('./assets/X3.png'),
  4: require('./assets/O1.png'),
  5: require('./assets/O2.png'),
  6: require('./assets/O3.png')
}

const styles = StyleSheet.create({
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