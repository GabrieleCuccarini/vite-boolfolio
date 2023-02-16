import {createRouter, createWebHistory} from 'vue-router';

import Home from "./pages/Home.vue";
import Contacts from "./pages/Contacts.vue";
import About from "./pages/AboutUs.vue";
import ProjectsIndex from "./pages/projects/index.vue";
import ProjectsShow from "./pages/projects/show.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/contatti",
            name: "Contacts",
            component: Contacts,
        }, {
            path: "/chisiamo",
            name: "About",
            component: About,
        }, {
            path: "/projects",
            name: "projects.index",
            component: ProjectsIndex,
        }, {
            path: "/projects/:id",
            name: "projects.show",
            component: ProjectsShow,
        },
    ],
})

export {router}