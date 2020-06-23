import React from 'react';
import {View} from 'react-native';

import Header from './src/components/Header'
import NewsContainer from './src/containers/NewsContainer'
const App = () => {
  
  return (
    <View> 
      <Header />     
      <NewsContainer />
    </View>
  )
}

export default App;
