import axios from 'axios';
const url= "https://labcare.vercel.app"

const instance = axios.create({baseURL:url })


export default instance