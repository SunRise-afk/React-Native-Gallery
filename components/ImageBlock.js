import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ImageBlock = (props) => {
  return (
    <View>
      {props.imgData.urls.small && (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('LargeImg', {
                  imgUri: props.imgData.urls.regular,
                  imgWidth: props.imgData.width,
                  imgHeight: props.imgData.height,
                });
              }}>
              <Image
                style={{width: 100, height: 100}}
                source={{
                  uri: props.imgData.urls.small,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 2,
              backgroundColor: '#fff',
            }}>
            <View style={{backgroundColor: '#fff'}}>
              <Text style={{fontSize: 22, fontWeight: '700'}}>
                {`${props.imgData.alt_description[0].toUpperCase()}${props.imgData.alt_description.slice(
                  1,
                )}`}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                justifyContent: 'flex-end',
              }}>
              <Text style={{fontStyle: 'italic'}}>
                by {props.imgData.user.first_name}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
