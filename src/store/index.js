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
        getData(context, limit) {
            return new Promise((resolve, reject) => {
                axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: limit
                    }
                }).then(resp => {
                    resolve(context.commit('updatePosts', resp.data));
                }).catch(function (err){
                    resolve(err)
                })
            })
        },
        deletePost(context, id) {
            return new Promise((resolve, reject) => {
                axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then(resp => {
                        resolve(resp)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        postData(context, post) {
            return new Promise((resolve, reject) => {
                axios.post('https://jsonplaceholder.typicode.com/posts/', post)
                    .then(resp => {
                        resolve(resp)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
    },
    namespaced: true
})

