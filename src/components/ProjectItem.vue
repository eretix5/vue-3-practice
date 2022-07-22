<template>
    <div class="project">
        <center>
        <div class="panel">
        <p class="title"><strong>{{project.title}}</strong></p>
        <p class="body"><strong>{{project.body}}</strong></p>
            <div class="ddd">
            <my-button style="display: flex; justify-content: center; border-radius: 0px" @click="$emit('remove', project)">Удалить</my-button>
            <my-button style="display: flex; justify-content: center; margin-top: 15px; border-radius: 0px" @click="showD">Редактировать</my-button> </div>
            <my-dialog v-model:show="dialogVis"><project-form2></project-form2></my-dialog>
        </div>
        </center>
        </div>
</template>
<script>
    import MyButton from "@/components/UI/MyButton";
    import ProjectForm2 from "@/components/ProjectForm2";
    import MyDialog from "@/components/UI/MyDialog";
    export default {
        components: {MyButton, ProjectForm2, MyDialog},
        props: {
            project: {
                type: Object,
                required: true,
            }
        },
        data() {
            return{
                dialogVis: false,
            }
        },
        methods: {
            showD() {
                this.dialogVis = true;
            }
        }
    }
</script>

<style scoped>
    .head {
        width: 100%;
        height: 100px;
        font-family: "", sans-serif;
    }
    .project {
        display: flex;

        #position: relative;
    }
    .body {
        #position: absolute;
        border: 2px solid darkgrey;
        border-radius: 0px;
    }
    .title {
        border: 2px solid darkgrey;
        border-radius: 0px;
        margin-top: 10px;
        #padding: 10px;
        #position: relative;

    }
    .ddd {
        margin-bottom: 20px;

    }
    center {
        width: 100%;
        min-height: 300px;
        background-color: #616161;
        padding-top: 4px;
    }

    center .panel {
        font-size: 2em;
        border-bottom: 1px solid grey;

    }
    center .panel p {
        color: rgba(34,33,34,0.85);
    }


</style>