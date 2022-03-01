import {createRouter, createWebHashHistory} from "vue-router"

// страницы лучше перемещать в отдельную от компонентов директорию
import main from "@/pages/main"
import postsPage from "@/pages/postsPage"
import detailPost from "@/pages/detailPost"


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
        component: detailPost,
        props: true
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router
