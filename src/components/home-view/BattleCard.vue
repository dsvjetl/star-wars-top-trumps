<template>
    <div
        class="co-battle-card card"
        :class="[
            {'is-winner': isWinnerState},
            {'is-loser': isWinnerState === false}
        ]"
    >

        <div
            class="card-img-top"
            :style="{backgroundImage: 'url(' + require('@/assets/images/' + currentImage)}"
        ></div>

        <div
            class="card-body"
            v-if="gameMode === gameModes.PEOPLE"
        >

            <h5 class="card-title u-a3">{{battleResource.name}}</h5>

            <div class="card-info">
                <p class="info">
                    <span class="key-name u-a4">Mass: </span>
                    <span class="badge badge-secondary value u-a4">{{battleResource.mass}}</span>
                </p>
                <p class="info">
                    <span class="key-name u-a4">Height: </span>
                    <span class="value u-a4">{{battleResource.height}}</span>
                </p>
                <p class="info">
                    <span class="key-name u-a4">Birth year: </span>
                    <span class="value u-a4">{{battleResource.birth_year}}</span>
                </p>
                <p class="info">
                    <span class="key-name u-a4">Gender: </span>
                    <span class="value u-a4">{{battleResource.gender}}</span>
                </p>
            </div>

        </div>

        <div
            class="card-body"
            v-if="gameMode === gameModes.STARSHIPS"
        >

            <h5 class="card-title u-a3">{{battleResource.name}}</h5>

            <div class="card-info">
                <p class="info">
                    <span class="key-name u-a4">crew: </span>
                    <span class="badge badge-secondary value u-a4">{{battleResource.crew}}</span>
                </p>
                <p class="info">
                    <span class="key-name u-a4">Model: </span>
                    <span class="value u-a4">{{battleResource.model}}</span>
                </p>
                <p class="info">
                    <span class="key-name u-a4">Length: </span>
                    <span class="value u-a4">{{battleResource.length}}</span>
                </p>
                <p class="info">
                    <span class="key-name u-a4">Max speed: </span>
                    <span class="value u-a4">{{battleResource.max_atmosphering_speed}}</span>
                </p>
            </div>

        </div>

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import PersonIcon from '@/components/icons/PersonIcon.vue';
    import {PersonDtoInterface} from '@/interfaces/PersonDtoInterface';
    import {StarshipDtoInterface} from '@/interfaces/StarshipDtoInterface';
    import {GameModes} from '@/enums/gameModes';
    import {storeModuleNames} from '@/enums/storeModuleNames';

    @Component({
        name: 'BattleCard',
        components: {PersonIcon},
    })
    export default class BattleCard extends Vue {
        @Prop({required: true}) public battleResource!: PersonDtoInterface | StarshipDtoInterface;
        @Prop({required: true, default: GameModes.PEOPLE}) public gameMode!: string;
        @Prop({required: true}) public playerIndex!: number;

        public isWinnerState: boolean | null = null;
        public imageNames: { people: string, starships: string } = {
            people: `star-wars-characters.jpg`,
            starships: `star-wars-starships.jpg`,
        };
        public gameModes = GameModes;

        public get winnerIndex(): number | null {
            return this.$store.getters[`${storeModuleNames.STAR_WARS_RESOURCES}/winnerIndex`];
        }

        public get isWinner(): boolean {
            return this.playerIndex === this.winnerIndex;
        }

        public get currentImage(): string {
            if (this.gameMode === GameModes.PEOPLE) {
                return this.imageNames.people;
            }
            if (this.gameMode === GameModes.STARSHIPS) {
                return this.imageNames.starships;
            }

            return '';
        }

        public mounted(): void {
            this.setWinnerState();
        }

        private setWinnerState() {
            setTimeout(() => {
                this.isWinnerState = this.isWinner;
            }, 2000);
        }
    }
</script>

<style lang="scss" scoped>
    .co-battle-card {
        transition: all 1s ease-in;

        &.is-winner {
            background-color: $yellow;
        }

        &.is-loser {
            opacity: 0.6;
            background-color: $red;
        }

        .person-icon {
            width: 50px;
        }

        .card-img-top {
            background: no-repeat center center;
            background-size: cover;
            height: 120px;
        }

        .info {
            margin-bottom: 0;
        }

        .badge-secondary {
            background-color: $yellow;

            &.value {
                color: $black;
            }
        }

        .value {
            color: $gray;
        }

    }
</style>
