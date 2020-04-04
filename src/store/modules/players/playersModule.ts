import {state} from '@/store/modules/players/state';
import {getters} from '@/store/modules/players/getters';
import {mutations} from '@/store/modules/players/mutations';

export const playersModule = {
    namespaced: true,
    state,
    getters,
    mutations,
};
