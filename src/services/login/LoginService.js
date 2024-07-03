/**
 * Authentication Service
 */
import axios from 'axios';


let baseUrl = process.env.REACT_APP_API_URL;
 
async function userLogin(loginData) {
    console.log('baseUrl', baseUrl);
    let response = await axios.post(`${baseUrl}/user/authenticate/`,loginData);
    return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { userLogin };
