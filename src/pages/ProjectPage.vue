<template>
    <header>
    <div class="panel">
        <h1 style="font-family: Segoe Print">Страница с проектами</h1>
        <div>
        <my-button style="display: flex; justify-content: center; background-color: rgba(0, 0, 0, 0);font-family: 'Segoe Print'; font-size: 21px; border: 2px solid gray; border-radius: 0px"
                   @click="showDialog">Создать проект</my-button>
        <my-dialog v-model:show="dialogVisible">
            <project-form @create="createProject"/>
        </my-dialog>
        </div>
        <project-list
                :projects="projects"
                @remove="removeProject"
        />


    </div>
    </header>

    <footer>

    </footer>
</template>

<script>
    import MyDialog from "@/components/UI/MyDialog";
    import MyButton from "@/components/UI/MyButton";
    import ProjectList from "@/components/ProjectList";
    import ProjectForm from "@/components/ProjectForm";
    import axios from 'axios';
    export default {
        components: {
            ProjectForm,
            ProjectList,
            MyDialog,
            MyButton
        },
        data(){
            return {
                projects: [],
                dialogVisible: false,
            }
        },
        methods: {
            createProject(project) {
                this.projects.push(project);
                this.dialogVisible = false;
            },
            removeProject(project){
                this.projects = this.projects.filter(p => p.id !== project.id);
            },
            showDialog() {
                this.dialogVisible = true;
            },
            async fetchProjects() {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.projects = response.data;
                } catch (e) {
                    alert('Ошибка');
                }
            }
        },
        mounted() {
            this.fetchProjects();
        }
    }
</script>

<style>
    header {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #817E7E;
        background-color: #575757;
    }
    footer {
        width: 100%;
        height: 79px;
        border-top: 1px solid #817E7E;
        background-color: #6B6B6B;
    }
    center {
        width: 100%;
        min-height: 800px;
        background-color: #616161;
        padding-top: 4px;
    }

    center .panel {
        font-size: 2em;
        border-bottom: 1px solid grey;
    }
    .right {
        float: right;
    }
    .panel li a {
        color: #FAFAFA;
    }

    .panel li a:hover {
        color: #F49494;
        border-top: 5px solid #F49494;
    }

</style>