import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: []
    },
    getters: {},
    mutations: {
        addCart(state, payload) {
            let oldProduct = state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                oldProduct.count += 1
            } else {
                payload.count = 1
                state.cartList.push(payload)
            }
        }
        //---------------------------------
        // let oldProduct = null;

        //     for (let item of state.cartList) {
        //         if (item.iid === payload.iid) {
        //             oldProduct = item
        //         }
        //     }
        //     //判断oldproduct
        //     if (oldProduct) {
        //         oldProduct.count += 1
        //     } else {
        //         payload.count = 1
        //         state.cartList.push(payload)
        //     }
        // }

    },
    actions: {},
    modules: {}
})