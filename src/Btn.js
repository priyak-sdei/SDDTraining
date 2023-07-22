import { Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Btn = () => {
  return (
    <TouchableOpacity
    style={{
        backgroundColor:'black',
        borderRadius:10,
        alignItems:'center',
        width:30,
        paddingVertical:10,
        marginVertical:20
    }} 
    onPress={Press}>
        <Text style={{fontSize:28, color:'white'}}>{title}</Text>

    </TouchableOpacity>
  )
}

export default Btn

