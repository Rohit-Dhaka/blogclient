import axios from 'axios';

// Create an axios instance with baseURL
const api = axios.create({
//   baseURL: 'http://localhost:4000/api/v1',  // Your backend base URL
  baseURL: 'https://meating-backend-code.onrender.com',  // Your backend base URL
});

export default api;