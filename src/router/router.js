import main from "../components/main";
import {createRouter, createWebHashHistory} from "vue-router";
import postsPage from "../components/postsPage";
import detailPost from "../components/detailPost";


const routes = [
    {
        path: '/',
        component: main
    },
    {
        path: '/posts',
        component: postsPage
    },
    {
        path: '/posts/:id',
        component: detailPost
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router
