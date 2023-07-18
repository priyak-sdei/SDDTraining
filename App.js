import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppIse from './src/AppIse'
import MyFetchApiRequest from './src/MyFetchApiRequests.js'

const App = () => {
  return (
    <View>
      <AppIse/>
      {/* <MyFetchApiRequest/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})