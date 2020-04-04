import {StarWarsResourcesStateInterface} from '@/interfaces/StarWarsResourcesStateInterface';
import {StarshipDtoInterface} from '@/interfaces/StarshipDtoInterface';
import {PersonDtoInterface} from '@/interfaces/PersonDtoInterface';

export const getters = {
    persons(state: StarWarsResourcesStateInterface): PersonDtoInterface[] {
        return state.persons;
    },
    starships(state: StarWarsResourcesStateInterface): StarshipDtoInterface[] {
        return state.starships;
    },
    gameMode(state: StarWarsResourcesStateInterface): string {
        return state.gameMode;
    },
    winnerIndex(state: StarWarsResourcesStateInterface): number | null {
        return state.winnerIndex;
    },
};
