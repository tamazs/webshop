const orderService = require("@/shared/services/order.service");

export const order = {
    namespaced: true,
    state: {
        orders: []
    },
    getters: {
        ordersList: state => state.orders,
        totalIncome: state => {
            let totalIncome = 0
            state.orders.forEach(x => totalIncome += x.total)
            return totalIncome
        },
        orderCount: state => {
            return state.orders.length
        },
        totalNumberOfItems: state => {
            let counter = 0
            state.orders.forEach(x => counter += x.shoesList.length)
            return counter
        }
    },
    actions: {
        getOrders({commit}) {
            let result = {}
            return new Promise((resolve, reject) => {
                orderService.getOrders().then(snapShot => {
                    if (snapShot !== null) {
                        snapShot.forEach(doc => {
                            commit("pushOrdersToList", doc.data())
                        })
                    }
                    result = snapShot;
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        changeOrderStatus({commit}, order) {
            let result = {}
            return new Promise((resolve, reject) => {
                orderService.saveOrder(order).then(res => {
                    commit("updateOrderList", order)
                    result = res;
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
    },
    mutations: {
        pushOrdersToList(state, order) {
            state.orders.push(order)
        },
        updateOrderList(state,order){
           let objIndex = state.orders.findIndex((obj => obj.id === order.id));
           state.orders[objIndex] = order
        },
        resetOrdersList(state){
            state.orders = []
        }
    }
}
