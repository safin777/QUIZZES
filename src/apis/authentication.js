import { server_base_url } from "../../static";
import api from "./axiosInstance";

const login = async (credentials) => {
    try {
        const response = await api.post(`${server_base_url}/auth/login`, credentials);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error); //rethrow the error to be handled by the caller
    }
}

const registration = async (formData) => {
    try{
        const response = await api.post(`${server_base_url}/auth/register`, formData);
        if(response.status === 201){
            return response.data;
        }else{
            throw new Error("Registration failed");
        }
    }catch(error){
        throw new Error(error);
    }
}

export { login, registration };