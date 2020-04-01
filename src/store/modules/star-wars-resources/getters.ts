import {StarWarsResourcesStateInterface} from '@/interfaces/StarWarsResourcesStateInterface';

export const getters = {
    person(state: StarWarsResourcesStateInterface) {
        return state.person;
    },
    starship(state: StarWarsResourcesStateInterface) {
        return state.starship;
    },
    gameMode(state: StarWarsResourcesStateInterface) {
        return state.gameMode;
    },
};
