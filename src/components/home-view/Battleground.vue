<template>
    <div class="co-battleground">

        <div class="start-game-wrapper">
            <AppButton
                text="Start battle"
                mode="circular"
                @click.native="fetchResources()"
            />
        </div>

        <transition name="fade" mode="out-in">
            <div
                class="loading-container"
                v-if="fetching"
                key="loading-container"
            >
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>

            <div
                class="card-container"
                v-else-if="fetching === false && battleResources.length > 0"
                key="card-container"
            >
                <div class="player-playground">
                    <h5 class="u-a3 player-title">
                        <span class="score">Score: {{player1Score}}</span>
                        <span>Player 1</span>
                    </h5>
                    <BattleCard
                        :battleResource="battleResources[0]"
                        :gameMode="gameMode"
                        :playerIndex="0"
                    />
                </div>
                <div class="player-playground">
                    <h5 class="u-a3 player-title">
                        <span>Player 2</span>
                        <span class="score">Score: {{player2Score}}</span>
                    </h5>
                    <BattleCard
                        :battleResource="battleResources[1]"
                        :gameMode="gameMode"
                        :playerIndex="1"
                    />
                </div>
            </div>
        </transition>

    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppButton from '@/components/global/AppButton.vue';
    import BattleCard from '@/components/home-view/BattleCard.vue';
    import {storeModuleNames} from '@/enums/storeModuleNames';
    import {PersonDtoInterface} from '@/interfaces/PersonDtoInterface';
    import {StarshipDtoInterface} from '@/interfaces/StarshipDtoInterface';
    import {GameModes} from '@/enums/gameModes';
    import {getNumberFromCommaSeparatedString} from '@/helpers/getNumberFromCommaSeparatedString';
    import {AxiosError} from 'axios';
    import {eventBus} from '@/helpers/eventBus';
    import {EventBusEventNames} from '@/enums/eventBusEventNames';

    @Component({
        name: 'Battleground',
        components: {BattleCard, AppButton},
    })
    export default class Battleground extends Vue {
        public fetching: boolean = false;

        public get gameMode(): string {
            return this.$store.getters[`${storeModuleNames.STAR_WARS_RESOURCES}/gameMode`];
        }

        public get battleResources(): PersonDtoInterface[] | StarshipDtoInterface[] | [] {
            if (this.gameMode === GameModes.PEOPLE) {
                return this.persons;
            }
            if (this.gameMode === GameModes.STARSHIPS) {
                return this.starships;
            }

            return [];
        }

        public get persons(): PersonDtoInterface[] | [] {
            return this.$store.getters[`${storeModuleNames.STAR_WARS_RESOURCES}/persons`];
        }

        public get starships(): PersonDtoInterface[] | [] {
            return this.$store.getters[`${storeModuleNames.STAR_WARS_RESOURCES}/starships`];
        }

        public get player1Score(): number {
            return this.$store.getters[`${storeModuleNames.PLAYERS}/player1Score`];
        }

        public get player2Score(): number {
            return this.$store.getters[`${storeModuleNames.PLAYERS}/player2Score`];
        }

        public fetchResources() {
            const battleResourcesActionNames: {persons: string, starships: string} = {
                persons: 'getPersons',
                starships: 'getStarships',
            };
            let currentBattleResourceActionName: string = '';

            if (this.gameMode === GameModes.PEOPLE) {
                currentBattleResourceActionName = battleResourcesActionNames.persons;
            }
            if (this.gameMode === GameModes.STARSHIPS) {
                currentBattleResourceActionName = battleResourcesActionNames.starships;
            }

            this.fetching = true;
            this.$store.dispatch(`${storeModuleNames.STAR_WARS_RESOURCES}/${currentBattleResourceActionName}`).then(() => {
                this.fetching = false;
                this.chooseBattleType();
            }).catch((error: AxiosError) => {
                this.$store.commit(`${storeModuleNames.STAR_WARS_RESOURCES}/resetPersonsAndStarships`);
                this.fetching = false;
                this.openModalForError(error);
            });
        }

        private openModalForError(error: AxiosError) {
            const errorResponseRequest = error.response!.request;
            const message = `Ooops... There has been an error: <a target="_blank" href="${errorResponseRequest.responseURL}">${errorResponseRequest.responseURL}</a>
            has responded with status ${errorResponseRequest.status}. Please click on "Start battle" button again.`;

            eventBus.$emit(EventBusEventNames.OPEN_MODAL, message);
        }

        private chooseBattleType() {
            if (this.gameMode === GameModes.PEOPLE) {
                this.getPeopleWinner();
            }
            if (this.gameMode === GameModes.STARSHIPS) {
                this.getStarshipsWinner();
            }
        }

        private getPeopleWinner() {
            const persons: PersonDtoInterface[] = this.battleResources as PersonDtoInterface[];
            const winningAttributes: number[] = [
                Number(getNumberFromCommaSeparatedString(persons[0].mass)),
                Number(getNumberFromCommaSeparatedString(persons[1].mass)),
            ];

            this.setWinnerIndex(winningAttributes);
        }

        private getStarshipsWinner() {
            const starships: StarshipDtoInterface[] = this.battleResources as StarshipDtoInterface[];
            const winningAttributes: number[] = [
                Number(getNumberFromCommaSeparatedString(starships[0].crew)),
                Number(getNumberFromCommaSeparatedString(starships[1].crew)),
            ];

            this.setWinnerIndex(winningAttributes);
        }

        private setWinnerIndex(winningAttributes: number[]) {
            const validWinningAttributes: number[] =
                winningAttributes.map((winningAttribute) => isNaN(winningAttribute) ? 0 : winningAttribute);

            const winnerIndex = validWinningAttributes.indexOf(Math.max(...validWinningAttributes));
            this.$store.commit(`${storeModuleNames.STAR_WARS_RESOURCES}/setWinnerIndex`, winnerIndex);
            this.$store.commit(`${storeModuleNames.PLAYERS}/incrementPlayer${winnerIndex + 1}Score`);
        }

    }
</script>

<style lang="scss" scoped>
    .co-battleground {
        padding: 0 percentage(4 / 24);

        .start-game-wrapper {
            text-align: center;
        }

        .card-container {
            display: flex;
        }

        .player-playground {
            width: 50%;
            padding: 10px;

            &:first-of-type {
                border-right: 1px solid $yellow;
            }
        }

        .player-title {
            color: $white;
            text-align: center;
            display: flex;
            justify-content: space-between;
        }

        .score {
            color: yellow;
        }

        .loading-container {
            padding-top: 100px;
            text-align: center;
        }

        .spinner-border {
            color: $yellow;
        }

    }
</style>
