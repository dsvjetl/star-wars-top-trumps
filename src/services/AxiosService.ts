import {axiosSwapi} from '@/axios/axiosSwapi';
import {AxiosError, AxiosResponse} from 'axios';

export class AxiosService {

    public static get<T>(url: string): Promise<AxiosResponse<T> | AxiosError> {
        return axiosSwapi.get(url)
            .then((response: AxiosResponse<T>) => {
                return Promise.resolve(response);
            })
            .catch((error: AxiosError) => {
                return Promise.reject(error);
            });
    }

}
