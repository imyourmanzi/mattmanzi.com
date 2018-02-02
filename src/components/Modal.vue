<template>
    <!-- WORK IN PROGRESS; TODO: Figure this out or maybe get a library -->
    <div class="modal-cover" @click="dismiss()">
        <div class="modal">
            <div class="modal-header">
                <slot name="header"></slot>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        visible: true;
    },
    methods: {
        dismiss() {
            this.visible = false;
        }
    }
}

</script>

<style scoped>

.modal-cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9998;

    background-color: rgba(0, 0, 0, 0.5);

    transition: background-color 0.3s;
}

.modal {
    position: relative;
    top: 7%;
    width: 50%;
    height: auto;
    margin: auto;

    color: black;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 5px #000000;
}

</style>
