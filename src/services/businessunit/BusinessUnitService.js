// REACT IMPORT
import axios from 'axios';

// REACT INITIATIONS
// let baseUrl = process.env.REACT_APP_API_URL;
let baseUrl = 'http://localhost:3001';

// FUNCTIONS
async function getBusinessUnitAllData() {
    let response = await axios.get(`${baseUrl}/businessunit`);
    return response.data;
}

async function getBusinessUnitById(id) {
    let response = await axios.get(`${baseUrl}/businessunit/${id}`);
    return response.data;
}

async function createBusinessUnit(data) {
    let response = await axios.post(`${baseUrl}/businessunit`, data);
    return response.data;
}

async function updateBusinessUnit(id, data) {
    let response = await axios.patch(`${baseUrl}/businessunit/${id}`, data);
    return response.data;
}

// export default { getBusinessUnitAllData };

export default { getBusinessUnitAllData, getBusinessUnitById, createBusinessUnit, updateBusinessUnit };
