import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export const api = axios.create({
  baseURL: 'http://localhost:4000/'
})

export default http;

