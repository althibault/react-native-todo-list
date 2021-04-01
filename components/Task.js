import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = ( {text}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
      justifyContent:"space-between",
      flexDirection:"row",
      alignItems:"center",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor:'white',
    margin:10,
    padding:20,
    borderRadius:10,
    width:325
  },
  square: {
    height:20,
    width:20,
    marginRight:20,
    backgroundColor:"#8C82FF",
    borderRadius:2,
    zIndex:99,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
      borderColor:'#2F69FF',
      borderWidth:1,
      height:10,
      width:10,
      borderRadius:10,
  },
});


export default Task;
