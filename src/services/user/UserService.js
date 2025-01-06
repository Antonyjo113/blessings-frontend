// REACT IMPORT
import axios from 'axios';

// REACT INITIATIONS
// let baseUrl = process.env.REACT_APP_API_URL;
let baseUrl = 'http://localhost:3001';

// FUNCTIONS
async function getUserAllData() {
    let response = await axios.get(`${baseUrl}/user`);
    return response.data;
}

async function getUserById(id) {
    let response = await axios.get(`${baseUrl}/user/${id}`);
    return response.data;
}

async function createUser(data) {
    let response = await axios.post(`${baseUrl}/user`, data);
    return response.data;
}

async function updateUser(id, data) {
    let response = await axios.patch(`${baseUrl}/user/${id}`, data);
    return response.data;
}

// export default { getUserAllData };

export default { getUserAllData, getUserById, createUser, updateUser };