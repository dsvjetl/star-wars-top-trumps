<template>
    <div class="co-choose-resource">
        <h3 class="u-a3 title">Choose battle type:</h3>
        <div class="buttons-wrapper">
            <AppButton
                class="button"
                v-for="gameModeData in gameModesData"
                :key="gameModeData.value"
                :class="{'is-active': gameModeData.value === gameMode}"
                :text="gameModeData.text"
                @click.native="chooseBattleType(gameModeData.value)"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppButton from '@/components/global/AppButton.vue';
    import {GameModesDataInterface} from '@/interfaces/GameModesDataInterface';
    import {GameModes} from '@/enums/gameModes';
    import {storeModuleNames} from '@/enums/storeModuleNames';

    @Component({
        name: 'ChooseResource',
        components: {AppButton},
    })
    export default class ChooseResource extends Vue {
        public gameModesData: GameModesDataInterface[] = [
            {value: GameModes.PEOPLE, text: 'People'},
            {value: GameModes.STARSHIPS, text: 'Starships'},
        ];

        public get gameMode(): string {
            return this.$store.getters[`${storeModuleNames.STAR_WARS_RESOURCES}/gameMode`];
        }

        public chooseBattleType(battleType: string) {
            this.$store.commit(`${storeModuleNames.STAR_WARS_RESOURCES}/setGameMode`, battleType);
            this.$store.commit(`${storeModuleNames.STAR_WARS_RESOURCES}/resetPersonsAndStarships`);
            this.$store.commit(`${storeModuleNames.PLAYERS}/resetPlayerScores`);
        }
    }
</script>

<style lang="scss" scoped>
    .co-choose-resource {
        padding-bottom: 30px;

        .title {
            color: $white;
            text-align: center;
            padding: 5px;
        }

        .buttons-wrapper {
            display: flex;
            justify-content: center;
        }

        .button {
            margin: 0 10px;
        }
    }
</style>
