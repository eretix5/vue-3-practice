<template>
    <form class="edit" @submit.prevent>
        <h2>Заполняй давай форму</h2>
        <input type="text" class="field" placeholder="емаил" />
        <input type="text" class="field" placeholder="Пороль" />
        <input type="text" class="field" placeholder="Падверди пороль" />
        <my-button class="btn">Сайнап</my-button>
    </form>
</template>

<script>
    export default {
        name: "ProjectForm4"
    }
</script>

<style scoped>
    .edit {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .field {
        padding-left: 10px;
        width: 100%;
        height: 30px;
        border: 2px solid grey;
        border-radius: 20px;
        font-family: "Segoe Print", sans-serif;
        font-size: 1em;
        margin-top: 10px;
    }

    .field:hover {
        border: 2px solid #FF0000;
        -moz-transition: all.6s ease;
        -webkit-transition: all.6s ease;
        -ms-transition: all.6s ease;
        -o-transition: all.6s ease;
    }

    .field:focus {
        border: 3px solid #FF0000;
        border-radius: 20px;
        box-shadow: 0 15px 15px -10px rgba(0,0,0, .5);
        -moz-transition: all.6s ease;
        -webkit-transition: all.6s ease;
        -ms-transition: all.6s ease;
        -o-transition: all.6s ease;
    }
    .btn {
        position: relative;
        padding: 20px;
        width: 100px;
        right: -180px;
        border: 1px solid slategray;
        margin-top: 10px;
        background: slategray;
        border-radius: 12px;
    }
</style>