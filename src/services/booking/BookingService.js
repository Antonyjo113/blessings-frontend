// REACT IMPORT
import axios from 'axios';

// REACT INITIATIONS
// let baseUrl = process.env.REACT_APP_API_URL;
let baseUrl = 'http://localhost:3001';

// FUNCTIONS
async function getUserData() {
    let response = await axios.get(`${baseUrl}/user`);
    return response.data;
}

async function getBookingAllData() {
    let response = await axios.get(`${baseUrl}/booking`);
    return response.data;
}

async function getBookingById(id) {
    let response = await axios.get(`${baseUrl}/booking/${id}`);
    return response.data;
}

async function createBooking(data) {
    let response = await axios.post(`${baseUrl}/booking`, data);
    return response.data;
}

async function updateBooking(id, data) {
    let response = await axios.patch(`${baseUrl}/booking/${id}`, data);
    return response.data;
}

export default { getUserData, getBookingAllData, getBookingById, createBooking, updateBooking };
