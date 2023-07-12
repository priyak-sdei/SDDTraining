import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

const RegisterPage = ({navigation}) => {
  const [medicines, setMedicines] = useState([
    { medicineName: '', quantityPrescribed: '', frequency: '', duration: '', isadded: false },
  ]);
  const [medicineName, setMedicineName] = useState('');
  const [quantityPrescribed, setQuantityPrescribed] = useState('');
  const [frequency, setFrequency] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddMedicine = (item, index) => {
    let data = Object.assign([], medicines, { [index]: { ...item, isadded: true } });
    data.push({ medicineName: '', quantityPrescribed: '', frequency: '', duration: '', isadded: false });
    setMedicines(data);
  };

  const handleRemoveMedicine = (item, index) => {
    let data = Object.assign([], medicines);
    data.splice(index, 1);
    setMedicines(data);
  };

  const handleRegister = () => {
    console.log('Registration data:', medicines);
  };
  const handleLogin = () => {
    navigation.navigate('Login');
    // Handle submitting the form data to a server
  };

  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'lightblue'}}>
        <Text style={styles.header}>Order Medicine</Text>
      </View>
      <FlatList
        data={medicines}
        renderItem={({ item, index }) => {
          return (
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}>
                <Text >Medicine Name</Text>
                <View style={{flex:1,flexDirection:'row',borderWidth: 1,borderColor:'black',marginBottom: 10,height: 40,borderCurve:'circular',borderRadius: 8}}>
                <Image source={require('./assets/download.png')} style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Search Medicine"
                  value={item.medicineName}
                  onChangeText={(text) => {
                    setMedicines(Object.assign([], medicines, { [index]: { ...item, medicineName: text } }));
                  }}
                />
                 </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ width: '45%' }}>
                  <Text>Quantity Prescribed</Text>
                  <TextInput
                    style={styles.input1}
                    placeholder="Quantity Prescribed"
                    value={item.quantityPrescribed}
                    onChangeText={(text) => {
                      setMedicines(Object.assign([], medicines, { [index]: { ...item, quantityPrescribed: text } }));
                    }}
                  />
                </View>
                <View style={{ width: '45%' }}>
                  <Text>Frequency</Text>
                  <TextInput
                    style={styles.input1}
                    placeholder="Frequency"
                    value={item.frequency}
                    onChangeText={(text) => {
                      setMedicines(Object.assign([], medicines, { [index]: { ...item, frequency: text } }));
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ width: '45%' }}>
                  <Text>Duration(Days)</Text>
                  <TextInput
                    style={styles.input1}
                    placeholder="Duration"
                    value={item.duration}
                    onChangeText={(text) => {
                      setMedicines(Object.assign([], medicines, { [index]: { ...item, duration: text } }));
                    }}
                  />
                </View>
                {item.isadded ? (
                  <View
                    style={{
                      width: '45%',                  
                      backgroundColor: 'red',                    
                      marginBottom: 10,
                      borderRadius: 5,
                      padding: 10,
                      marginTop: 20,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'red',
                        flex: 1,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20
                      }}
                      onPress={() => handleRemoveMedicine(item, index)}
                    >
                      <Text style={{ color: 'white' }}> - Remove Medicine</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View
                    style={{
                      width: '45%',                  
                      backgroundColor: 'blue',                    
                      marginBottom: 10,
                      borderRadius: 5,
                      padding: 10,
                      marginTop: 20,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'blue',
                        flex: 1,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20
                      }}
                      onPress={() => handleAddMedicine(item, index)}
                    >
                      <Text style={{ color: 'white' }}> + Add Medicine</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          );
        }}
      />

      {/* <Button title="Submit" onPress={handleRegister} /> */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
      <Text style={{justifyContent:'center', alignItems:'center'}}>Or</Text>
      <View style={{marginTop:'50'}}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
      {/* <Button style={{borderRaadius:8}} title="Logout" onPress={handleLogin}/> */}
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    // marginBottom: 10,
    // borderWidth: 1,
    // height: 40,
    // borderColor: 'black',
    // // borderCurve:'circular', 
    // borderRadius: 8
  },
  input1: {
    borderWidth: 1,
    height: 40,
    borderColor: 'black',
    borderRadius:8,
    marginTop:2
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
  icon: {
    width: 40,
    height: 35,
    marginLeft: 10,
    resizeMode: 'contain',
    border:10,
  }
});

export default RegisterPage;
