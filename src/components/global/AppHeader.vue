<template>
    <header class="app-header">
        <h1 class="u-a1">Star Wars Top Trumps</h1>
    </header>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component({
        name: 'AppHeader',
    })
    export default class AppHeader extends Vue {

    }
</script>

<style lang="scss" scoped>
    .app-header {
        text-align: center;
        padding: 20px 0;

        h1 {
            color: $yellow;
        }
    }
</style>
