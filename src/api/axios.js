import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://carambar-api-uwl9.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
