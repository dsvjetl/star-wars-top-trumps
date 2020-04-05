import {AxiosService} from '@/services/AxiosService';
import {axiosUrls} from '@/axios/axiosUrls';
import {getTwoRandomNumbers} from '@/helpers/getTwoRandomNumbers';

export const actions = {
    async getPersons({commit}: any) {
        let person1: any = null;
        let person2: any = null;
        const twoRandomNumbers: number[] = getTwoRandomNumbers();

        try {
            person1 = await AxiosService.get(axiosUrls.getPerson(twoRandomNumbers[0].toString()));
            person2 = await AxiosService.get(axiosUrls.getPerson(twoRandomNumbers[1].toString()));
        } catch (e) {
            return await Promise.reject(e);
        }

        commit('setPersons', [person1.data, person2.data]);
        return Promise.resolve([person1, person2]);
    },
    async getStarships({commit}: any) {
        let starship1: any = null;
        let starship2: any = null;
        const twoRandomNumbers: number[] = getTwoRandomNumbers();

        try {
            starship1 = await AxiosService.get(axiosUrls.getStarship(twoRandomNumbers[0].toString()));
            starship2 = await AxiosService.get(axiosUrls.getStarship(twoRandomNumbers[1].toString()));
        } catch (e) {
            return await Promise.reject(e);
        }

        commit('setStarships', [starship1.data, starship2.data]);
        return Promise.resolve([starship1, starship2]);
    },
};
