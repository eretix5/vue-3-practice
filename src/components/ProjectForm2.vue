<template>
    <form class="edit" @submit.prevent>
        <center>
        <h2 style="font-family: 'Segoe Print'">Что Вы желаете сделать?</h2>
            <div class="panel">
        <a style="display: flex; justify-content: center; margin-top: 20px; color: rgba(37,37,37,0.89)" href="/createS">Создать сводник</a>
        <a style="display: flex; justify-content: center; margin-top: 20px; color: rgba(37,37,37,0.89)" href="/updateData">Обновить данные</a>
            </div>
        </center>
    </form>
</template>

<script>
    export default {

    }
</script>

<style scoped>

center {
    width: 100%;
    min-height: 300px;
    background-color: #616161;
    padding-top: 4px;
}

center .panel {
    font-size: 1em;
    border-bottom: 0px solid grey;
}

center .panel li a {
    color: #FAFAFA;
}

center .panel li a:hover {
    color: #F49494;
    border-top: 5px solid #F49494;
}
</style>