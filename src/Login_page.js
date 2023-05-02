// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Image,
// } from 'react-native';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {};

//   return (
//     <View style={styles.container}>
//       <View style={styles.tittle1}>
//         <Text style={styles.title}>Login</Text>
//         <Text>By Signing in you are agreeing </Text>
//         <Text>Our Terms and Privacy Policy </Text>
//       </View>
//       <View style={{ flexDirection: 'row' }}>
//         <Text style={{ marginRight: 20 }}>Login</Text>
//         <Text>Register</Text>
//       </View>
//       <View style={{ width: '100%', padding: 10 }}>
//         <View style={styles.inputContainer}>
//           <Image source={require('./mail.png')} style={styles.icon}></Image>
//           <TextInput
//             style={styles.input}
//             placeholder="Email Address"
//             value={username}
//             onChangeText={(text) => setUsername(text)}></TextInput>
//         </View>
//         <View style={styles.inputContainer}>
//           <Image source={require('./lock.png')} style={styles.icon}></Image>
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry={true}
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//           />
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <Image
//               source={require('./Rectangle 7.png')}
//               style={styles.rightIcon}></Image>
//             <Text style={{ marginLeft: 4 }}>Remember Password</Text>
//           </View>
//           <Text style={{ color: 'blue' }}> forget password?</Text>
//         </View>
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         <View style={styles.passwordIconContainer}></View>
//         <Text style={{ textAlign: 'center' }}>or connect with </Text>
//       </View>
//       <View style={styles.iconRow}>
//         <Image source={require('./Group.png')} style={styles.icon}></Image>
//         <Image
//           source={require('./instagram 1.png')}
//           style={styles.icon}></Image>
//         <Image source={require('./pin).png')} style={styles.icon}></Image>
//         <Image source={require('./linkdin.png')} style={styles.icon}></Image>
//       </View>
//       <View style={styles.bottomIconContainer}>
//         <Image
//           source={require('./image 11.png')}
//           style={styles.bottomIcon}></Image>
//       </View>
//       <View style={styles.overlapIconContainer}>
//         <Image
//           source={require('./Subtract.png')}
//           style={styles.overlapIcon}></Image>
//       </View>
//       <View style={styles.overlapIconContainer2}>
//         <Image
//           source={require('./Frame 450.png')}
//           style={styles.overlapIcon}></Image>
//         <Text style={styles.overlapIcon}>Login with Touch ID </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',

//     justifyContent: 'space-between',
//     backgroundColor: 'white',
//   },
//   tittle1: {
//     flex: 0.5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },

//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',

//     borderBottomWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5,
//     padding: 10,
//     width: '100%',
//     marginBottom: 10,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   icon: {
//     width: 20,
//     height: 20,
//     marginLeft: 10,
//     resizeMode: 'contain',
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: 'blue',
//     borderRadius: 5,
//     padding: 10,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   iconRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//     flex: 0.1,
//   },

//   overlapIconContainer: {
//     position: 'absolute',
//     bottom: -10,
//   },
//   overlapIconContainer2: {
//     position: 'absolute',
//     bottom: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default LoginScreen;
