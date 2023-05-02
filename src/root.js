import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import Login from './src/App'
import TodoList from './todo'
import App from './App'



const Stack = createNativeStackNavigator();
const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='App' component={App}/>
        <Stack.Screen name='TodoList' component={TodoList}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root;