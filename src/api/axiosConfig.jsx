import axios from 'axios';

// Create an axios instance with baseURL
const api = axios.create({
  // baseURL: 'http://localhost:4000/api/v1',  // Your backend base URL  
  baseURL: 'https://blogserver-9ya4.onrender.com/api/v1',  // Your backend base URL
  
});

export default api;