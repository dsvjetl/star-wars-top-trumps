import {AxiosService} from '@/services/AxiosService';
import {axiosUrls} from '@/axios/axiosUrls';
import {getTwoRandomNumbers} from '@/helpers/getTwoRandomNumbers';
import {PersonDtoInterface} from '@/interfaces/PersonDtoInterface';
import {AxiosError, AxiosResponse} from 'axios';

export const actions = {
    async getPersons({commit}: any, personId: string) {
        let person1: any = null;
        let person2: any = null;
        const twoRandomNumbers: number[] = getTwoRandomNumbers();

        try {
            person1 = await AxiosService.get(axiosUrls.getPersons(twoRandomNumbers[0].toString()));
            person2 = await AxiosService.get(axiosUrls.getPersons(twoRandomNumbers[1].toString()));
        } catch (e) {
            return await Promise.reject(e);
        }

        commit('setPersons', [person1.data, person2.data]);
        return Promise.resolve([person1, person2]);
    },
};
