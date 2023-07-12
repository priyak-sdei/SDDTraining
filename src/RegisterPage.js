import React, { useState } from 'react';
import { ScrollView,View, TextInput, Text, TouchableOpacity, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegistrationPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setcontact] = useState('');
  const [pincode, setpincode] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
  const [dob, setDob] = useState('');
  // const [genderModalVisible, setGenderModalVisible] = useState(false);
  // const [selectedGender, setSelectedGender] = useState('');
  // const [countryModalVisible, setCountryModalVisible] = useState(false);
  // const [selectedCountry, setSelectedCountry] = useState('');

  const handleRegistration = () => {
    console.log('Registration:', name, email, password, contact, pincode, address,city, state, zipcode, country, dob);
    navigation.navigate('Login');
  };

  const openGenderModal = () => {
    setGenderModalVisible(true);
  };

  const closeGenderModal = () => {
    setGenderModalVisible(false);
  };

  const openCountryModal = () => {
    setCountryModalVisible(true);
  };

  const closeCountryModal = () => {
    setCountryModalVisible(false);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    closeGenderModal();
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    closeCountryModal();
  };

  return (
    <KeyboardAwareScrollView >
      <Text style={styles.title}>Registration Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Contact No."
        onChangeText={text => setcontact(Number)}
        value={contact}
      />

        <TextInput
        style={styles.input}
        placeholder="Date Of Birth"
        onChangeText={text => setDob(Number)}
        value={dob}
      />

      <TextInput
        style={styles.input}
        placeholder="Pincode"
        onChangeText={text => setpincode(Number)}
        value={pincode}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={text => setAddress(Number)}
        value={address}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        onChangeText={text => setCity(Number)}
        value={city}
      />

      <TextInput
        style={styles.input}
        placeholder="State"
        onChangeText={text => setState(Number)}
        value={state}
      />

      <TextInput
        style={styles.input}
        placeholder="Country"
        onChangeText={text => setCountry(Number)}
        value={country}
      />



      {/* <TouchableOpacity style={styles.dropdownButton} onPress={openGenderModal}>
        <Text style={styles.dropdownButtonText}>Gender</Text>
        <Modal
          animationType="fade"
          transparent
          visible={genderModalVisible}
          onRequestClose={closeGenderModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableHighlight
                onPress={() => handleGenderSelect('Male')}
                underlayColor="#f2f2f2"
              >
                <Text style={styles.modalItem}>Male</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => handleGenderSelect('Female')}
                underlayColor="#f2f2f2"
              >
                <Text style={styles.modalItem}>Female</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={closeGenderModal} underlayColor="#f2f2f2">
                <Text style={styles.modalItem}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dropdownButton} onPress={openCountryModal}>
        <Text style={styles.dropdownButtonText}>Country</Text>
        <Modal
          animationType="fade"
          transparent
          visible={countryModalVisible}
          onRequestClose={closeCountryModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableHighlight
                onPress={() => handleCountrySelect('USA')}
                underlayColor="#f2f2f2"
              >
                <Text style={styles.modalItem}>USA</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => handleCountrySelect('Canada')}
                underlayColor="#f2f2f2"
              >
                <Text style={styles.modalItem}>Canada</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => handleCountrySelect('UK')}
                underlayColor="#f2f2f2"
              >
                <Text style={styles.modalItem}>UK</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={closeCountryModal} underlayColor="#f2f2f2">
                <Text style={styles.modalItem}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>

      */}
       <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  dropdownButton: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    justifyContent: 'center',
  },
  dropdownButtonText: {
    color: '#555',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  
  
});

export default RegistrationPage;
