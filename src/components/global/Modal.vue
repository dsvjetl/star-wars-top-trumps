<template>
    <transition name="fade">
        <div
            class="co-modal"
            v-if="show"
        >

            <div class="window">

                <p
                    class="u-a2 message"
                    v-html="message"
                >
                </p>

                <AppButton
                    text="ok"
                    @click.native="closeModal()"
                />

            </div>

        </div>
    </transition>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import AppButton from '@/components/global/AppButton.vue';
    import {eventBus} from '@/helpers/eventBus';
    import {EventBusEventNames} from '@/enums/eventBusEventNames';

    @Component({
        name: 'Modal',
        components: {AppButton},
    })
    export default class Modal extends Vue {
        public message: string = '';
        public show: boolean = false;

        public mounted() {
            this.eventBusListeners();
        }

        public closeModal() {
            this.show = false;
        }

        private openModal() {
            this.show = true;
        }

        private eventBusListeners() {
            eventBus.$on(EventBusEventNames.OPEN_MODAL, (message: string) => {
                this.message = message;
                this.openModal();
            });

            eventBus.$on(EventBusEventNames.CLOSE_MODAL, () => {
                this.closeModal();
            });
        }
    }
</script>

<style lang="scss" scoped>
    .co-modal {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        background-color: rgba($black, .5);

        .window {
            margin: auto;
            width: percentage(16 / 24);
            padding: 10px 20px;
            background-color: $white;
            color: $black;
            border-radius: 5px;
            text-align: center;
        }

        .message {
            font-family: Roboto, sans-serif;
        }
    }
</style>
