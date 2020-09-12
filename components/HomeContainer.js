import React from 'react';
import {View, Text, Button} from 'react-native';

export const HomeContainer = (props) => {
  return (
    <View>
      <Text>Home Container </Text>
      <Button
        title="Go to Large Image"
        onPress={() => props.navigation.navigate('LargeImg', {})}
      />
    </View>
  );
};
