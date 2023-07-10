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


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/Login'
import Todo from './src/Todo'
import Register from './src/Register'



const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Todo' component={Todo}/>
        <Stack.Screen name='Register' component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;


