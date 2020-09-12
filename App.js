/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from './components/HomeContainer';
import {LargeImg} from './components/LargeImg';
import {Provider} from 'react-redux';
import {store} from './redux/reduxStore';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator style={styles.body}>
        <Stack.Screen
          name="Gallery"
          component={HomeContainer}
          options={{
            title: 'Gallery',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}></Stack.Screen>
        <Stack.Screen
          name="LargeImg"
          component={LargeImg}
          options={{
            title: ' ',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#aaa",
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: "#aaa",
    flex: 1,
  },
});

export default App;
