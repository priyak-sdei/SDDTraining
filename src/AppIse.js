import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  myFetchPostRequest,
  myFetchPutRequest,
  myFetchPatchRequest,
  myFetchDeleteRequest,
} from './MyFetchApiRequests';
import {
  MyAxiosGetRequest,
  myAxiosGetRequest,
  myAxiosPostRequest,
} from './MyAxiosRequests';

const AppIse = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    //for post request in axios
    await myAxiosPostRequest({
      title: 'sdsds',
      desc: 'edwe',
      id: 100,
    })
    .then(res => {
      console.log(res);
    }).catch(error =>{
      console.log(error);
    });

    // for get request

    // await myAxiosGetRequest()
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    //  const res=await myFetchGetRequest();
    // const res=await myFetchPutRequest({
    // const data1 = {
    //   title: 'fsfsfssf',
    //   body:'dsdsdsds',
    //   userId:1,
    // };
    // const data2 = {
    //     title:'fsfsfsfs',
    // };
    // const res1 = await myFetchPostRequest(data1);
    // const res = await myFetchPutRequest(1, data2);

    // console.log("data",res);

    // const delRes = await myFetchPostRequest(2);

    // console.log("data",delRes);
  };
  return (
    <View>
      <Text>AppIse</Text>
    </View>
  );
};

export default AppIse;
