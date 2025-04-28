import axios from "axios";
import { server_base_url } from "../../static";
const api = axios.create({
    baseURL: server_base_url,
});

api.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err?.response) {
            return Promise.reject(err?.response?.data.message);
        } else {
            err.message = "Something went wrong, Check your Internet Connection or try again later";
        }
        return Promise.reject(err);
    }
)

export default api;

