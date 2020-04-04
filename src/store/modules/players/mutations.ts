import {PlayersStateInterface} from '@/interfaces/PlayersStateInterface';

export const mutations = {
    incrementPlayer1Score(state: PlayersStateInterface) {
        state.player1Score++;
    },
    incrementPlayer2Score(state: PlayersStateInterface) {
        state.player2Score++;
    },
    resetPlayers(state: PlayersStateInterface) {
        state.player1Score = 0;
        state.player2Score = 0;
    },
};
