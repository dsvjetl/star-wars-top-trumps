import {state} from '@/store/modules/star-wars-resources/state';
import {getters} from '@/store/modules/star-wars-resources/getters';
import {mutations} from '@/store/modules/star-wars-resources/mutations';
import {actions} from '@/store/modules/star-wars-resources/actions';

export const starWarsResourcesModule = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
