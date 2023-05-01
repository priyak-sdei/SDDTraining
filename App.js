import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/Login'
import Todo from './src/Todo'



const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'red',
        },
        headerTintColor:'yellow',
        headerTintStyle:{
          fontSize:60
        }
      }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Todo' component={Todo}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;


