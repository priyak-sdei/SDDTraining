import axios from "axios";

export const myAxiosGetRequest= async  () => {
    const res= await axios({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/posts',
    });
    return res;
}