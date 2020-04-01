import {AxiosService} from '@/services/AxiosService';
import {axiosUrls} from '@/axios/axiosUrls';

export const actions = {
    async getPerson(context: any, personId: string) {
        let person = null;

        try {
            person = await AxiosService.get<any>(axiosUrls.getPerson(personId));
        } catch (e) {
            console.error(e);
        }

        console.log(person);
    },
};
