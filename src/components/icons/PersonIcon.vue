<template>
    <svg class="co-person-icon bi bi-person-fill" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"></path>
    </svg>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component({
        name: 'PersonIcon',
    })
    export default class PersonIcon extends Vue {

    }
</script>

<style lang="scss" scoped>
    .co-person-icon {
    }
</style>
