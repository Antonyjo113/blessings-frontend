// REACT IMPORT
import axios from 'axios';

// REACT INITIATIONS
let baseUrl = process.env.REACT_APP_API_URL;

// FUNCTIONS
async function userLogin(loginData) {
    console.log('baseUrl', baseUrl);
    let response = await axios.post(`${baseUrl}/user/authenticate/`,loginData);
    return response.data;
}

export default { userLogin };
