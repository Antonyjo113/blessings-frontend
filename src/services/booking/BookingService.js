// REACT IMPORT
import axios from 'axios';

// REACT INITIATIONS
// let baseUrl = process.env.REACT_APP_API_URL;
let baseUrl = 'http://localhost:3001';



// FUNCTIONS
async function getUserData() {
    console.log('baseUrl', baseUrl);
    let response = await axios.get(`${baseUrl}/user`);
    return response.data;
}

export default { getUserData };
