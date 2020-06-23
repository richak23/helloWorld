import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const NewsScreen = (props) => {
  return (
    <FlatList
    contentContainerStyle={{paddingBottom: 65}}
      data={props.articles}
      renderItem={({ item, index }) => (
        <View style={styles.item} key={index}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
})

export default NewsScreen;