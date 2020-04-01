<template>
    <div class="co-app">
        <AppHeader/>
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    // @ts-ignore
    import Bootstrap from 'bootstrap';
    import AppHeader from '@/components/global/AppHeader.vue';

    @Component({
        name: 'App',
        components: {AppHeader},
    })
    export default class App extends Vue {

    }
</script>

<style lang="scss">
    @import "~bootstrap/dist/css/bootstrap.min.css";
    @import "assets/scss/style";

    .co-app {
        width: 100%;
        height: 100vh;

        &:before {
            content: '';
            position: fixed;
            left: 0;
            right: 0;
            z-index: -1;
            display: block;
            background-image: url("assets/images/background-space.jpg");
            background-size: cover;
            width: 100%;
            height: 100%;
            filter: blur(4px);
            transform: scale(1.1);
        }

    }
</style>
