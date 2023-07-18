import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { myFetchPostRequest, myFetchPutRequest } from './MyFetchApiRequests';

const AppIse = () => {
    useEffect(() =>{
       getData()

    }, []);
    const getData=async()=>{
        //  const res=await myFetchGetRequest();
        const res=await myFetchPutRequest({
            
                  title: 'hdhdhdbjd',
                  
                  userId: 120,
                
        });
        console.log("data",res);

    }
  return (
    <View>
      <Text>AppIse</Text>
    </View>
  )
}

export default AppIse

const styles = StyleSheet.create({})