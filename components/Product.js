// import { StyleSheet, Text, View,Button,Image, ScrollView } from 'react-native'
// import React from 'react'
// import { ADD_TO_CART } from './redux/constants'
// import {useDispatch} from 'react-redux'
// import {addToCart} from './redux/action'
// const Product = (props) => {
//     const item= props.item;
//     const dispatch = useDispatch();


//     handleAddToCart =()=> {
//       console.warn("called",item);
//       dispatch(addToCart(item))
//     }
//   return (
//     <ScrollView style={{flex:1,padding:20}} >
//       <View style={{flex:1}}>

//         <Text style={{fontSize:25}}>{item.name}</Text>
//         <Text style={{fontSize:25}}>{item.price}</Text>
//         <Text style={{fontSize:25}}>{item.color}</Text>
//         <Image style={{width:100,height:200}} source={{uri:item.image}}/>
//         <Button title='Add to Cart' onPress={()=>handleAddToCart(item)}/>
//       </View>

//     </ScrollView>
        
//   )
// }



// const styles = StyleSheet.create({
//   container:{
//     flex:1
//   }
// })
// export default Product;