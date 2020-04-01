<template>
    <div class="co-battle-card card">

        <div
            class="card-img-top"
            :style="{backgroundImage: 'url(' + require('@/assets/images/star-wars-characters.jpg')}"
        ></div>

        <div class="card-body">

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

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import PersonIcon from '@/components/icons/PersonIcon.vue';
    import {PersonDtoInterface} from '@/interfaces/PersonDtoInterface';
    import {StarshipDtoInterface} from '@/interfaces/StarshipDtoInterface';
    import {GameModes} from '@/enums/gameModes';

    @Component({
        name: 'BattleCard',
        components: {PersonIcon},
    })
    export default class BattleCard extends Vue {
        @Prop({required: true}) public battleResource!: PersonDtoInterface | StarshipDtoInterface;
        @Prop({required: true, default: GameModes.PEOPLE}) public gameMode!: string;
    }
</script>

<style lang="scss" scoped>
    .co-battle-card {

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
