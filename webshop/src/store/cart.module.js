
const cartService = require("@/shared/services/cart.service");

export const cart = {
    namespaced: true,
    state: {
        currentCart: {},
    },
    getters: {
        currentCart: state => state.currentCart,
        currentCartSize: (state, getters) => {
            return getters?.currentCart?.shoesList.length || 0
        }
    },
    actions: {
        getCartByUserId({commit}, userId) {
            let result = {}
            return new Promise((resolve, reject) => {
                cartService.getCartByCustomerId(userId).then(snapShot => {
                    if (snapShot !== null) {
                        snapShot.forEach(doc => {
                            commit("setCurrentCart", doc.data())
                        })
                    }
                    result = snapShot;
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        pushItemToCart({commit}, cart) {
            let result = {}
            return new Promise((resolve, reject) => {
                cartService.saveCart(cart).then(res => {
                    commit("setCurrentCart", cart)
                    result = res;
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        deleteCurrentCartFromDb({commit}, cartId){
                let result = {}
                return new Promise((resolve, reject) => {
                    cartService.removeCart(cartId).then(() => {
                        commit("resetCurrentCart")

                        resolve(result)
                    }).catch((error) => {
                        reject(error)
                    })
                })
        }
    },
    mutations: {
        setCurrentCart(state, cartItem) {
            state.currentCart = cartItem
        },
        resetCurrentCart(state){
            state.currentCart = {}
        }
    }
}
