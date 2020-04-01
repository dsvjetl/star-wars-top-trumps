import {StarWarsResourcesStateInterface} from '@/interfaces/StarWarsResourcesStateInterface';

// TODO: implement interfaces
export const mutations = {
    setPerson(state: StarWarsResourcesStateInterface, person: any) {
        state.person = person;
    },
    setStarship(state: StarWarsResourcesStateInterface, starship: any) {
        state.starship = starship;
    },
    setGameMode(state: StarWarsResourcesStateInterface, gameMode: any) {
        state.gameMode = gameMode;
    },
};
