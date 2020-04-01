import {axiosSwapi} from '@/axios/axiosSwapi';
import {AxiosError, AxiosResponse} from 'axios';

export class AxiosService {

    public static get(url: string): Promise<AxiosResponse | AxiosError> {
        return axiosSwapi.get(url)
            .then((response: AxiosResponse) => {
                return Promise.resolve(response);
            })
            .catch((error: AxiosError) => {
                return Promise.reject(error);
            });
    }

}
