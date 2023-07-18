export const myFetchGetRequest=async()=>{
const response=await fetch('https://jsonplaceholder.typicode.com/posts', {method:'GET'})
const resJson= await response.json();
return resJson;
};

export const myFetchPostRequest=async(data)=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(data),
        //     {
        //   title: 'foo',
        //   body: 'bar',
        //   userId: 1,
        // }
       
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },  

    })
    const resJson= await response.json();
    return resJson;
    };


    export const myFetchPutRequest=async(data)=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },  
    
        })
        const resJson= await response.json();
        return resJson;
        };