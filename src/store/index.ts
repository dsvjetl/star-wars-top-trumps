import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {starWarsResourcesModule} from '@/store/modules/star-wars-resources/starWarsResourcesModule';
import {playersModule} from '@/store/modules/players/playersModule';

export default new Vuex.Store({
    modules: {
        starWarsResourcesModule,
        playersModule,
    },
});
