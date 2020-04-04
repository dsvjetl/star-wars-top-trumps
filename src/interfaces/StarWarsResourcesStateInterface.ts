import {PersonDtoInterface} from '@/interfaces/PersonDtoInterface';
import {StarshipDtoInterface} from '@/interfaces/StarshipDtoInterface';

export interface StarWarsResourcesStateInterface {
    persons: PersonDtoInterface[] | [];
    starships: StarshipDtoInterface[] | [];
    gameMode: string;
    winnerIndex: number | null;
}
