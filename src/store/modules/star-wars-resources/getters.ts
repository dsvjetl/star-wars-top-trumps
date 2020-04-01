import {StarWarsResourcesStateInterface} from '@/interfaces/StarWarsResourcesStateInterface';

export const getters = {
    persons(state: StarWarsResourcesStateInterface) {
        return state.persons;
    },
    starships(state: StarWarsResourcesStateInterface) {
        return state.starships;
    },
    gameMode(state: StarWarsResourcesStateInterface) {
        return state.gameMode;
    },
};
