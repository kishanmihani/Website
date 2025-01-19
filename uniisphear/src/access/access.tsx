import axios from "axios";

export const authAxios = axios.create({
    baseURL:'http://localhost:3000'
})
// process.env.REACT_APP_API_URL