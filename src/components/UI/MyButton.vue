<template>
    <div class="btn">
<slot></slot>
    </div>
</template>

<script>
    export default {
        name: "my-button"
    }
</script>

<style scoped>
    .btn {

        padding: 10px 15px;
        border: 1px solid slategray;
        background: slategray;
        border-radius: 12px;
    }
</style>