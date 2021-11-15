const authService = require("@/shared/services/auth.service");
import {store} from "@/store";

export const authentication = {
    namespaced: true,
    state: {
        token:  null,
        isAdmin: false,
        currentUser: null
    },
    getters: {
        token: state => state.token,
        currentUser: state => state.currentUser,
        isAdmin: state => state.isAdmin
    },
    actions: {
        login({commit}, credentials) {
            let result = {}
            return new Promise((resolve, reject) => {
                authService.login(credentials.email, credentials.password).then(
                    (userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        result = userCredential
                        commit("isAdmin", user.multiFactor.user.email)
                        commit('loginOrSignupSuccess', user.multiFactor.user)
                        resolve(result)
                    }, (error) => {
                        result = error
                        commit('loginFailure', error)
                        reject(error)
                    })
                    .catch(error => {
                        commit('loginFailure', error)
                        reject(error)
                    })
            })
        },
        logout({commit}) {
            commit('logout')
            store.commit('order/resetOrdersList')
            store.commit('cart/resetCurrentCart')
            return authService.logout();
        },
        signUp({commit}, credentials) {
            let result = {}
            return new Promise((resolve, reject) => {
                authService.signUp(credentials.email, credentials.password).then(
                    (userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        result = userCredential
                        commit("isAdmin", user.multiFactor.user.email)
                        commit('loginOrSignupSuccess', user.multiFactor.user)
                        resolve(result)
                    }, (error) => {
                        result = error
                        commit('loginFailure', error)
                        reject(error)
                    })
                    .catch(error => {
                        commit('loginFailure', error)
                        reject(error)
                    })
            })
        },
    },
    mutations: {
        loginOrSignupSuccess(state, user) {
            state.currentUser = user
            state.currentUser.isLoggedIn = true;
        },
        loginFailure(state) {
            state.currentUser = null
            state.token = null

        },
        logout(state) {
            state.currentUser.isLoggedIn = false;
            state.token = null
        },
        setUser(state, user){
            state.currentUser = user
        },
        setToken(state, token){
            state.token = token
        },
        isAdmin(state, email){
            state.isAdmin = email === "majortamas313@gmail.com"
        }
    }
}
