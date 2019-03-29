import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: process.env.API,
})

export default axiosConfig
