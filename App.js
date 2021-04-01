import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View,KeyboardAvoidingView, TouchableOpacity, Keyboard} from 'react-native';
import Task from './components/Task';


export default function App() {
  const [value,setValue] = useState("");
  const [tasks,setTasks] = useState([
    {text : "Work out 30 minutes"},
    {text : "Ace the react native test"},
    {text : "Chill out"}

  ]);

  const addTask = () =>{
     setTasks([...tasks,{text: value}]);
     setValue("");
  };

  return (
    <View style={styles.container}>   
    <KeyboardAvoidingView>
      <Text style={styles.titre}>Todo today</Text>
      <View style={styles.tasksSection}>       
        {
          tasks.map((tasks,i)=>(
             <Task key={i} text={tasks.text}></Task>
          ))
        }
      </View>
      <View style={{flexDirection: "row"}}>
      <TextInput style={styles.input} placeholder="Add task" value={value} onChange={(text) => setValue(text)}></TextInput>
      <TouchableOpacity onPress={() => addTask()}>
        <View>
          <Text  style={styles.btnAdd}>
            +
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C82FF',
  },
  titre :{
    fontSize: 24,
    fontWeight : 'bold',
    marginTop:100,
    marginBottom:-50,
    color:'white',
    marginLeft:20,
  }, 
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  input: {
    height: 25,
    width:300,
    backgroundColor:'#ffff',
    borderRadius:5,
    marginLeft:30,
    textAlign:'center',
    marginRight:20
  },
  btnAdd:{
     color:'#8C82FF',
     backgroundColor:'#ffff',
     width: 30,
     height:30,
     textAlign:'center',
     borderRadius: 30,
     fontSize:20
  }
});
