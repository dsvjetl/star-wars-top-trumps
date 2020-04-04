import {StarWarsResourcesStateInterface} from '@/interfaces/StarWarsResourcesStateInterface';
import {PersonDtoInterface} from '@/interfaces/PersonDtoInterface';
import {StarshipDtoInterface} from '@/interfaces/StarshipDtoInterface';

export const mutations = {
    setPersons(state: StarWarsResourcesStateInterface, persons: PersonDtoInterface[]) {
        state.persons = persons;
    },
    setStarship(state: StarWarsResourcesStateInterface, starships: StarshipDtoInterface[]) {
        state.starships = starships;
    },
    setGameMode(state: StarWarsResourcesStateInterface, gameMode: string) {
        state.gameMode = gameMode;
    },
    setWinnerIndex(state: StarWarsResourcesStateInterface, winnerIndex: number | null) {
        state.winnerIndex = winnerIndex;
    },
};
