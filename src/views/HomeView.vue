<template>
    <div class="co-home-view">
        <ChooseResource/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import ChooseResource from '@/components/home-view/ChoseResource.vue';

    @Component({
        name: 'HomeView',
        components: {ChooseResource},
    })
    export default class HomeView extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-home {
    }
</style>
