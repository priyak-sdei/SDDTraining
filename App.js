// import { StyleSheet, Text, View,Image,Button, ScrollView } from 'react-native'
// import React from 'react'
// import Header from './components/Header'
// import Product from './components/Product'

// const App = () => {

//   const products =[
//     {
//       name:'Samsung Mobile',
//       color:'white',
//       price:30000,
//
//     },
//     {
//       name:'Apple Mobile',
//       color:'black',
//       price:70000,
//
//     },
//     {
//       name:'Realme Mobile',
//       color:'grey',
//       price:10000,
//
//     }
//   ]
//   return (
//     <View styles={styles.container}>
//       <Header/>
//       <ScrollView>
//       {
//         products.map((item)=>
//         <Product item={item}/>)
//       }
//       </ScrollView>

//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container:{
//     flex:1
//   }
// })

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import {NavigationContainer} from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import Login from './src/Login'
// import Todo from './src/Todo'
// import RegistrationPage from './src/RegisterPage'
// import RegisterPage from './src/Register'

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='RegisterPage' component={RegistrationPage}/>
//         <Stack.Screen name='Login' component={Login}/>
//         {/* <Stack.Screen name='Todo' component={Todo}/> */}
//         <Stack.Screen name='Register' component={RegisterPage}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App;

// import {Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import axios from "axios"
// import Btn from './src/Btn';

// const App = () => {
//   const [data, setData] = useState(undefined);
//   const getAPIData = async () => {
//     try {
//       const url = 'https://jsonplaceholder.typicode.com/posts';
//     let result = await axios.get(url);
//     console.warn(result)
//     } catch (error) {
//       console.log(error)
//     }
    
//   };
//   useEffect(() => {
//     getAPIData();
//   }, []);
//   return (
//     <View>
//       <Text style={{fontSize: 30}}>API Calling </Text>
//       {
//       data ? <View>
//         <Text style={{ fontSize:30 }}>{data.id}</Text>
//         <Text style={{ fontSize:30 }}>{data.userId}</Text>
//         <Text style={{ fontSize:30 }}>{data.title}</Text>
//         <Text style={{ fontSize:30 }}>{data.body}</Text>
//       </View>: null
//       }
//     </View>
//   )
// };

// export default App;

import { View, Text } from 'react-native'
import React from 'react'
import Btn from './src/Btn'

export default function APIs() {
  return (
    <View>
      <Text>APIs</Text>
      <Btn title='GET' Press={() => {}}/>
    </View>
  )
}
