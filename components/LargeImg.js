import React from 'react';
import {View, Image} from 'react-native';

export const LargeImg = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        style={{
          flex: 1,
          backgroundColor: '#000',
        }}
        source={{
          uri: props.route.params.imgUri,
        }}
      />
    </View>
  );
};
