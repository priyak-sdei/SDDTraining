// import * as React from 'react';
// import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
// import Output from './Output'

// export default function Home({ navigation }) {
//   const [text, setText] = React.useState('');
//   const [text1, setText1] = React.useState('');
//   const [result, setResult] = React.useState('');

//   const handleAdd=()=>{
//   const result=parseInt(text)+parseInt(text1)
//   navigation.navigate('Output',{result})
 
// }

//   return (
//     <View>
//       <View>
//         <TextInput
//           style={styles.input}
//           onChangeText={(val)=>setText(val)}
//           value={text}
//         />
//         <TextInput
//           style={styles.input}
//           onChangeText={(val)=>setText1(val)}
//           value={text1}
//         />
    
//       </View>
//       <View >

//         <Button title="output" onPress={handleAdd} />
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });