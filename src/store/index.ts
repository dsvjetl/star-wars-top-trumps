import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {starWarsResourcesModule} from '@/store/modules/star-wars-resources/starWarsResourcesModule';

export default new Vuex.Store({
    modules: {
        starWarsResourcesModule,
    },
});
