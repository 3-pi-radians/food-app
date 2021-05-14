import axios from 'axios';

const API_KEY = 'PWhCd_yvzcHWTYURtfv8bDUFwPRlSg44EU0D9i2uwYCsP-qzE5UVnC27ml0jLTO2Hxm_x7iUXkJM4emBzmlzrPpr3sPHDRSnrogzjGkgA-7exWLx9O2tw692HuNQX3Yx'
export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : `Bearer ${API_KEY}`
    }
});