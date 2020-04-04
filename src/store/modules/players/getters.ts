import {PlayersStateInterface} from '@/interfaces/PlayersStateInterface';

export const getters = {
    player1Score(state: PlayersStateInterface): number {
        return state.player1Score;
    },
    player2Score(state: PlayersStateInterface): number {
        return state.player2Score;
    },
};
