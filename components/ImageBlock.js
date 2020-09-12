import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ImageBlock = (props) => {
  return (
    <View>
      {props.imgData.urls.small && (
        <View style={styles.imageBlockContainer}>
          <View style={styles.touchableImage}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('LargeImg', {
                  imgUri: props.imgData.urls.regular,
                  imgWidth: props.imgData.width,
                  imgHeight: props.imgData.height,
                });
              }}>
              <Image
                style={styles.imageItem}
                source={{
                  uri: props.imgData.urls.small,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.descriptionContainer}>
            <View>
              <Text style={styles.descriptionText}>
                {`${props.imgData.alt_description[0].toUpperCase()}${props.imgData.alt_description.slice(
                  1,
                )}`}
              </Text>
            </View>
            <View style={styles.descriptionAuthor}>
              <Text style={styles.descriptionAuthorText}>
                by {props.imgData.user.first_name}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageBlockContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    flexDirection: 'row',
  },
  touchableImage: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageItem: {width: 100, height: 100},
  descriptionContainer: {
    flex: 2,
    backgroundColor: '#fff',
  },
  descriptionText: {fontSize: 22, fontWeight: '700'},
  descriptionAuthor: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  descriptionAuthorText: {fontStyle: 'italic'},
});
