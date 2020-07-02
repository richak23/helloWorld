import React from 'react';
import  {View, Text, StyleSheet,} from 'react-native';

export default function App(){

  return (
    <View style={styles.container}>
      <Text style={styles.myText} >hello world</Text>
    </View>
  )

}

const styles= StyleSheet.create({
  container: {
    flex: 1, justifyContent:'center', alignItems:'center'
  },

  myText: {
    fontSize: 30, color:'blue'
  }
})