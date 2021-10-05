import React from 'react';

import {Text, View, Button} from 'react-native';

const Setting = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings screen</Text>
      <Button title="Go to Edit" onPress={() => navigation.navigate('Edit')} />
    </View>
  );
};

export default Setting;
