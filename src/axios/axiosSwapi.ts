import axios, {AxiosInstance} from 'axios';

export const axiosSwapi: AxiosInstance = axios.create({
    baseURL: 'https://swapi.co/api/',
});
