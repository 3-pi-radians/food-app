import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default axios.create({
    baseURL : BASE_URL,
    headers : {
        Authorization : `Bearer ${API_KEY}`
    }
});