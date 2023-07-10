import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { registerUser } from '../redux/actions/userActions';
import {Picker} from '@react-native-picker/picker'

const RegisterPage = ({ registerUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleRegister = () => {
    // Perform validation here
    if (!username || !password || !email || !gender) {
      alert('Please fill in all fields');
      return;
    }

    // Save the registration data in Redux
    const userData = {
      username,
      password,
      email,
      gender,
      
    };
    registerUser(userData);

    // Reset the form
    setUsername('');
    setPassword('');
    setEmail('');
    setGender('');
    setSelectedImage(null);
  };

  const handleImageUpload = () => {
    // Implement image upload functionality here
    // You can use a package like react-native-image-picker to handle image selection and upload
  };

  return (
    <View>
      <Text>Register Page</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Picker
        selectedValue={gender}
        onValueChange={value => setGender(value)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      <TouchableOpacity onPress={handleImageUpload}>
        <Text>Upload Image</Text>
      </TouchableOpacity>
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
      <TouchableOpacity onPress={handleRegister}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  registerUser: userData => dispatch(registerUser(userData)),
});

export default RegisterPage;
