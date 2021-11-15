
const cartService = require("@/shared/services/cart.service");

export const cart = {
    namespaced: true,
    state: {
        currentCart: {},
        currentCartSize: 0
    },
    getters: {
        currentCart: state => state.currentCart,
        currentCartSize: state => state.currentCartSize,
        totalPrice: state => {
            let total = 0
            state.currentCart.shoesList.forEach(x => total += x.price)
            return total
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
        },
        deleteShoesFromCart({commit}, removeObject){
            const indexOfShoes = removeObject.currentCart.shoesList.findIndex(item => item.selectedSize === removeObject.productSize && item.productId === removeObject.productId);
            if (indexOfShoes > -1) {
            removeObject.currentCart.shoesList.splice(indexOfShoes, 1)
            }
             let result = {}
            return new Promise((resolve, reject) => {
                cartService.saveCart(removeObject.currentCart).then(res => {
                    commit("setCurrentCart", removeObject.currentCart)
                    result = res;
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
            state.currentCartSize = cartItem.shoesList.length
        },
        resetCurrentCart(state){
            state.currentCart = {}
            state.currentCart.shoesList = []
            state.currentCartSize = 0
        }
    }
}