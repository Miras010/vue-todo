import {createStore} from "vuex";
import {postModule} from "./postModule";
import axios from "axios";

export default createStore({
    state: () => ({
        posts: [],
        limit: 10
    }),
    getters: {
        allPosts(state) {
            return state.posts
        },
        detailPost: (state) => (id) => {
            return state.posts.find(p => p.id === id)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, post) {
            post.id = Date.now()
            state.posts.push(post)
        },
        removePost(state, post) {
            state.posts = state.posts.filter(p => p.id !== post.id)
        },
    },
    actions: {
        async fetchData (context, limit) {
            try {
                const resp = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: limit
                    }
                })
                context.commit('updatePosts', resp.data)
            } catch (e) {
                alert(e)
            }
        }
    },
    namespaced: true
})

