import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>News</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'darkblue',
        height: 60,
        padding: 15
    },
    title: {
        color:'#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})


export default Header;