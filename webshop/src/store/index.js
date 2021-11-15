import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {authentication} from '@/store/authentication.module'
import {cart} from '@/store/cart.module'
import {order} from '@/store/order.module'

export const store =  new Vuex.Store({
    modules: {
        authentication,
        cart,
        order
    }
})
