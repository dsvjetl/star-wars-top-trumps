import {StarWarsResourcesStateInterface} from '@/interfaces/StarWarsResourcesStateInterface';
import {GameModes} from '@/enums/gameModes';

export const state: StarWarsResourcesStateInterface = {
    persons: [],
    starships: [],
    gameMode: GameModes.PEOPLE,
    winnerIndex: null,
};
