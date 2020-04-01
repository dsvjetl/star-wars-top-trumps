<template>
    <div class="co-battleground">

        <div class="start-game-wrapper">
            <AppButton
                text="Start battle"
                mode="circular"
                @click.native="fetchRandomPersons()"
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
                    <h5 class="u-a3 player-title">Player 1</h5>
                    <BattleCard
                        :battleResource="battleResources[0]"
                        :gameMode="gameMode"
                    />
                </div>
                <div class="player-playground">
                    <h5 class="u-a3 player-title">Player 2</h5>
                    <BattleCard
                        :battleResource="battleResources[1]"
                        :gameMode="gameMode"
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

    @Component({
        name: 'Battleground',
        components: {BattleCard, AppButton},
    })
    export default class Battleground extends Vue {
        public fetching: boolean = false;

        public get gameMode(): string {
            return this.$store.getters[`${storeModuleNames.STAR_WARS_RESOURCES}/gameMode`];
        }

        public get showLoader() {
            return this.fetching;
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

        public fetchRandomPersons() {
            this.fetching = true;
            this.$store.dispatch(`${storeModuleNames.STAR_WARS_RESOURCES}/getPersons`).then(() => {
                this.fetching = false;
            });
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
