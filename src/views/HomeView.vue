<template>
    <div class="co-home-view">
        <ChooseResource/>
        <Battleground/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import ChooseResource from '@/components/home-view/ChoseResource.vue';
    import Battleground from '@/components/home-view/Battleground.vue';

    @Component({
        name: 'HomeView',
        components: {Battleground, ChooseResource},
    })
    export default class HomeView extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-home {
    }
</style>
