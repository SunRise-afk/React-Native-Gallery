import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {ImageBlock} from './ImageBlock';

export const Home = (props) => {
  useEffect(() => {
    props.getImgDataThunkCreator();
  }, []);
  return (
    <ScrollView>
      <View style={styles.home}>
        {props.ImgData === null ? (
          <View></View>
        ) : (
          props.ImgData.map((item, index) => {
            return (
              <ImageBlock
                navigation={props.navigation}
                imgData={item}
                key={`ImgBl${index}`}></ImageBlock>
            );
          })
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
});
