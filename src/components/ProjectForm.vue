<template>
    <form @submit.prevent>
        <h4>Создание проекта</h4>
        <my-input
                v-model="project.title"

                type="text"
                placeholder="Название"
        />
        <my-input
                v-model="project.body"

                type="text"
                placeholder="Описание"
        />
        <my-button @click="createProject" style="align-self: center; margin-top: 15px">Создать</my-button>
    </form>
</template>

<script>
    import MyButton from "@/components/UI/MyButton";
    import MyInput from "@/components/UI/MyInput";
    export default {
        components: {MyInput, MyButton},
        data(){
            return{
                project: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createProject() {
                this.project.id=Date.now();
                this.$emit('create', this.project)
                this.project = {
                    title: '',
                    body: ''
                }
            }
        }
    }
</script>

<style scoped>

    form {
        display: flex;
        flex-direction: column;
    }
</style>