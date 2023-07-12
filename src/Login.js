import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Register');
    // Handle submitting the form data to a server
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.tittle1}>
          <Text style={styles.title}>Login</Text>

          <Text style={{ color: '#6B5E5E',marginTop:15 }}>By Signing in you are agreeing </Text>
          <Text style={{ color: '#036BB9', marginTop: 10 }}><Text style={{ color: '#6B5E5E' }}>our</Text> Term and privacy policy </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#036BB9', borderBottomWidth: 2, borderColor: "#036BB9" }}> Login</Text>
          <Text style={{ color: '#E5E5E5', marginLeft: 20 }} > Register</Text>
        </View>

        <View style={{ width: '90%', padding: 1 }}>
          <View style={styles.inputContainer}>
            <Image source={require('./assets/mail.png')} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />

          </View>
          <View style={styles.inputContainer}>
            <Image source={require('./assets/lock.png')} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Image source={require('./assets/group2.png')} style={styles.rightIcon} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row',  }}>
              <Image source={require('./assets/rectangle7.png')} style={styles.rightIcon} />
              <Text style={{ color: '#6B5E5E' }} > Remember Password</Text>
            </View>

            <Text style={{ color: '#0386D0' }} > Forget password</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.passwordIconContainer}>

          </View>
          <View style={styles.text}>
            <Text style={{ color: "#747070" }}>or connect with</Text></View>
        </View>
        <View style={styles.iconRow}>
          <Image source={require('./assets/Group.png')} style={styles.icon} />
          <Image source={require('./assets/instagram_1.png')} style={styles.icon} />
          <Image source={require('./assets/pinterest.png')} style={styles.icon} />
          <Image source={require('./assets/linkedin.png')} style={styles.icon} />


        </View>
        <View style={styles.bottomIconContainer}>
          <Image source={require('./assets/image11.png')} style={styles.bottomIcon} />
        </View>
        <View style={styles.overlapIconContainer}>
          <Image source={require('./assets/group16.png')} style={styles.overlapIcon} />
        </View>
        <View style={styles.overlapIconContainer}>
          <Image source={require('./assets/subtract.png')} style={styles.overlapIcon} />
        </View>


        <View style={styles.overlapIconContainer2}>

          <Image source={require('./assets/frame450.png')} style={styles.overlapIcon} />
          <Text style={{ color: '#FFFFFF' }}>Login with touch</Text>
        </View>
      </View>
      </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  tittle1: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: 'center',
    //backgroundColor:'red',
    marginBottom: 20,
  },
  textAbove: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    color:'black'
    //marginBottom: 20,

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10,
    color: ' #A6A6A6',

  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#A6A6A6',
  },
  icon: {
    width: 50,
    height: 35,
    marginLeft: 10,
    resizeMode: 'contain',
    border:10,
  },
  button: {
    backgroundColor: '#0386D0',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontColor: '#FFFFFF',
    fontWeight: 'bold',
    background: '#0386D0',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    flex: 0.1

  },



  overlapIconContainer: {
    position: 'absolute',
    bottom: -10,
  },
  overlapIconContainer2: {
    justifyContent: "space-between",
    alignItems: "center",
    height:"10%",
    position: 'absolute',
    bottom: 30,
  },


});

export default LoginScreen;