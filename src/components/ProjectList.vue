<template>
    <div v-if="projects.length > 0" class="head">
        <h3 style="font-family: Segoe Print; text-align: center">Список проектов</h3>
    <transition-group name="project-list">
        <project-item
                :project="project"
                v-for="project in projects"
                :key="project.id"
                @remove="$emit('remove', project)"
        />
    </transition-group>
    </div>
        <h2 v-else style="color: rgba(91,21,25,0.88)">Список проектов пуст</h2>
</template>

<script>
    import ProjectItem from "@/components/ProjectItem";
    export default {
        components: {
            ProjectItem
        },
        props: {
            projects: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
.project-list-item {
    display: inline-block;
    margin-right: 10px;
}
    .project-list-enter-active,
    .project-list-leave-active {
        transition: all 0.5s ease;
    }
    .project-list-enter-from,
    .project-list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
.head {
    min-width: 500px;
    min-height: 500px;
    font-family: "", sans-serif;
}
</style>