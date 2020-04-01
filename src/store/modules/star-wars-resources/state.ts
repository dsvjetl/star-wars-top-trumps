import {StarWarsResourcesStateInterface} from '@/interfaces/StarWarsResourcesStateInterface';
import {GameModes} from '@/enums/gameModes';

export const state: StarWarsResourcesStateInterface = {
    person: null,
    starship: null,
    gameMode: GameModes.PEOPLE,
};
