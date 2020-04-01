<template>
    <button class="co-app-button u-a3">
        {{text}}
    </button>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component({
        name: 'AppButton',
    })
    export default class AppButton extends Vue {
        @Prop({required: true}) public text!: string;
    }
</script>

<style lang="scss" scoped>
    .co-app-button {
        background-color: $yellow;
        color: $black;
        padding: 10px 20px;
        border: 1px solid $yellow;
        border-radius: 5px;
        transition: all .3s ease-in-out;

        &:hover {
            background-color: $black;
            border: 1px solid $white;
            color: $white;
        }

        &.is-active {
            background-color: $white;
            border: 1px solid $white;
            color: $black;
            pointer-events: none;
        }
    }
</style>
