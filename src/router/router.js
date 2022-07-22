import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import ProjectPage from "@/pages/ProjectPage";
import updateData from "@/pages/updateData";
import createS from "@/pages/createS";
const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/projects',
        component: ProjectPage
    },
    {
        path: '/updateData',
        component: updateData
    },
    {
        path: '/createS',
        component: createS
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})

export default router;