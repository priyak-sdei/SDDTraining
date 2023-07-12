import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

const RegisterPage = () => {
  const [medicines, setMedicines] = useState([
    {medicineName:'',quantityPrescribed:'',frequency:'',duration:'',isadded:false}
  ]);
  const [medicineName, setMedicineName] = useState('');
  const [quantityPrescribed, setQuantityPrescribed] = useState('');
  const [frequency, setFrequency] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddMedicine = (item,index) => {
   let data = Object.assign([],medicines,{[index]:{...item,isadded:true}})
    data.push({medicineName:'',quantityPrescribed:'',frequency:'',duration:'',isadded:false})
    setMedicines(data)
  };

  const handleRegister = () => {
    console.log('Registration data:', medicines);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Order Medicine</Text>
      </View>
      <FlatList
        data={medicines}
        renderItem={({item, index}) => {
          return (
            <View style={{flex: 1}}>
              <View style={{flex: 1}}>
                <Text>Medicine Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  value={item.medicineName}
                  onChangeText={text => {
                    setMedicines(Object.assign([], medicines, {[index]: {...item, medicineName: text}}))
                }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '45%'}}>
                  <Text>Quantity Prescribed</Text>
                  <TextInput
                    style={styles.input1}
                    placeholder=""
                    value={item.quantityPrescribed}
                    onChangeText={text => {
                      setMedicines(Object.assign([], medicines, {[index]: {...item, quantityPrescribed: text}}))
                  }}
                  />
                </View>
                <View style={{width: '45%'}}>
                  <Text>Frequency</Text>
                  <TextInput
                    style={styles.input1}
                    placeholder=""
                    value={item.frequency}
                    onChangeText={text => {
                      setMedicines(Object.assign([], medicines, {[index]: {...item, frequency: text}}))
                  }}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '45%'}}>
                  <Text>Duration(Days)</Text>
                  <TextInput
                    style={styles.input1}
                    placeholder=""
                    value={item.duration}
                    onChangeText={text => {
                      setMedicines(Object.assign([], medicines, {[index]: {...item, duration: text}}))
                  }}
                  />
                </View>
                <View
                  style={{
                    width: '45%',
                    height: 40,
                    backgroundColor: 'blue',
                    alignSelf: 'flex-end',
                    marginBottom: 10,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'red',
                      flex: 1,
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={()=>handleAddMedicine(item,index)}>
                    <Text style={{color: 'white'}}> + Add Medicine</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />

      <Button title="Submit" onPress={handleRegister} />
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
    marginBottom: 10,
    borderWidth: 1,
    height: 40,
    borderColor: 'black',
  },
  input1: {
    borderWidth: 1,
    height: 40,
    borderColor: 'black',
  },
});

export default RegisterPage;
