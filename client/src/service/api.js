import axios from 'axios';

const url = "http://localhost:8000";


export const authenticateSignup = async(user) => {
    try{
    return await axios.post(`${url}/signup`, user);
    }catch(error){
        console.log('Error while calling signup api')
    }
}


export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user);
    } catch (error) {
        console.error('error while calling login api:',error.message);
    }
}

export const payUsingPaytm = async(data) =>{
    try {
        let response= await axios.post(`${url}/payment`,data);
        return response.data;
    } catch (error) {
        console.log('Error while calling paytm api');
    }
}