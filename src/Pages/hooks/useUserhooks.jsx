import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "http://localhost:5000"
})
const useUserhooks = () => {
    return axiosPublic;
};

export default useUserhooks;