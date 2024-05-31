import axios from "axios";
import { baseURL } from "../Global/global";

const commonAxios = async (ep, type, data) => {
    try {
        return axios({
            method: type,
            url: baseURL + ep,
            data: data,
        })
            .then(response => {
                return response;
            })
            .catch(error => {
                throw error;
            });
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default commonAxios;
