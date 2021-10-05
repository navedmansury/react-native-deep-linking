import React from 'react';

import {Text, View, Button} from 'react-native';

const Home = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home screen</Text>
      <Button title="Go to Add" onPress={() => navigation.navigate('Add')} />
    </View>
  );
};

export default Home;
