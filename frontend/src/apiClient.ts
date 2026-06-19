import axios from "axios";

const apiClient = axios.create({
    baseURL:
    axios.defaults.baseURL = import.meta.env.DEV ? "http://localhost:4000/" : "/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient