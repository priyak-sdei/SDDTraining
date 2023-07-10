import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const RegisterPage = () => {
  //   const [QualityResourse, setQualityResourse] = useState('');
  const [Frequency, setFrequency] = useState('');
  const [Duration, setDuration] = useState('');
  const [RemoveMedicine, setRemoveMedicine] = useState('');
  const [address, setAddress] = useState('');
  const [QualityPrescribed, setQualityPrescribed] = useState('');
  const [Frequencyy, setFrequencyy] = useState('');
  const [QuantityPrescribed, setQuantityPrescribed] = useState('');
  const [RemoveButton, setRemoveButton] = useState('');
  const [MediceName, setMediceName] = useState('');

  const handleRegister = () => {
    // Perform registration logic here
    console.log('Registration data:', {
      //   QualityResourse,
      Frequency,
      Duration,
      RemoveMedicine,
      address,
      QualityPrescribed,
      Frequencyy,
      QuantityPrescribed,
      RemoveButton,
      MediceName,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>Order Medicine</Text>
      </View>

      <View style={{flex: 1,height:200}}>
        <View style={{flex:1}}>
          <Text>Medicine Name</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            value={MediceName}
            onChangeText={setMediceName}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            color: 'red',
             justifyContent: 'space-between',
            width:'100%',
            
          }}>
          <View style={{width:'45%'}}>
            <Text>Quantity Prescribed</Text>
            <TextInput
              style={styles.input1}
              placeholder=""
              value={QuantityPrescribed}
              onChangeText={setQuantityPrescribed}
            />
          </View>
          <View style={{width:'45%'}}>
            <Text>Frequency</Text>
            <TextInput
              style={styles.input1}
              placeholder=""
              value={RemoveButton}
              onChangeText={setRemoveButton}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            color: 'red',
             justifyContent: 'space-between',
            width:'100%',
          }}>
          <View  style={{width:'45%'}} >
            <Text>Duration(Days)</Text>
            <TextInput
              style={styles.input1}
              placeholder=""
              value={QuantityPrescribed}
              onChangeText={setQuantityPrescribed}
            />
          </View>
          <View  style={{width:'45%',height:40,backgroundColor:'blue',alignSelf:'flex-end',marginBottom:10}}>
            <TouchableOpacity style={{backgroundColor: 'red', flex: 1,width:'100%', alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'white'}}>- Remove Medicine</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

     
      <Button title="Register" onPress={handleRegister} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    // backgroundColor:'blue',
    textAlign: 'center',
  },
  columnContainer: {
    flexDirection: 'column',
    marginBottom: 'center',
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    height:40,
    borderColor: 'black',
  },
  input1: {
    
   
    borderWidth: 1,
    height:40,
    borderColor: 'black',
  },
});

export default RegisterPage;
