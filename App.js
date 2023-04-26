import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.tittle1}>
        <Text style={styles.title}>Login</Text>
        <Text>By Signing in you are agreeing </Text>
        <Text>Our Terms and Privacy Policy </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginRight: 20 }}>Login</Text>
        <Text>Register</Text>
      </View>
      <View style={{ width: '100%', padding: 10 }}>
        <View style={styles.inputContainer}>
          <Image source={require('./assets/mail.png')} style={styles.icon}></Image>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={username}
            onChangeText={(text) => setUsername(text)}></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('./assets/lock.png')} style={styles.icon}></Image>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('./assets/Rectangle 7.png')}
              style={styles.rightIcon}></Image>
            <Text style={{ marginLeft: 4 }}>Remember Password</Text>
          </View>
          <Text style={{ color: 'blue' }}> forget password?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.passwordIconContainer}></View>
        <Text style={{ textAlign: 'center' }}>or connect with </Text>
      </View>
      <View style={styles.iconRow}>
        <Image source={require('./assets/Group.png')} style={styles.icon}></Image>
        <Image
          source={require('./assets/instagram 1.png')}
          style={styles.icon}></Image>
        <Image source={require('./assets/pin).png')} style={styles.icon}></Image>
        <Image source={require('./assets/linkdin.png')} style={styles.icon}></Image>
      </View>
      <View style={styles.bottomIconContainer}>
        <Image
          source={require('./assets/image 11.png')}
          style={styles.bottomIcon}></Image>
      </View>
      <View style={styles.overlapIconContainer}>
        <Image
          source={require('./assets/Subtract.png')}
          style={styles.overlapIcon}></Image>
      </View>
      <View style={styles.overlapIconContainer2}>
        <Image
          source={require('./assets/Frame 450.png')}
          style={styles.overlapIcon}></Image>
        <Text style={styles.overlapIcon}>Login with Touch ID </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  tittle1: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    flex: 0.1,
  },

  overlapIconContainer: {
    position: 'absolute',
    bottom: -10,
  },
  overlapIconContainer2: {
    position: 'absolute',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
